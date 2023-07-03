import React, { useState } from 'react'
import RegisterUser from './RegisterUser'
import DisplayUser from './DisplayUser'

function Users() {

  const [id, setID] = useState('') // eslint-disable-line
  const [name, setName] = useState('')
  const [nusp, setNUSP] = useState('')
  const [email, setEmail] = useState('')
  const [admin, setAdmin] = useState('DEFAULT')
  const [aux, setAux] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      id,
      name,
      nusp,
      email,
      admin
    }

    setAux(prevAux => [...prevAux, obj])
  }

  return (
    <div className='pageUsers boxContent'>
      <h1>Administrar Usuários</h1>

      <RegisterUser
        name={name}
        setName={setName}
        nusp={nusp}
        setNUSP={setNUSP}
        email={email}
        setEmail={setEmail}
        admin={admin}
        setAdmin={setAdmin}
        handleSubmit={handleSubmit} />
      
      <DisplayUser
        list={aux} />

    </div>
  )
}

export default Users