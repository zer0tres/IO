// Sistema de e-commerce com classes Produto e Carrinho
// Produto: nome, preco, estoque
// Carrinho: itens[], metodos adicionarProduto(), calcularTotal()
// Validar estoque antes de adicionar ao carrinho
// Incluir exemplo com 3 produtos diferentes
class Produto {
    constructor(nome, preco, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.estoque = estoque;
    }
}

class Carrinho {
    constructor() {
        this.itens = [];
    }

    adicionarProduto(produto, quantidade) {
        if (produto.estoque >= quantidade) {
            produto.estoque -= quantidade;
            const itemNoCarrinho = this.itens.find(item => item.produto.nome === produto.nome);
            if (itemNoCarrinho) {
                itemNoCarrinho.quantidade += quantidade;
            } else {
                this.itens.push({ produto, quantidade });
            }
            return `${quantidade} unidade(s) de "${produto.nome}" adicionada(s) ao carrinho.`;
        } else {
            return `Estoque insuficiente para o produto "${produto.nome}". Disponível: ${produto.estoque}, solicitado: ${quantidade}.`;
        }
    }

    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.produto.preco * item.quantidade, 0);
    }
}

// Exemplo de uso
const produto1 = new Produto('Notebook', 3000, 5);
const produto2 = new Produto('Smartphone', 1500, 10);
const produto3 = new Produto('Headphones', 200, 15);

const meuCarrinho = new Carrinho();
console.log(meuCarrinho.adicionarProduto(produto1, 2)); // 2 unidade(s) de "Notebook" adicionada(s) ao carrinho.
console.log(meuCarrinho.adicionarProduto(produto2, 1)); // 1 unidade(s) de "Smartphone" adicionada(s) ao carrinho.
console.log(meuCarrinho.adicionarProduto(produto3, 20)); // Estoque insuficiente para o produto "Headphones". Disponível: 15, solicitado: 20.
console.log(`Total do carrinho: R$ ${meuCarrinho.calcularTotal()}`); // Total do carrinho: R$ 7500

