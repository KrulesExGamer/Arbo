import React, { useState } from 'react'
import SelectBox from '../../components/SelectBox'
import InputText from '../../components/InputText'
import BtnSubmit from '../../components/BtnSubmit'
import FormInputImg from '../../components/InputImg'
import Checkbox from '../../components/Checkbox'
import GMaps from '../../services/GMaps'
import { options, riskOne, riskTwo } from './options'

function Tree() {

  const [codigo, setCodigo] = useState('')
  const [name, setName] = useState('')
  const [especie, setEspecie] = useState('')
  const [insertBy, setInsertBy] = useState('')
  const [porte, setPorte] = useState('')
  const [lat, setLat] = useState('')
  const [long, setLong] = useState('')
  const [diametro, setDiametro] = useState('')
  const [ameaca, setAmeaca] = useState('')
  const [radicula, setRadicula] = useState('')
  const [copa, setCopa] = useState('')
  const [idade, setIdade] = useState('')

  function getRisks() {
    const risks = []
    const checkbox = document.getElementsByName('risk')

    for (let check of checkbox)
      if (check.checked)
        risks.push(check.id)

    return risks
  }

  function handleSubmit(e) {
    e.preventDefault()

    const risks = getRisks()

    const obj = {
      name: name,
      especie: especie,
      insertBy: insertBy,
      lat: lat,
      long: long,
      porte: porte,
      diametro: diametro,
      ameaca: ameaca,
      radicula: radicula,
      copa: copa,
      idade: idade,
      risks: risks
    }

    console.log(obj)
  }

  return (
    <div className='pageRegisterTree boxContent'>
      <h1>Cadastrar Árvores</h1>

      <h3>
        Identificação
      </h3>

      <InputText
        className='celula-form-arvore'
        id='name'
        type='text'
        value={codigo}
        name='codigo'
        placeholder='Código da Árvore'
        onChange={setCodigo}>
        Código da Árvore
      </InputText>

      <InputText
        className='celula-form-arvore'
        id='name'
        type='text'
        value={name}
        name='name'
        placeholder='Nome Comum'
        onChange={setName}>
        Nome Comum
      </InputText>

      <InputText
        className='celula-form-arvore'
        id='especie'
        type='text'
        value={especie}
        name='especie'
        placeholder='Espécie'
        onChange={setEspecie}>
        Espécie
      </InputText>

      <InputText
        className='celula-form-arvore'
        id='especie'
        type='text'
        value={insertBy}
        name='cadastrante'
        placeholder='Cadastrante'
        onChange={setInsertBy}>
        Cadastrante
      </InputText>

      <h3 className='celula-form-arvore' id='tree-h3'>
        Localização
      </h3>

      <GMaps
        height='300px'
        width='auto'
        initialCenter={[-22.006388, -47.897335]}
        handleLat={setLat}
        handleLng={setLong} />

      <div className='row container-linha'>
        <div className='col'>
          <InputText
            className='celula-form-arvore'
            id='lat'
            type='text'
            value={lat}
            name='latitudade'
            placeholder='Latitude'
            onChange={setLat}>
            Latitude
          </InputText>
        </div>

        <div className='col'>
          <InputText
            className='celula-form-arvore'
            id='long'
            type='text'
            value={long}
            name='longitude'
            placeholder='Longitude'
            onChange={(value) => setLong(value)}>
            Longitude
          </InputText>
        </div>
      </div>

      <h3>
        Características da Árvore
      </h3>

      <SelectBox
        className='celula-form-arvore'
        value={porte}
        name='porte'
        titleOption='Porte da Árvore'
        options={options.optPorte}
        placeholder='Selecione o Porte'
        onChange={setPorte} />

      <SelectBox
        className='celula-form-arvore'
        value={diametro}
        name='diametro'
        titleOption='Diâmetro'
        options={options.optDiametro}
        placeholder='Selecione o Diâmetro'
        onChange={setDiametro} />

      <SelectBox
        className='celula-form-arvore'
        value={ameaca}
        name='ameaca'
        titleOption='Nível de Ameaça'
        options={options.optAmeaca}
        placeholder='Selecione o Nível de Ameaça'
        onChange={setAmeaca} />

      <SelectBox
        className='celula-form-arvore'
        value={radicula}
        name='radicula'
        titleOption='Sistema Radicular'
        options={options.optRadicula}
        placeholder='Selecione a Raiz'
        onChange={setRadicula} />

      <SelectBox
        className='celula-form-arvore'
        value={copa}
        name='copa'
        titleOption='Copa da Árvore'
        options={options.optCopa}
        placeholder='Selecione a Copa'
        onChange={setCopa} />

      <SelectBox
        className='celula-form-arvore'
        value={idade}
        name='idade'
        titleOption='Idade Estimada'
        options={options.optIdade}
        placeholder='Selecione a Idade'
        onChange={setIdade} />


      <h3 className='celula-form-arvore' id='tree-h3'>
        Imagens
      </h3>

      <FormInputImg
        id='inputImg'
        name='image'
        accept='image'
        placeHolder='File' />

      <h3 className='celula-form-arvore' id='tree-h3'>
        Situações ou Potenciais Riscos:
      </h3>

      <div className='row container-linha'>
        <div className='col-6'>
          {riskOne.map(text => <Checkbox key={text} text={text} name='risk' />)}
        </div>

        <div className='col-6'>
          {riskTwo.map(text => <Checkbox key={text} text={text} name='risk' />)}
        </div>
      </div>

      <BtnSubmit
        handleSubmit={handleSubmit}>
        Cadastrar
      </BtnSubmit>

    </div>
  )
}

export default Tree