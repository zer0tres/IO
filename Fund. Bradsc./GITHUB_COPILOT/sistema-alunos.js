// criar sistema de gerenciamento de alunos para escola
// deve incluir: cadastrar aluno, calcular média, verificar aprovação
// cada aluno tem: nome, matricula, notas (array)
// média mínima para aprovação: 7
class Aluno {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = [];
    }

    cadastrarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            return `Nota ${nota} cadastrada para ${this.nome}.`;
        } else {
            return 'Nota inválida. Deve ser entre 0 e 10.';
        }
    }

    calcularMedia() {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((a, b) => a + b, 0);
        return soma / this.notas.length;
    }

    verificarAprovacao() {
        const media = this.calcularMedia();
        return media >= 7 ? `${this.nome} está aprovado com média ${media.toFixed(2)}.` : `${this.nome} está reprovado com média ${media.toFixed(2)}.`;
    }
}

// Exemplo de uso
const aluno1 = new Aluno('Ana', '2023001');
console.log(aluno1.cadastrarNota(8)); // Nota 8 cadastrada para Ana.
console.log(aluno1.cadastrarNota(6)); // Nota 6 cadastrada para Ana.
console.log(aluno1.cadastrarNota(9)); // Nota 9 cadastrada para Ana.
console.log(`Média de ${aluno1.nome}: ${aluno1.calcularMedia().toFixed(2)}`); // Média de Ana: 7.67
console.log(aluno1.verificarAprovacao()); // Ana está aprovado com média 7.67.

const aluno2 = new Aluno('Bruno', '2023002');
console.log(aluno2.cadastrarNota(5)); // Nota 5 cadastrada para Bruno.
console.log(aluno2.cadastrarNota(4)); // Nota 4 cadastrada para Bruno.
console.log(`Média de ${aluno2.nome}: ${aluno2.calcularMedia().toFixed(2)}`); // Média de Bruno: 4.50
console.log(aluno2.verificarAprovacao()); // Bruno está reprovado com média 4.50.       