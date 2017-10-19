const uuid = require('uuid/v4')
const characters = require('../characters')

function getAll (limit) {
  return limit ?  characters.slice(0, limit) :  characters
}

function getOne (id) {
  const errors = []
  let response
  const character = characters.find(char => {
    return char.id === id
  })
  if(!character){
    errors.push(`No character with ID ${id}`)
    response = errors
  }else{
    response = character
  }
  return response
}

function create (body) {
  const errors = []
  let response
  const { alias, name, power, age, alignment } = body
  console.log(body);

  if(!alias || !name || !power || !age || !alignment){
    errors.push('Fields alias, name, power, age, and alignment are required')
    response = { errors }
  }else{
    const id = uuid()
    character = { id, alias, name, power, age, alignment }
    characters.push(character)
    response = character
  }
return response
}

function update (id, body) {}

function destroy (id) {}

module.exports = {getAll, getOne, create, update, destroy}
