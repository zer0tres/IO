// Exemplos de padrões modernos que o Copilot domina:

// 1. Destructuring
//usar destructuring para extrair nome e idade de usario
const usuario = { nome: 'João', idade: 30, cidade: 'São Paulo' };
const { nome, idade } = usuario;
console.log(`Nome: ${nome}, Idade: ${idade}`); // Nome: João, Idade: 30

// 2. Spread Operator
//usar spread operator para combinar dois arrays de números
const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const todosNumeros = [...numeros1, ...numeros2];
console.log(todosNumeros); // [1, 2, 3, 4, 5, 6]

// 3. Async/Await
//criar função assíncrona que busca dados de uma API e trata erros
const fetchDados = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
};
// 2. Async/Await com tratamento de erro
// usar optional chaining para acessar endereço seguro
const usuario2 = { nome: 'Maria', endereco: { cidade: 'Rio de Janeiro' } };
console.log(usuario2.endereco?.cidade); // Rio de Janeiro
console.log(usuario2.contato?.telefone); // undefined

// 3. Classes e Métodos
// criar classe Carro com métodos para calcular idade e verificar se é clássico
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
// 4. Array Methods avançados
// usar flatmap para transformar e achatar array
    idade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.ano;
    }
    
    isClassico() {
        return this.idade() > 25;
    }
}

// Exemplo de uso
const meuCarro = new Carro('Ford', 'Mustang', 1967);
console.log(`Idade do carro: ${meuCarro.idade()} anos`); // Idade do carro: 57 anos
console.log(`É um carro clássico? ${meuCarro.isClassico() ? 'Sim' : 'Não'}`); // É um carro clássico? Sim

// 4. Array Methods avançados
// usar flatmap para transformar e achatar array
const arrays = [[1, 2], [3, 4], [5, 6]];
const resultadoFlatMap = arrays.flatMap(x => x.map(n => n * 2));
console.log(resultadoFlatMap); // [2, 4, 6, 8, 10, 12]
