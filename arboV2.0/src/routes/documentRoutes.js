// Router: reune as rotas
const router = require('express').Router()

// Controller: regras de negócio da rota.
const Controller = require('../controllers/DocumentController')

// Rotas
router.get("/", Controller.getAll)
router.get("/:id", Controller.getOne)
router.post('/', Controller.register)
router.put("/", Controller.edit)
router.delete('/:id', Controller.delete)

module.exports = router