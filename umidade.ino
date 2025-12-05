const int sensorPin = 4;

void setup() {
  Serial.begin(115200);
  delay(3000); // Espera 3 segundos para conectar
  
  Serial.println("🎉 ESP32-S3 4MB DETECTADO!");
  Serial.println("=== TESTE SENSOR DE UMIDADE ===");
  
  // Informações do chip
  Serial.print("Chip: ");
  Serial.println(ESP.getChipModel());
  Serial.print("Flash Size: ");
  Serial.print(ESP.getFlashChipSize() / 1000000);
  Serial.println(" MB");
  Serial.println("==============================");
}

void loop() {
  int valor = analogRead(sensorPin);
  int percentual = map(valor, 0, 4095, 100, 0);
  
  Serial.print("Valor: ");
  Serial.print(valor);
  Serial.print(" | Umidade: ");
  Serial.print(percentual);
  Serial.println("%");
  
  delay(2000);
}
