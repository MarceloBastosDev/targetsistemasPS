def inverterString(str):
    resultado = ''
    for i in range(len(str) - 1, -1, -1):
        resultado += str[i]
    return resultado

stringOriginal = input("Digite uma string para inverter: ")
stringInvertida = inverterString(stringOriginal)

print("String original:", stringOriginal)
print("String invertida:", stringInvertida)
