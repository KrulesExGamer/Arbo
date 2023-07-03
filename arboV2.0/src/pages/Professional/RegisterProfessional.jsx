import React from 'react'
import InputText from '../../components/InputText'
import BtnGoBack from '../../components/BtnGoBack'
import BtnSubmit from '../../components/BtnSubmit'

function RegisterProfessional({ 
    name, 
    setName,
    type, 
    setType,
    number, 
    setNumber,
    profession,
    setProfession,
    handleSubmit}) {

    return (
        <div className='containerRegisterProfessionals'>
            <h3>Cadastrar Profissionais</h3>
            <hr />
            
            <InputText
                id='profName'
                type='text'
                value={name}
                name='name'
                placeholder='Nome Completo'
                onChange={setName}>
                Nome Completo
            </InputText>

            <InputText
                id='profType'
                type='text'
                value={type}
                name='type'
                placeholder='Tipo de Profissional'
                onChange={setType}>
                Tipo de Profissional
            </InputText>

            <InputText
                id='profNumber'
                type='text'
                value={number}
                name='number'
                placeholder='Número'
                onChange={setNumber}>
                Número
            </InputText>

            <InputText
                id='profProf'
                type='text'
                value={profession}
                name='prof'
                placeholder='Profissão'
                onChange={setProfession}>
                Profissão
            </InputText>

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

export default RegisterProfessional
