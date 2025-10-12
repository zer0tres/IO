// Sistema de gerenciamento de tarefas com API JSONPlaceholder
// Usar async/await, fetch, tratamento de erros
// Incluir: buscar todas tarefas, buscar por ID, criar nova tarefa

class GerenciadorTarefas {
    constructor() {
        this.baseURL = 'https://jsonplaceholder.typicode.com/todos';
    }
    
    // Digite: "método assíncrono para buscar todas tarefas"
    async buscarTodasTarefas() {
        try {
            const response = await fetch(this.baseURL);
            if (!response.ok) {
                throw new Error('Erro ao buscar tarefas');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro:', error);
            return [];
        }
    }
    
    async buscarTarefaPorId(id) {
        try {
            const response = await fetch(`${this.baseURL}/${id}`);
            if (!response.ok) {
                throw new Error('Tarefa não encontrada');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro:', error);
            return null;
        }
    }
    
    async criarNovaTarefa(tarefa) {
        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(tarefa)
            });
            if (!response.ok) {
                throw new Error('Erro ao criar tarefa');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erro:', error);
            return null;
        }
    }
    
    // Digite: "método para buscar todas tarefas com tratamento de erro"
    
    // Digite: "método para buscar tarefa por ID com tratamento de erro"
    
    // Digite: "método para criar nova tarefa"
}

// Exemplo de uso
// testar a classe com exemplos práticos
const gerenciador = new GerenciadorTarefas();

(async () => {
    const todasTarefas = await gerenciador.buscarTodasTarefas();
    console.log('Todas as Tarefas:', todasTarefas.slice(0, 5)); // Mostrar apenas as 5 primeiras tarefas

    const tarefaPorId = await gerenciador.buscarTarefaPorId(1);
    console.log('Tarefa com ID 1:', tarefaPorId);

    const novaTarefa = await gerenciador.criarNovaTarefa({ userId: 1, title: 'Nova Tarefa', completed: false });
    console.log('Nova Tarefa Criada:', novaTarefa);
})();