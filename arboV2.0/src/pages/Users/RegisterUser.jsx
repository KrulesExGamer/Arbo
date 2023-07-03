import React from 'react'
import InputText from '../../components/InputText'
import BtnGoBack from '../../components/BtnGoBack'
import BtnSubmit from '../../components/BtnSubmit'
import FormSelect from '../../components/SelectBox'

function RegisterUser({ 
    name,
    setName,
    nusp,
    setNUSP,
    email,
    setEmail,
    admin,
    setAdmin,
    handleSubmit
    }) {

    const isAdmin = [
        'Administrador',
        'Usuário'
    ]

    return (
        <div className='containerRegisterProfessionals'>
            <h3>Cadastrar Usuários</h3>
            <hr />
            <InputText
                id='idUserName'
                type='text'
                value={name}
                name='name'
                placeholder='Nome Completo'
                onChange={setName}>
                Nome Completo
            </InputText>

            <InputText
                id='idUserNUSP'
                type='text'
                value={nusp}
                name='nusp'
                placeholder='Número'
                onChange={setNUSP}>
                nUSP
            </InputText>

            <InputText
                id='idUserEmail'
                type='email'
                value={email}
                name='email'
                placeholder='Email'
                onChange={setEmail}>
                email
            </InputText>

            <FormSelect 
                id='idUserAdmin'
                value={admin}
                onChange={setAdmin}
                titleOption='Função'
                options={isAdmin}>
                Função na Plataforma
            </FormSelect>

            <BtnGoBack 
                id='idBtnGoBackProfessional'/>

            <BtnSubmit
                id='idBtnSubmitRegister'
                handleSubmit={handleSubmit}>
                Cadastrar
            </BtnSubmit>
        </div>
    )
}

export default RegisterUser