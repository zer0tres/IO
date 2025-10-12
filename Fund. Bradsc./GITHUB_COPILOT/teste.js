// calcular média de notas
function calcularMedia(notas) {
    return notas.reduce((a, b) => a + b, 0) / notas.length;
}