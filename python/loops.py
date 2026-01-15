# # ❌ SEM LOOP (tedioso e longo)

# # print("Bom dia, aluno 1")
# # print("Bom dia, aluno 2")
# # print("Bom dia, aluno 3")
# # print("Bom dia, aluno 4")
# # print("Bom dia, aluno 5")

# # # ✅ COM LOOP (fácil e flexível)
# # for aluno in range(1, 6):
# #     print(f"Bom dia, aluno {aluno}")
# # "Loops são para fazer o computador trabalhar por você!"

# # AULA 3 --- LOOPS EM PYTHON

# print("== LOOP FOR - REPETIÇÕES CONTADAS===")


# # "i" é uma variavel convencionada representa "index, indice ou iteration"

# # range COM 2 PARAMETROS (início,   fim  )
# #                           ↑        ↑      
# #                         começa   para    
# #                         neste    antes   
# #                         número   deste  


# # 1. for BASICO COM RANGE
# print("1. contagem de 1 a 5:")
# for i in range (1,6) : # 1, 2, 3, 4, 5
#     print(f"\n  Contagem: {i}")


#     # range COM 1 PARAMETRO (  fim  )
# #                               ↑      
# #                             para    
# #                             antes   
# #                             deste  

# # 2.for RANGES DIFERENTES

# print("\n\n de 0 a 4")
# for i in range(5):  # 0, 1, 2, 3, 4 
#     print (f"\n {i}", end="")




# # range COM 3 PARAMETROS (START,  stop,   step)
# #                           ↑        ↑      ↑
# #                         começa   para   de quanto
# #                         neste    antes  em quanto
# #                         número   deste  "pula"



# print("\n\nDe 2 a 10, pulando de 2 em 2:")
# for i in range(2, 11, 2): #2, 4, 6 , 8 ,10
#     print(f" {i}", end="")

# print("\n\nContagem regressiva:")
# for i in range(5, 0, -1): # 5, 4, 3, 2, 1
#     print(f" \n{i}", end= "")
    
# # PARTE 3 FOR COM LISTAS

# print("\n=== FOR COM LISTAS")

# # 1. PERCORRENDO UMA LISTA

# frutas = ["maçã", "banana", "laranja","uva","morango"]

# print("1. Lista de frutas:")
# for fruta in frutas:
#     print(f" - {fruta}")

# # 2. COM ENUMARATE (indice e valor)
# print("\n2. Frutas com posição:")
# for indice, fruta in enumerate(frutas):
#     print(f"    Posição {indice}: {frutas}")

# # 3. PERCORRENDO STRINGS
# print("\n3. Percorrendo uma palavra:")
# palavra = "PYTHON"
# for letra in palavra:
#     print(f" Letra:{letra}")

# # PARTE 4 EXEMPLOS PRATICOS COM for

# # exemplo 1: calculadora de media

# print("\n=== CALCULADORA DE MÉDIA ===")

# quantidade = int(input("Quantas notas deseja calcular?"))
# soma = 0

# for i in range(1, quantidade + 1):
#     nota = float(input(f"Nota {i}: "))
#     soma += nota # soma = soma + nota

# media = soma / quantidade
# print(f"\nMédia das {quantidade} notas: {media:.1f}")

# if media >= 6:
#     print(" A P R O V A D O")
# else:
#     print("R E P R O V A D O")


# # TABUADA INTERATIVA

# print("\n === TABUADA INTERATIVA ===")

# numero = int (input("Digite um numero para ver sua tabuada"))

# print (f"\n Tabuada do {numero}:")
# for i in range(1, 11):
#     resultado = numero * i
#     print (f" {numero} x {i:2} = {resultado:3}")
       
# # LOOP WHILE

# print("\n=== LOOP WHILE - REPETE QUANDO")

# # WHILER BÁSICO
# print("1. Contagem regressiva com while:")
# contador = 5

# while contador > 0:
#     print(f"Contagem: {contador}")
#     contador -= 1 # contador = contador -1 

# print ("FOGUETE LANÇADO!")

# # 2. WHILE COM CONDIÇÃO COMPLEXA 

# print("\n 2. Sistema de tentativas:")
# senha_correta = "python123"
# tentativas = 3
# acertou = False

# while tentativas > 0 and not acertou:
#     senha = input (F"Digite a senha ({tentativas} tentativas restantes): ")

#     if senha == senha_correta:
#         print("Acesso permitido!")
#         acertou = True
#     else:
#         print("Senha incorreta!")
#         tentativas -= 1
# if not acertou:
#     print("Acesso bloqueado!")


