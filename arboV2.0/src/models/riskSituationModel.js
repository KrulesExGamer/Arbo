// Mongoose: conecta-se ao banco de dados MongoDB
const { Double } = require('mongodb')
const mongoose = require('mongoose')
const { Schema } = mongoose

// Cria o Schema
const riskSituationSchema = new Schema(
    {     
        nome: {
            type: String,
        },

        descricao: {
            type: String,
            default: null,
        },

        latitude:{
            type: Double,
            default: null,
        },

        latitude:{
            type: Double,
            default: null,
        },

        arvores: {
            type: [Schema.Types.Mixed],
            default: [],
        },

        documentos: {
            type: [Schema.Types.Mixed],
            default: [],
        },

        historico: {
            type: [Schema.Types.Mixed],
            default: [],
        },

        imagens: {
            type: [Schema.Types.Mixed],
            default: [],
        }
    },

    { 
        timestamps: true 
    }
)

// Define a Collection
const riskSituation = mongoose.model('SituacaoRisco', riskSituationSchema)

module.exports = riskSituation