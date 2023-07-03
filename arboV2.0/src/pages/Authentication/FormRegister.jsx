import React, { useState } from 'react'
import InputText from '../../components/InputText'
import BtnSubmit from '../../components/BtnSubmit'
import axios from 'axios'
import AuthConsumer from '../../hooks/auth'
import { useNavigate } from 'react-router'

function FormRegister() {

    const navigate = useNavigate()

    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    const [nusp, setNusp] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')


    async function handleSubmit(e){
        e.preventDefault()

        const url = 'http://localhost:3001/users'
        const object = { nusp, name, email, password, confirm }
        
        try{
            const response = await axios.post(url, object)
            const data = response.data
    
            if (response.status === 200) {
                console.log(data)
                dispatch({
                    type: 'login',
                    token: data.token,
                    nusp: data.nusp,
                    id: data.id,
                    name: data.name,
                    email: data.email,
                    admin: data.admin
                })
    
                navigate('/home')
            }
        }
        catch(e){
            // Colocar mensagem de erro aqui
            console.error('CATCH:',e.response.data.message)
        }
    }

    return (
        <>
            <InputText
                id='idNusp'
                type='text'
                value={nusp}
                name='nusp'
                placeholder='nUSP'
                onChange={setNusp}>
                nUSP
            </InputText>

            <InputText
                id='idName'
                value={name}
                type='text'
                name='name'
                placeholder='Nome'
                onChange={setName}>
                Nome
            </InputText>

            <InputText
                id='idEmail'
                value={email}
                name='email'
                placeholder='Email'
                onChange={setEmail}>
                Email
            </InputText>

            <InputText
                id='idPassword'
                type='password'
                value={password}
                name='password'
                placeholder='Password'
                onChange={setPassword}>
                Senha
            </InputText>

            <InputText
                id='idConfirm'
                type='password'
                value={confirm}
                name='confirm'
                placeholder='Confirm'
                onChange={setConfirm}>
                Confirmar Senha
            </InputText>

            <BtnSubmit
                id='idBtnSubmitRegister'
                handleSubmit={handleSubmit}>
                Cadastrar
            </BtnSubmit>
        </>
    )
}
export default FormRegister