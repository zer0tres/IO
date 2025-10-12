// criar sistema avançado de gerenciamento de alunos
// classe Aluno com: nome, matricula, notas[]
// métodos: adicionarNota(), calcularMedia(), verificarAprovacao()
// média mínima 7, arredondar média para 2 casas decimais
// incluir exemplo de uso com 3 alunos diferentes
class Aluno {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.notas = [];
    }

    adicionarNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.notas.push(nota);
            return `Nota ${nota} adicionada para ${this.nome}.`;
        } else {
            return 'Nota inválida. Deve ser entre 0 e 10.';
        }
    }

    calcularMedia() {
        if (this.notas.length === 0) return 0;
        const soma = this.notas.reduce((a, b) => a + b, 0);
        return parseFloat((soma / this.notas.length).toFixed(2));
    }

    verificarAprovacao() {
        const media = this.calcularMedia();
        return media >= 7 ? `${this.nome} está aprovado com média ${media}.` : `${this.nome} está reprovado com média ${media}.`;
    }
}

// Exemplo de uso
const aluno1 = new Aluno('Ana', '2023001');
console.log(aluno1.adicionarNota(8)); // Nota 8 adicionada para Ana.
console.log(aluno1.adicionarNota(6)); // Nota 6 adicionada para Ana.
console.log(aluno1.adicionarNota(9)); // Nota 9 adicionada para Ana.
console.log(`Média de ${aluno1.nome}: ${aluno1.calcularMedia()}`); // Média de Ana: 7.67
console.log(aluno1.verificarAprovacao()); // Ana está aprovado com média 7.67.

const aluno2 = new Aluno('Bruno', '2023002');
console.log(aluno2.adicionarNota(5)); // Nota 5 adicionada para Bruno.
console.log(aluno2.adicionarNota(4)); // Nota 4 adicionada para Bruno.
console.log(`Média de ${aluno2.nome}: ${aluno2.calcularMedia()}`); // Média de Bruno: 4.50
console.log(aluno2.verificarAprovacao()); // Bruno está reprovado com média 4.50.

const aluno3 = new Aluno('Carla', '2023003');
console.log(aluno3.adicionarNota(10)); // Nota 10 adicionada para Carla.
console.log(aluno3.adicionarNota(9.5)); // Nota 9.5 adicionada para Carla.
console.log(aluno3.adicionarNota(8.5)); // Nota 8.5 adicionada para Carla.
console.log(`Média de ${aluno3.nome}: ${aluno3.calcularMedia()}`); // Média de Carla: 9.33
console.log(aluno3.verificarAprovacao()); // Carla está aprovado com média 9.33.         