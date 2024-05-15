document
    .querySelector("#botao-cadastrar")
    .addEventListener("click", () => {
    // Pegar os valores dos inputs
    const form = document.querySelector("form")
    // Criar um objeto chamado jogador com esses valores
    const jogador = {
        id: "id_" + new Date().getTime(),
        nome: form.nome.value,
        time: form.time.value,
        gols: form.gols.value,
        assistencias: form.assistencias.value,
        foto: form.foto.value
    }

    // Salvar o objeto no localStorage usando a chave "jogadores"

    let jogadores = JSON.parse( localStorage.getItem("jogadores") ) || []
    jogadores.push(jogador)
    localStorage.setItem("jogadores", JSON.stringify(jogadores))
    // Redirecionar o usuário para a página inicial
    window.location = "/index.html"



})

