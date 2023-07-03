// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const documentSchema = new Schema(
    {     
        numero: {
            type: String,
            required: true,
            unique: true
        },

        tipo: {
            type: String,
            required: true,
        },

        arquivo: {
            type: String,
            required: true
        },
        
        autor: {
            type: String,
            required: true,
        }   
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const document = mongoose.model('Documentos', documentSchema)

module.exports = document