// Mongoose: conecta-se ao banco de dados MongoDB
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const treeSchema = new Schema(
    {     
        codigo: {
            type: String,
            required: false,
            unique: true
        },

        insertBy: {
            type: String,
            required: true
        },
        
        especie: {
            type: String,
            required: false,
        },

        nome_comum: {
            type: String,
            required: false,
        },
        
        estado_aparencia: {
            type: String,
            required: false,
        },
    
        exotico_nativo: {
            type: String,
            required: false,
        },

        altura: {
            type: String,
            required: false,
        },

        diametro: {
            type: String,
            required: false,
        },

        categoria_ameaca: {
            type: String,
            required: false,
        },

        latitude: {
            type: Number,
            required: false,
        },

        longitude: {
            type: Number,
            required: false,
        },

        referencia: {
            type: Number,
            required: false,
        },
                
        imagens: {
            type: [Schema.Types.Mixed],
            default: [],
            require: false
        }

    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const tree = mongoose.model('Arvores', treeSchema)

module.exports = tree