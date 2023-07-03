import React, { useRef, useState } from 'react'
import RiskProfessional from './RiskProfessional'
import RiskHistory from './RiskHistory'
import RiskLocalization from './RiskLocalization'
import RiskIdentification from './RiskIdentification'
import FormInputImg from '../../components/InputImg'

function RegisterRisk() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  //const [trees, setTrees] = useState([])
  const historyRef = useRef([])
  const professionalRef = useRef([])

  function handleSubmitSituation(e) {
    e.preventDefault()
    console.log('Submit')
  }

  return (
    <div className='pageRegisterRisk boxContent'>
      <h1>Cadastrar Situação de Risco</h1>

      <RiskIdentification
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription} />

      <RiskLocalization
        lat={lat}
        lng={lng}
        setLat={setLat}
        setLng={setLng} />

      <RiskProfessional
        professional={professionalRef} />

      <h3>Imagens</h3>

      <FormInputImg
        id='inputImg'
        name='image'
        accept='image'
        placeHolder='File' />


      <RiskHistory history={historyRef} />
      <div className="row">
        <button
          className='btn btn-warning rounded-3'
          onClick={handleSubmitSituation}>
          ARMAZENAR SITUAÇÃO DE RISCO
        </button>
      </div>


    </div>
  )
}

export default RegisterRisk