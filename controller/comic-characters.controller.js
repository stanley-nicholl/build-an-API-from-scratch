const model = require('../model/comic-characters.model')

function getAll (req, res, next) {
  const limit = req.query.limit
  const result = model.getAll(limit)

  res.status(200).json({ characters: result })
}

function getOne (req, res, next) {
  const id = req.params.id
  const result = model.getOne(id)

  if(result.errors){
    next({ status: 404, message: `Could not find character`, errors: result.errors })
  }else{
    res.status(200).json({ character: result })
  }
}

function create (req, res, next) {
  const body = req.body
  const result = model.create(body)

  if(result.errors){
    next({ status: 400, message: `Could not create character`, errors: result.errors })
  }else{
    res.status(201).json({ character: result })
  }
}

function update (req, res, next) {
  const id = req.params.id
  const body = req.body
  const result = model.update(id, body)

  if(result.errors){
    next({ status: 404, message: `Could not find character`, errors: result.errors })
  }else{
    res.status(200).json({ character: result })
  }
}

function destroy (req, res, next) {
  console.log('launch');
  const id = req.params.id
  const result = model.destroy(id)

  if(result.errors){
    next({ status: 404, message: `Could not find character`, errors: result.errors })
  }else{
    res.status(200).json({ remainingCharacters: result })
  }
}

module.exports = {getAll, getOne, create, update, destroy}
