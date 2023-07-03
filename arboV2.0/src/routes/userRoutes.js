// Router: reune as rotas
const router = require('express').Router()

// Controller: regras de negócio da rota.
const Controller = require('../controllers/UserController')

// Rotas
router.get("/", Controller.getAll)
router.get("/:id", Controller.getOne)
router.post('/', Controller.register)
router.post('/login', Controller.login)
router.post('/check', Controller.check)
router.put("/", Controller.edit)
router.delete('/:id', Controller.delete)

module.exports = router