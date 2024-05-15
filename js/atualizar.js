function somarGol(id){
    // Pegar os jogadores do localStorage
    const jogadores = JSON.parse(localStorage.getItem("jogadores")) || []

    // Encontrar o jogador com o id passado como parâmetro
    const jogador = jogadores.find(jogador => jogador.id == id)

    // Somar 1 gol ao jogador
    jogador.gols++

    // Salvar a lista de jogadores no localStorage
    localStorage.setItem("jogadores", JSON.stringify(jogadores))

    // Recarregar a página
    window.location.reload()
}

function subtrairGol(id){
    // Pegar os jogadores do localStorage
    
    // Encontrar o jogador com o id passado como parâmetro
    
    // Subtrair 1 gol ao jogador
    
    // Salvar a lista de jogadores no localStorage
    
    // Recarregar a página
    
}

function somarAssistencia(id){
    // Pegar os jogadores do localStorage
    
    // Encontrar o jogador com o id passado como parâmetro
    
    // Somar 1 assistência ao jogador
    
    // Salvar a lista de jogadores no localStorage
    
    // Recarregar a página
    
}

function subtrairAssistencia(id){
    // Pegar os jogadores do localStorage
    
    // Encontrar o jogador com o id passado como parâmetro
    
    // Subtrair 1 assistência ao jogador
    
    // Salvar a lista de jogadores no localStorage
    
    // Recarregar a página
    
}