// criar sistema de biblioteca com classes Livro e Usuario
// Livro: titulo, autor, isbn, disponivel (boolean)
// Usuario: nome, id, livrosEmprestados[]
// métodos: emprestarLivro(), devolverLivro(), listarLivrosDisponiveis()
// validar se livro está disponível antes de emprestar
class Livro {
    constructor(titulo, autor, isbn) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponivel = true;
    }
}

class Usuario {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
        this.livrosEmprestados = [];
    }

    emprestarLivro(livro) {
        if (livro.disponivel) {
            livro.disponivel = false;
            this.livrosEmprestados.push(livro);
            return `${this.nome} emprestou o livro "${livro.titulo}".`;
        } else {
            return `O livro "${livro.titulo}" não está disponível para empréstimo.`;
        }
    }

    devolverLivro(livro) {
        const index = this.livrosEmprestados.indexOf(livro);
        if (index !== -1) {
            livro.disponivel = true;
            this.livrosEmprestados.splice(index, 1);
            return `${this.nome} devolveu o livro "${livro.titulo}".`;
        } else {
            return `${this.nome} não tem o livro "${livro.titulo}" emprestado.`;
        }
    }

    listarLivrosDisponiveis(biblioteca) {
        const livrosDisponiveis = biblioteca.filter(livro => livro.disponivel);
        return livrosDisponiveis.length > 0 ? livrosDisponiveis.map(livro => livro.titulo).join(', ') : 'Nenhum livro disponível.';
    }
}

// Exemplo de uso
const livro1 = new Livro('1984', 'George Orwell', '1234567890');
const livro2 = new Livro('O Senhor dos Anéis', 'J.R.R. Tolkien', '0987654321');
const livro3 = new Livro('A Revolução dos Bichos', 'George Orwell', '1122334455');

const biblioteca = [livro1, livro2, livro3];

const usuario1 = new Usuario('Alice', 'U001');
console.log(usuario1.emprestarLivro(livro1)); // Alice emprestou o livro "1984".
console.log(usuario1.emprestarLivro(livro1)); // O livro "1984" não está disponível para empréstimo.
console.log(usuario1.listarLivrosDisponiveis(biblioteca)); // O Senhor dos Anéis, A Revolução dos Bichos
console.log(usuario1.devolverLivro(livro1)); // Alice devolveu o livro "1984".
console.log(usuario1.listarLivrosDisponiveis(biblioteca)); // 1984, O Senhor dos Anéis, A Revolução dos Bichos
console.log(usuario1.devolverLivro(livro2)); // Alice não tem o livro "O Senhor dos Anéis" emprestado.

const usuario2 = new Usuario('Bob', 'U002');
console.log(usuario2.emprestarLivro(livro2)); // Bob emprestou o livro "O Senhor dos Anéis".
console.log(usuario2.listarLivrosDisponiveis(biblioteca)); // 1984, A Revolução dos Bichos  