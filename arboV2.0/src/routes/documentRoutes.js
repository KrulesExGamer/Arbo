// Router: reune as rotas
const router = require('express').Router()

// Constroi o dado para ser usado na rota. 
// O parâmetro de single é o nome do atributo 'name' do input.
const upload = require('../config/multer')

// Controller: regras de negócio da rota.
const Controller = require('../controllers/DocumentController')

// Rotas
router.get("/", Controller.getAll)
router.get("/:id", Controller.getOne)
router.post('/', upload.single('file'), Controller.register)
router.put("/", Controller.edit)
router.delete('/:id', Controller.delete)

module.exports = router