# #  PARTE 6: CUIDADO COM LOOPS INFINITOS!
# # O QUE NUNCA FAZER:
# # python
# # # ❌ LOOP INFINITO (NUNCA FAÇA ISSO!)
# # # while True:
# # #     print("Isso vai travar seu computador!")

# # # ✅ SEMPRE TENHA UMA CONDIÇÃO DE PARADA
# # controle = True
# # contador = 0

# # while controle:
# #     print(f"Iteração {contador}")
# #     contador += 1
    
# #     if contador >= 5:
# #         controle = False  # CONDIÇÃO DE PARADA
# #         print("Loop finalizado com segurança!")
# # Padrão seguro para while:
# # python
# # # SEMPRE inicialize a variável de controle
# # continuar = "s"

# # while continuar.lower() == "s":
# #     # Seu código aqui
    
# #     continuar = input("\nDeseja continuar? (s/n): ")

# # PARTE 7 COMANDO BREAK

# print("=== COMANDO BREAK ===")

# print("Sistema de busca em lista:")
# numeros = [1, 3, 5, 7, 9, 11, 13, 15]
# busca = int(input("Digite um numero para buscar:"))

# for numero in numeros:
#     print(f"Verificando: {numero}")

#     if numero == busca:
#         print(f"Numero {busca} encontrado!")
#         break # PARA IMEDIAMENTE   

# print("Fim da busca!")

# #Se não encontrar, continua até o final.

# print("\n=== COMANDO CONTINUE ===")

# print("Números pares de 1 a 10:")
# for i in range(1, 11):
#     if i % 2 != 0:  # Se for ímpar
#         continue    # Pula para o próximo número
    
#     print(f"  Número par: {i}")


# print("\n" + "="*50)
# print("JOGO DE ADIVINHAÇÃO")
# print("="*50)

# import random

# numero_secreto = random.randint(1,100)
# tentativas = 7
# acertou = False

# print("Adivinhe o numero entre 1 e 100!")
# print(f"Você tem {tentativas} tentativas.")

# while tentativas > 0 and not acertou:
#     print(f"\nTentativas restantes: {tentativas}")
#     palpite= int(input("Seu palpite:"))

#     if palpite == numero_secreto:
#         print(f"Parabens! Você acertou! o numero era {numero_secreto}")
#         acertou = True
#     elif palpite < numero_secreto:
#         print("Tente um numero maior!")
#         tentativas -= 1
#     else:
#         print("Tente um numero menor!")
#         tentativas -= 1
#     if tentativas < 1 and not acertou:
#         print(f"\n GAME OVER! O numero era{numero_secreto}")
        
# print( "\n" + "=" *50 )
# print("CAIXA ELETRONICO 2.0")
# print("=" *50)

# saldo = 1500
# continuar = True

# print(f"Saldo Inicial:{saldo:.2f}")

# while continuar:
#     print("\n"+"-"*30)
#     print("Operações Disponiveis")
#     print("1. Consultar Saldo")
#     print("2. Saque")
#     print("3. Deposito ")
#     print("4. Extrato")
#     print("5. Sair")

#     opcao = input("\nEscolha uma opção (1-5): ")

#     if opcao == "1":
#         print(f"\n Saldo atual: R${saldo:.2f}")

#     elif opcao == "2":
#         valor = float(input("Valor do saque: R$"))

#         if valor > saldo:
#             print("Saldo insuficiente!")
#         elif valor <= 0:
#             print("Valor invalido")
#         else:
#             saldo -= valor
#             print(f"Saque realizado! Novo saldo: R${saldo:.2f}")
#     elif opcao == "3":
#         valor = float(input("Valor do deposito: R$ "))

#         if valor <= 0:
#             print("Valor invalido!")
#         else:
#             saldo += valor
#             print(f"Deposito realizado!Novo saldo: R${saldo:.2f}")
    
#     elif opcao == "4":
#         print("\n EXTRATO BANCARIO")
#         print(f"Saldo disponivel: R${saldo:.2f}")
#         print(f"Limite disponivel para saque: R${saldo:.2f}")

#     elif opcao == "5":
#         print("\n Obrigado por usar nosso caixa!")
#         continuar = False  

# else:
#     print("Opção invalida!")

# if continuar:
#     resposta = input("\nDeseja fazer outra operação? (s/n): ")
#     if resposta .lower() != 's':
#         print("\n Obrigado por usar nosso caixa!")
#         continuar = False 

#TESTES

# print("\n"+"-"*50)
# print("CONTADOR AUTOMATICO")
# print("-"*50)

# for i in range (1,41,2):
#     print(f"{i}","\n", end= "") 

# print("contagem finalizada!")

print("\n" + "-" *50)
print("Validador de senha")
print("")
