const model = require('../model/comic-characters.model')

function getAll (req, res, next) {
  const limit = req.query.limit
  const result = model.getAll(limit)

  res.status(200).json({ result })
}

function getOne (req, res, next) {
  const id = req.params.id
  const result = model.getOne(id)

  if(result.errors){
    next({ status: 404, message: `Could not find character`, errors: result.errors })
  }
}

function create (req, res, next) {}

function update (req, res, next) {}

function destroy (req, res, next) {}

modele.exports = {getAll, getOne, create, update, destroy}
