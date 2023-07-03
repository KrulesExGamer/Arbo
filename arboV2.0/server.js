const express = require('express')
const app = express()
const port = 3001

//  MIDDLEWARES --------------------------------------------
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false})) //Era true
app.use(bodyParser.json())
app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')))


//  ROTAS DE ENDPOINT --------------------------------------

// Cuida das rotas de usuários
const userRoutes = require('./src/routes/userRoutes')
app.use('/users', userRoutes)

// Cuida das rotas de produtos
const documentRoutes = require('./src/routes/documentRoutes')
app.use('/documentos', documentRoutes)

// CONEXÃO COM O BANCO DE DADOS ---------------------------
const mongoDB = require('./src/config/database')
mongoDB(listening)


// DISPONIBILIDADE DO APP EM PORTA DE COMUNICAÇÃO  --------
function listening(){
    app.listen(port, () => {
        console.log('Servidor online!')
    })
}