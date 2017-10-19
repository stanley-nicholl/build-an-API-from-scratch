const uuid = require('uuid/v4')
const characters = require('../characters')

function getAll (limit) {
  return limit ?  characters.slice(0, limit) :  characters
}

function getOne (id) {
  const errors = []
  let response
  const character = characters.find(character => {
    character.id === id)
  })

  if(!character){
    errors.push(`No character with ID ${id}`)
    response = errors
  }else{
    response = character
  }
  return response
}

function create (body) {}

function update (id, body) {}

function destroy (id) {}

module.exports = {getAll, getOne, create, update, destroy}
