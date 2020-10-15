const games = require('../models/games.json')

 
const updatePut = (request, response) => {
    const gameAtualizado = request.body
    console.log('body',gameAtualizado)
    const id = parseInt(request.params.id)
    
    const gamesId = games.map(game => game.id)
    console.log(gamesId)

    const atualizaId = gamesId.indexOf(id)

    const gameAtualizadocomId = {id, ...gameAtualizado}
    console.log('game atualizado com Id',gameAtualizadocomId)
    games.splice(atualizaId, 1, gameAtualizadocomId)
 
    response.status(200).send(games.find(game => game.id === id))
    //console.log(games)
}

const updatePatch  = (request, response) => {
    const gameAtualizacao = request.body
    const id = parseInt(request.params.id)
    const gameParaAtualizar = games.find(game => game.id == id)
    
// Key é o mesmo que cada propriedade 
    for(key in gameAtualizacao){
        gameParaAtualizar[key] = gameAtualizacao[key]
    }

    response.status(200).send(gameParaAtualizar)
}

module.exports = {
    updatePut,
    updatePatch 
}