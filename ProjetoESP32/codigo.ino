#include <WiFi.h>
#include <PubSubClient.h>
#include <DHT.h>

// ================= CONFIGURAÇÃO WI-FI =================
const char* ssid = "SUA_REDE_WIFI";
const char* password = "SUA_SENHA";

// ================= CONFIGURAÇÃO MQTT =================
const char* mqtt_server = "test.mosquitto.org";  // Broker público gratuito
const int mqtt_port = 1883;
const char* mqtt_user = "";     // Vazio para broker público
const char* mqtt_pass = "";     // Vazio para broker público

// ================= TÓPICOS MQTT =================
// Tópicos para monitoramento
const char* TOPIC_TEMP = "estufa/joao/temperatura";
const char* TOPIC_HUMIDADE_AR = "estufa/joao/umidade_ar";
const char* TOPIC_SOLO = "estufa/joao/umidade_solo";
const char* TOPIC_SOLO_PORCENT = "estufa/joao/solo_porcentagem";
const char* TOPIC_BOMBA = "estufa/joao/status_bomba";
const char* TOPIC_LUZ = "estufa/joao/status_luz";
const char* TOPIC_VENTOINHAS = "estufa/joao/status_ventoinhas";
const char* TOPIC_EXAUSTOR = "estufa/joao/status_exaustor";
const char* TOPIC_INTENSIDADE = "estufa/joao/intensidade_luz";
const char* TOPIC_HORA = "estufa/joao/hora_sistema";
const char* TOPIC_ALERTAS = "estufa/joao/alertas";  // Alertas críticos

// ================= PINOS =================
#define PIN_DHT22         8
#define PIN_SENSOR_SOLO   15
#define PIN_RELE_LUZ      2
#define PIN_RELE_BOMBA    3
#define PIN_RELE_VENT1    4
#define PIN_RELE_VENT2    5
#define PIN_RELE_EXAUSTOR 6
#define PIN_PWM_LUZ       7

// ================= VARIÁVEIS GLOBAIS =================
DHT dht(PIN_DHT22, DHT22);
WiFiClient espClient;
PubSubClient client(espClient);

// Parâmetros ajustáveis
const int UMIDADE_SOLO_CRITICA = 1800;
const int TEMP_MAXIMA = 28;
const int UMIDADE_AR_MAXIMA = 70;
const int TEMPO_IRRIGACAO = 10;

// Estados
float temperatura = 0;
float umidadeAr = 0;
int umidadeSolo = 0;
int horaAtual = 8;
bool bombaAtiva = false;
bool luzLigada = false;
bool ventoinhasLigadas = false;
bool exaustorLigado = false;
int intensidadeLuz = 0;

// Timers
unsigned long ultimoEnvioMQTT = 0;
unsigned long ultimaLeituraDHT = 0;
unsigned long ultimaLeituraSolo = 0;
const long INTERVALO_MQTT = 10000;      // 10 segundos
const long INTERVALO_DHT = 5000;        // 5 segundos
const long INTERVALO_SOLO = 30000;      // 30 segundos

// ================= FUNÇÕES WI-FI =================
void conectarWiFi() {
  Serial.print("Conectando ao WiFi: ");
  Serial.println(ssid);
  
  WiFi.begin(ssid, password);
  
  int tentativas = 0;
  while (WiFi.status() != WL_CONNECTED && tentativas < 20) {
    delay(500);
    Serial.print(".");
    tentativas++;
  }
  
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\nWiFi conectado!");
    Serial.print("IP: ");
    Serial.println(WiFi.localIP());
  } else {
    Serial.println("\nFalha ao conectar WiFi");
  }
}

// ================= FUNÇÕES MQTT =================
void callback(char* topic, byte* payload, unsigned int length) {
  // Não necessário para apenas monitoramento
}

