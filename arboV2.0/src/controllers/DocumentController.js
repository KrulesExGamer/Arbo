// Importanto Model
const Model = require('../models/documentModel')

// HTTPStatus: padroniza mensagens de HTTP Status.
const HTTPStatus = require('./HTTPStatus')

const Controller = {

    getAll: async function(req, res) {
               
        res.status(200).json({
            success: '',
            error: ''
        })

    },

    getOne: async function(req, res) {
        
        res.status(200).json({
            success: '',
            error: ''
        })

    },
    
    register: async function(req, res) {
        console.log('Enviou Documento')

        const body = req.body
        const file = req.file
        console.log(body)
        console.log(file)  

        res.status(200).json({
            success: '',
            error: ''
        })

    },
    
    edit: async function(req, res) {
               
        res.status(200).json({
            success: '',
            error: ''
        })

    },

    delete: async function(req, res) {
               
        res.status(200).json({
            success: '',
            error: ''
        })

    },
}

module.exports = Controller