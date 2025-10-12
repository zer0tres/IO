//filtrar numeros maiores que 10 de um array
function filtrarMaioresQue10(numeros) {
    return numeros.filter(num => num > 10);
}

//testar a função
console.log(filtrarMaioresQue10([5, 12, 8, 20, 3, 15])); // saída: [12, 20, 15]
console.log(filtrarMaioresQue10([1, 2, 3, 4])); // saída: []