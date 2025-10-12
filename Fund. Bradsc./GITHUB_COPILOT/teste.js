// calcular média de notas
function calcularMedia(notas) {
    return notas.reduce((a, b) => a + b, 0) / notas.length;
}
//testar a função
console.log(calcularMedia([8, 7, 9, 6])); // saída: 7.5