document.querySelector("#botao-cadastrar").addEventListener("click", () => {
    // Pegar os valores dos inputs

    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: new Date().getTime(),
        nome: "Ronaldo",
        time: "Real Madrid",
        gols: 100,
        assistencias: 3,
        foto: "https://cdn.footystats.org/img/players/portugal-cristiano-ronaldo.png"
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"

    // Redirecionar o usuário para a página inicial
})