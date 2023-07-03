import React, { useState } from 'react'
import InputText from '../../components/InputText'
import BtnSubmit from '../../components/BtnSubmit'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import AuthConsumer from '../../hooks/auth'

function FormLogin() {

    const [authed, dispatch] = AuthConsumer() // eslint-disable-line

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const url = 'http://localhost:3001/users/login'
        const object = { email, password }
        try{
            const response = await axios.post(url, object)
            const data = response.data

            if (response.status === 200) {
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
            console.error(e)
        }
    }
    return (
        <>
            <InputText
                id='idLoginEmail'
                value={email}
                name='email'
                placeholder='Email'
                onChange={setEmail}>
                Email
            </InputText>

            <InputText
                id='idLoginPassword'
                type='password'
                value={password}
                name='password'
                placeholder='Password'
                onChange={setPassword}>
                Senha
            </InputText>

            <BtnSubmit
                id='idBtnSubmitLogin'
                handleSubmit={handleSubmit}>
                Login
            </BtnSubmit>
        </>
    )
}
export default FormLogin