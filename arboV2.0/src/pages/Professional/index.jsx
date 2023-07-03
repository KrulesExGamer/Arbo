import React, { useState } from 'react'
import RegisterProfessional from './RegisterProfessional'
import DisplayProfessional from './DisplayProfessional'

function Professional() {
  const [id, setID] = useState('') // eslint-disable-line
  const [name, setName] = useState('')
  const [type, setType] = useState('')
  const [number, setNumber] = useState('')
  const [profession, setProfession] = useState('')
  const [aux, setAux] = useState([]) // eslint-disable-line

  async function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      id: aux.length,
      name: name,
      type: type,
      number: number,
      prof: profession
    }

    setAux(prevAux => [...prevAux, obj])
    console.log(aux)
  }

  return (
    <div className='pageProfessional boxContent'>
      <h1>Administrar Profissionais</h1>

      <RegisterProfessional 
          id={id}
          name={name}
          setName={setName}
          type={type}
          setType={setType}
          number={number}
          setNumber={setNumber}
          profession={profession}
          setProfession={setProfession}
          handleSubmit={handleSubmit}/>    

      <DisplayProfessional 
        id={id} list={aux}/>
      
    </div>
  )
}

export default Professional