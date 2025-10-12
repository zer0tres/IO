function processarDados(usuarios) {
    let resultados = [];
    
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade > 18 && usuarios[i].ativo) {
            resultados.push({
                nome: usuarios[i].nome,
                email: usuarios[i].email,
                categoria: 'adulto'
            });
        }
    }
    
    return resultados;
}