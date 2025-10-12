// Código com bug - vamos pedir ajuda ao Copilot
function calcularEstatisticas(numeros) {
    const soma = numeros.reduce((a, b) => a + b, 0);
    const media = soma / numeros.length;
    const maior = Math.max(numeros);
    const menor = Math.min(numeros);
    
    return { soma, media, maior, menor };
}

// Teste que vai falhar
console.log(calcularEstatisticas([10, 20, 30, 40, 50]));