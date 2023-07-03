import React from 'react'
import InputText from '../../components/InputText'
import TextArea from '../../components/TextArea'

function RiskIdentification({ description, setDescription, name, setName }) {

  return (
    <div className='containerRiskIdentification'>
      <h3>Identificação</h3>
      <InputText
        className='celula-form-arvore'
        id='name'
        type='text'
        value={name}
        name='name'
        placeholder='Nome Comum'
        onChange={setName}>
        Nome
      </InputText>

      <TextArea
        id='idContactDescription'
        type='text'
        value={description}
        name='description'
        placeholder='Comentários'
        onChange={setDescription}
        rows='6'>
        Descrição
      </TextArea>

    </div>
  )
}

export default RiskIdentification