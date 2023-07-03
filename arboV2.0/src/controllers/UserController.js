const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/userModel')
const HTTPStatus = require('./HTTPStatus')

const Controller = {

    login: async function (req, res) {
        const {
            email,
            password
        } = req.body

        // Verifica se os campos foram preenchidos
        if (!(email && password))
            return res.status(422).json({
                message: HTTPStatus.messages(422, 'todos os campos são obrigatórios.')
            })

        try {
            console.log(email, password)

            // Usuário existe no sistema?
            const data = await User.findOne({ email: email })
            console.log(data)
            // Verifica se os usuário existe
            if (!data)
                return res.status(422).json({
                    message: HTTPStatus.messages(422, 'usuario não encontrado.')
                })

            // Verifica se a senha corresponde
            const checkPassword = await bcrypt.compare(password, data.password)

            if (!checkPassword)
                return res.status(422).json({
                    message: HTTPStatus.messages(422, 'senha inválida.'),
                })

            // Cria token
            const secret = process.env.SECRET
            const token = jwt.sign({ id: data._id }, secret)

            // Responde frontend
            res.status(200).json({
                message: 'DEU CERTO',
                token,
                nusp: data.nusp,
                id: data._id,
                name: data.nome,
                email: data.email,
                admin: data.admin
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).json({
                message: 'DEU ZEBRA'
            })
        }
    },

    getAll: async function (req, res) {

        res.status(200).json({
            success: '',
            error: ''
        })

    },

    getOne: async function (req, res) {

        res.status(200).json({
            success: '',
            error: ''
        })

    },

    check: async function (req, res) {

        // Recupera token
        const { token } = req.body

        // O token é valido?
        if (!token)
            return res.status(422).json({
                message: HTTPStatus.messages(422, 'token indefinido.')
            })

        // Decriptação
        const secret = process.env.SECRET
        const tokenSystem = jwt.decode(token, secret)

        try {
            // Recuperando dados
            const data = await User.findById(tokenSystem.id)

            // Dados foram recuperados?
            if (!data)
                return res.status(422).json({
                    message: HTTPStatus.messages(404, 'o usuário não foi encontrado.'),
                })

            // Responde frontend
            res.status(200).json({
                message: 'DEU CERTO',
                token,
                nusp: data.nusp,
                id: data._id,
                name: data.nome,
                email: data.email,
                admin: data.admin
            })
        }
        catch (e) {
            res.status(500).json({
                message: HTTPStatus.messages(500, 'erro interno do servidor.')
            })
        }
    },

    register: async function (req, res) {

        const {
            nusp,
            name,
            email,
            password,
            confirm
        } = req.body

        // Verifica se os campos foram preenchidos
        if (!(nusp && name && email && password && confirm))
            return res.status(422).json({
                message: HTTPStatus.messages(422, 'todos os campos são obrigatórios.')
            })

        // Password foi confirmado corretamente?
        if (password !== confirm)
            return res.status(422).json({
                message: HTTPStatus.messages(422, 'password não foi confirmado.')
            })

        // Verifica se NUSP ou Email já foram cadastrados
        const [repetidoNUSP] = await User.find({ nusp: nusp })
        console.log('NUSP',repetidoNUSP)
        if (repetidoNUSP)
            return res.status(422).json({
                message: HTTPStatus.messages(422, 'NUSP previamente cadastrado.')
            })

        const [repetidoEmail] = await User.find({ email: email })
        console.log('NUSP',repetidoEmail)
        if (repetidoEmail)
        return res.status(422).json({
            message: HTTPStatus.messages(422, 'Email previamente cadastrado.')
        })

        // Password foi confirmado corretamente?
        if (password !== confirm) return res.status(422).json({
            message: HTTPStatus.messages(422, 'o password não foi confirmado.')
        })

        // Encriptografa senha
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)

        // Cria objeto com os dados
        const newUser = {
            nusp,
            nome: name,
            email,
            password: passwordHash,
            admin: false
        }

        try {

            // Criar usuário
            const data = await User.create(newUser)

            // Criação de token
            const secret = process.env.SECRET
            const token = jwt.sign({ id: data._id }, secret)

            // Responde frontend
            res.status(200).json({
                message: 'DEU CERTO',
                token,
                nusp: data.nusp,
                id: data._id,
                name: data.nome,
                email: data.email,
                admin: data.admin
            })
        }
        catch (e) {
            console.log(e)
            res.status(500).json({
                message: 'DEU ZEBRA'
            })
        }
    },

    edit: async function (req, res) {

        res.status(200).json({
            success: '',
            error: ''
        })

    },

    delete: async function (req, res) {

        res.status(200).json({
            success: '',
            error: ''
        })

    },
}

module.exports = Controller