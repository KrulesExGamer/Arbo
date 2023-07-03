import React, { useState } from 'react'
import InputText from '../../components/InputText'
import BtnSubmit from '../../components/BtnSubmit'
import TextArea from '../../components/TextArea'
import BtnGoBack from '../../components/BtnGoBack'

function Contact() {

  async function handleSubmit(e) {
    e.preventDefault()

    console.log(name)
    console.log(email)
    console.log(description)
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  return (
    <div className='pageContact boxContent'>

      <h1>Contato</h1>

      <div className='containerContact'>
        <InputText
          id='idContactName'
          type='text'
          value={name}
          name='name'
          placeholder='Nome Completo'
          onChange={setName}>
          Nome Completo
        </InputText>


        <InputText
          id='idContactEmail'
          type='text'
          value={email}
          name='email'
          placeholder='email'
          onChange={setEmail}>
          Email
        </InputText>

        <TextArea
          id='idContactDescription'
          type='text'
          value={description}
          name='description'
          placeholder='Comentários'
          onChange={setDescription}
          rows='6'>
          Comentários
        </TextArea>

        <BtnGoBack
          id='idBtnGoBackContact' />

        <BtnSubmit
          id='idBtnSubmitContact'
          handleSubmit={handleSubmit}>
          Enviar
        </BtnSubmit>
      </div>
    </div>
  )
}

export default Contact