void reconectarMQTT() {
  while (!client.connected()) {
    Serial.print("Conectando ao broker MQTT...");
    
    String clientId = "ESP32-Estufa-Joao-" + String(random(0xffff), HEX);
    
    if (client.connect(clientId.c_str(), mqtt_user, mqtt_pass)) {
      Serial.println("Conectado!");
      
      // Publica mensagem de inicialização
      client.publish(TOPIC_ALERTAS, "Sistema da estufa conectado");
    } else {
      Serial.print("Falha, rc=");
      Serial.print(client.state());
      Serial.println(" tentando novamente em 5 segundos");
      delay(5000);
    }
  }
}

void enviarDadosMQTT() {
  if (!client.connected()) {
    reconectarMQTT();
  }
  
  // 1. DADOS DOS SENSORES
  client.publish(TOPIC_TEMP, String(temperatura).c_str());
  client.publish(TOPIC_HUMIDADE_AR, String(umidadeAr).c_str());
  client.publish(TOPIC_SOLO, String(umidadeSolo).c_str());
  
  // 2. PORCENTAGEM DO SOLO (mais amigável)
  int soloPorcent = map(umidadeSolo, 4095, 0, 0, 100);
  client.publish(TOPIC_SOLO_PORCENT, String(soloPorcent).c_str());
  
  // 3. STATUS DOS COMPONENTES
  client.publish(TOPIC_BOMBA, bombaAtiva ? "LIGADA" : "DESLIGADA");
  client.publish(TOPIC_LUZ, luzLigada ? "LIGADA" : "DESLIGADA");
  client.publish(TOPIC_VENTOINHAS, ventoinhasLigadas ? "LIGADAS" : "DESLIGADAS");
  client.publish(TOPIC_EXAUSTOR, exaustorLigado ? "LIGADO" : "DESLIGADO");
  client.publish(TOPIC_INTENSIDADE, String(intensidadeLuz).c_str());
  client.publish(TOPIC_HORA, (String(horaAtual) + ":00").c_str());
  
  // 4. VERIFICAÇÃO DE ALERTAS
  verificarAlertas();
  
  Serial.println("Dados enviados para MQTT");
}

void verificarAlertas() {
  String alerta = "";
  
  if (umidadeSolo > UMIDADE_SOLO_CRITICA) {
    alerta += "SOLO SECO | ";
  }
  
  if (temperatura > TEMP_MAXIMA) {
    alerta += "TEMPERATURA ALTA | ";
  }
  
  if (umidadeAr > UMIDADE_AR_MAXIMA) {
    alerta += "UMIDADE ALTA | ";
  }
  
  if (umidadeSolo < 500) {  // Solo muito molhado
    alerta += "SOLO MUITO MOLHADO | ";
  }
  
  if (alerta != "") {
    client.publish(TOPIC_ALERTAS, alerta.c_str());
  } else {
    client.publish(TOPIC_ALERTAS, "Tudo normal");
  }
}

// ================= FUNÇÕES SENSORES =================
void lerSensores() {
  unsigned long agora = millis();
  
  // Leitura DHT22
  if (agora - ultimaLeituraDHT >= INTERVALO_DHT) {
    float temp = dht.readTemperature();
    float umid = dht.readHumidity();
    
    if (!isnan(temp) && !isnan(umid)) {
      temperatura = temp;
      umidadeAr = umid;
      
      Serial.print("DHT22 -> Temp: ");
      Serial.print(temperatura);
      Serial.print("°C | Umidade Ar: ");
      Serial.print(umidadeAr);
      Serial.println("%");
    }
    ultimaLeituraDHT = agora;
  }
  
  // Leitura Sensor Solo
  if (agora - ultimaLeituraSolo >= INTERVALO_SOLO) {
    umidadeSolo = analogRead(PIN_SENSOR_SOLO);
    
    int porcentagem = map(umidadeSolo, 4095, 0, 0, 100);
    Serial.print("Solo -> Valor: ");
    Serial.print(umidadeSolo);
    Serial.print(" (");
    Serial.print(porcentagem);
    Serial.println("%)");
    
    ultimaLeituraSolo = agora;
  }
}

