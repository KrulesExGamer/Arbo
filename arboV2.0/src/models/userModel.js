// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const userSchema = new Schema(
    {     
        nusp: {
            type: String,
            required: true,
            unique: true
        },

        nome: {
            type: String,
            required: true
        },
        
        email: {
            type: String,
            required: true,
            unique: true
        },
                
        password: {
            type: String,
            required: true
        },

        admin: {
            type: Boolean,
            default: false,
            required: true
        }
    
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const usuario = mongoose.model('Usuario', userSchema)

module.exports = usuario