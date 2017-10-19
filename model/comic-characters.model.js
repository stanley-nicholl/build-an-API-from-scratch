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

function update (id, body) {
  const errors = []
  let response
  const { alias, name, power, age, alignment } = body
  const character = characters.find(char => {
    return char.id === id
  })
  if (!character) {
    errors.push(`Could not find character with id of ${id}`)
    response = { errors }
  } else if(!alias || !name || !power || !age || !alignment){
    errors.push('Fields alias, name, power, age, and alignment are required')
    response = { errors }
  }else{
  character.alias = alias
  character.name = name
  character.power = power
  character.age = age
  character.alignment = alignment
  response = character
  }
  return response
}

function destroy (id) {
  const errors = []
  let response
  const character = characters.find(char => {
    return char.id === id
  })

  if (!character) {
    console.log('logic');
    errors.push(`Could not find character with id of ${id}`)
    response = { errors }
  } else{
    const index = characters.indexOf(character)
    console.log(index);
    characters.splice(index,1)
    response = characters
  }
  return response
}

module.exports = {getAll, getOne, create, update, destroy}