// ================= CONTROLE AUTOMÁTICO =================
void controleAutomatico() {
  // SIMULAÇÃO DO SISTEMA DE CONTROLE
  // (Use o código completo anterior para controle real)
  
  // Iluminação: Liga das 6h às 20h
  if (horaAtual >= 6 && horaAtual < 20) {
    luzLigada = true;
    ventoinhasLigadas = true;
    
    // Intensidade conforme horário
    if (horaAtual >= 6 && horaAtual < 12) intensidadeLuz = 100;
    else if (horaAtual >= 12 && horaAtual < 18) intensidadeLuz = 200;
    else intensidadeLuz = 150;
    
    // Irrigação se solo seco
    if (umidadeSolo > UMIDADE_SOLO_CRITICA && !bombaAtiva) {
      bombaAtiva = true;
      Serial.println("Bomba ligada (solo seco)");
      // Simulação: desliga após 10 segundos
      static unsigned long tempoBomba = 0;
      if (tempoBomba == 0) tempoBomba = millis();
      if (millis() - tempoBomba > (TEMPO_IRRIGACAO * 1000)) {
        bombaAtiva = false;
        tempoBomba = 0;
      }
    }
  } else {
    luzLigada = false;
    ventoinhasLigadas = false;
    intensidadeLuz = 0;
    bombaAtiva = false;
  }
  
  // Exaustor por temperatura/umidade
  exaustorLigado = (temperatura > TEMP_MAXIMA || umidadeAr > UMIDADE_AR_MAXIMA);
  
  // Simulação de passagem do tempo (1 minuto real = 1 hora simulado)
  static unsigned long ultimaHora = 0;
  if (millis() - ultimaHora >= 60000) {
    horaAtual++;
    if (horaAtual >= 24) horaAtual = 0;
    ultimaHora = millis();
  }
}

// ================= SETUP =================
void setup() {
  Serial.begin(115200);
  delay(1000);
  
  Serial.println("=== SISTEMA ESTUFA COM MQTT ===");
  Serial.println("Monitoramento remoto ativado");
  
  // Configura pinos
  pinMode(PIN_RELE_LUZ, OUTPUT);
  pinMode(PIN_RELE_BOMBA, OUTPUT);
  pinMode(PIN_RELE_VENT1, OUTPUT);
  pinMode(PIN_RELE_VENT2, OUTPUT);
  pinMode(PIN_RELE_EXAUSTOR, OUTPUT);
  pinMode(PIN_PWM_LUZ, OUTPUT);
  
  // Inicializa sensor
  dht.begin();
  
  // Conecta WiFi
  conectarWiFi();
  
  // Configura MQTT
  client.setServer(mqtt_server, mqtt_port);
  client.setCallback(callback);
  
  // Primeira conexão
  reconectarMQTT();
  
  Serial.println("Sistema pronto para monitoramento");
  Serial.println("================================");
}

// ================= LOOP =================
void loop() {
  // Mantém conexão MQTT
  if (!client.connected()) {
    reconectarMQTT();
  }
  client.loop();
  
  // Leitura dos sensores
  lerSensores();
  
  // Controle automático (simulado)
  controleAutomatico();
  
  // Envia dados via MQTT a cada 10 segundos
  unsigned long agora = millis();
  if (agora - ultimoEnvioMQTT >= INTERVALO_MQTT) {
    enviarDadosMQTT();
    ultimoEnvioMQTT = agora;
    
    // Log local
    Serial.println("--- STATUS LOCAL ---");
    Serial.print("Hora: ");
    Serial.print(horaAtual);
    Serial.print(":00 | Temp: ");
    Serial.print(temperatura);
    Serial.print("°C | Solo: ");
    Serial.print(map(umidadeSolo, 4095, 0, 0, 100));
    Serial.println("%");
  }
  
  delay(100);
}