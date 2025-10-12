// Código legado para refatorar - usar async/await e arrow functions
function buscarUsuario(id) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }
            return response.json();
        })
        .then(data => {
            return {
                nome: data.name,
                email: data.email,
                cidade: data.address.city
            };
        })
        .catch(error => {
            console.error('Erro:', error);
            return null;
        });
}

// Refatoração usando async/await e arrow functions
const buscarUsuarioRefatorado = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
            throw new Error('Usuário não encontrado');
        }
        const data = await response.json();
        return {
            nome: data.name,
            email: data.email,
            cidade: data.address.city
        };
    } catch (error) {
        console.error('Erro:', error);
        return null;
    }
};

// Exemplo de uso
buscarUsuarioRefatorado(1).then(usuario => console.log(usuario));

// Saída esperada:
// { nome: 'Leanne Graham', email: '    