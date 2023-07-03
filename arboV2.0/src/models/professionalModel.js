// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const professionalSchema = new Schema(
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

        nome: {
            type: String,
            required: true
        },
        
        profissao: {
            type: String,
            required: true,
        }   
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const professional = mongoose.model('Usuario', professionalSchema)

module.exports = professional