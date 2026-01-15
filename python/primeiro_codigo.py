# """
# MEU PRIMEIRO CÓDIGO EM PYTHON
# Autor: João
# Data: 18/11/2025
# """

# # 1. COMENTARIOS - SÃO LINHAS QUE NÃO SÃO EXECUTADAS PELO INTERPRETADOR
# # ESTE É UM COMENTÁRIO DE UMA LINHA
print("=== INICIANDO NOSSO PROGRAMA ===")

#2. FUNÇÕES PRINT - mostra mensagens na tela
print("Olá, Mundo!") # imprime a mensagem Olá, Mundo!
print("estou aprendendo Python") # imprime a mensagem estou aprendendo Python.
print("\n=== TIPOS DE DADOS ===")


#3.1 texto (String- strf)
nome = "maria"
cidade = 'São Paulo'
print("Texto(string):", nome, cidade)

#3.2 número inteiro (int)
idade = 25
quantidade = 10
print("Número inteiro (int):", idade, quantidade)

#3.3 número decimal (float)
altura = 1.75
preco = 19.99
pi = 3.14159    
print("Número decimal (float):", altura, preco, pi)

#3.4 valor lógico (boolean - bool)
ativo = True
estudando = False
print("Valor lógico (boolean - bool):", ativo, estudando)

print("\n=== VARIAVEIS ===")
#4. VARIÁVEIS - são espaços na memória do computador onde podemos armazenar
# variaveis são como caixas que guardam valores
caixa_nome = "João"
caixa_idade = 30
caixa_saldo = 1500.50

print("Nome:", caixa_nome)
print("Idade:", caixa_idade)
print("Saldo:", caixa_saldo)

#Posso mudar o conteudo da caixa    
caixa_idade = 31
caixa_saldo = caixa_saldo + 500.00 # adicionando 500 ao saldo

print("\n---depois das alterações---")
print("Idade:", caixa_idade)
print("Saldo:", caixa_saldo)

# ✅ CORRETO:
nome_aluno = "Pedro"
idade2 = 20
_primeiro_nome = "Ana"

# ❌ ERRADO:
# 2idade = 20           # Não pode começar com número
# nome aluno = "Maria"  # Não pode ter espaço
# preço = 10.50         # Não pode usar acentos (em algumas versões)

#5. ENTRADA DE DADOS - função input() para receber dados do usuário

print("\n=== entrada de dados ===")

#INPUT - pede uma informação ao usuário

print("Vamos nos conhecer melhor!")

#Recebendo TEXTO
seu_nome = input("Qual é o seu nome? ")  # input sempre retorna uma string
print(f"Prazer em conhecer você,{seu_nome}!")

#Recebendo NÚMERO INTEIRO
sua_idade = input("Quantos anos você tem? ")
sua_idade = int(sua_idade)  # convertendo string para inteiro
print(f"então voce tem {sua_idade} anos!")
print(f"No ano que vem você terá {sua_idade + 1} anos.")

# ❌ ISSO PODE DAR ERRO:
# idade = input("Sua idade: ")
# idade + 1  # ERRO! Não pode somar texto com número

# ✅ FAÇA ASSIM:
idade = int(input("Sua idade: "))
# idade + 1  # AGORA FUNCIONA!

print("\n=== FIM DO PROGRAMA ===")
print("\n===operaçoes matematicas===\n")

numero1 = 15
numero2 = 4

print("Numeros:", numero1, "e", numero2)
print("Soma:", numero1 + numero2)         
print("Subtração:", numero1 - numero2)
print("Multiplicação:", numero1 * numero2)
print("Divisão:", numero1 / numero2)        
print("Divisão Inteira:", numero1 // numero2)
print("Resto da Divisão:", numero1 % numero2)
print("Potência:", numero1 ** 2) #15 elevado a 2

print("\n" + "=" *50)
print("CALCULADORA DE IDADE")
print("=" *50)

#coletando dados do usuario
nome = input("Qual é o seu nome? ")
ano_nascimento = int(input("Em que ano você nasceu? "))
ano_atual = 2025

idade = ano_atual - ano_nascimento
idade_2030 = 2030 - ano_nascimento

print("\n" + "-" *30)
print(f"resultados para {nome.upper()}:")
print(f"Idade atual: {idade} anos")
print(f"Idade em 2030: {idade_2030} anos")

if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.") 

print("\nObrigado por usar a nossa calculadora!")

print("=== CALCULADORA SIMPLES ===")
n1 = float(input("Digite o primeiro número: "))
n2 = float(input("Digite o segundo número: "))
print (n1 + n2)
print (n1 - n2)
print (n1 * n2)
print (n1 / n2)

celsius = float(input("digite a temperatura em celsius:"))
fahrenheit = celsius * 1.8 + 32
print (f"{celsius}°C = {fahrenheit}°F")

nome = str(input("Digite seu nome:"))
sobrenome = str(input("Digite seu sobrenome:"))
nickname = nome[:3] + sobrenome [:3] 
print(f"seu nome nickname é:{nickname}")

nome = str(input("Digite seu nome:"))
salario = float (input("Digite seu salario: "))
idade = int(input("Digite sua idade: "))

# print(f"""
#     Relatorio Final:
#     Nome: {nome}
#     Salario: {salario}
#     idade: {idade}
# """)

print("Relatorio Final:")
print(f"Nome:{nome}")
print(f"Salario: {salario}")
print(f"Idade: {idade}")

