// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const otherProblemsSchema = new Schema(
    {     
        arvore: {
            type: String,
            required: false,
            unique: true
        },

        problema: {
            type: String,
            required: true
        },

        descricao: {
            type: String,
            default: '',
            required: false
        }
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const otherProblems = mongoose.model('ProblemasConexos', otherProblemsSchema)

module.exports = otherProblems