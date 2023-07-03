// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const problemsSchema = new Schema(
    {     
        arvore: {
            type: String,
            required: false,
            unique: true
        },

        estado_casca: {
            type: String,
            default: null,
            required: true
        },

        presenca_coroa: {
            type: Boolean,
            default: false,
            required: true
        },

        risco_geologico: {
            type: Boolean,
            default: false,
            required: true
        },

        ameaca_vizinhanca: {
            type: Boolean,
            default: false,
            required: true
        },

        profissional: {
            type: String,
            default: null,
            required: true
        },

        avaliacao: {
            type: String,
            default: null,
            required: true
        },

        comentarios: {
            type: String,
            default: null,
            required: false
        },

    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const problems = mongoose.model('Problemas', problemsSchema)

module.exports = problems