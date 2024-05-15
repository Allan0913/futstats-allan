function apagar(id){
    // Pegar os jogadores do localStorage
    const tarefas = JSON.parse( localStorage.getItem("jogadores") ) || []
    // Filtrar os jogadores para remover o jogador com o id passado como parâmetro
    const jogadoresAtualizadas = jogadores.filter( jogador => jogador.id != id )
    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify( jogadoresAtualizadas) )
    // Remover o item da página ou recarregar a página
    document.querySelector("#" + id).remove()
}
