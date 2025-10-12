class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    // criar metodo que retorna a idade do carro
    idade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }
    
    // criar metodo que retorna se o carro é um clássico (mais de 25 anos)
    isClassico() {
        return this.idade() > 25;
    }
}

// Exemplo de uso
const meuCarro = new Carro('Ford', 'Mustang', 1967);
console.log(`Idade do carro: ${meuCarro.idade()} anos`); // Idade do carro: 57 anos
console.log(`É um carro clássico? ${meuCarro.isClassico() ? 'Sim' : 'Não'}`); // É um carro clássico? Sim

