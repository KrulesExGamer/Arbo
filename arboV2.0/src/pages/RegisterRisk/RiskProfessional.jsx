import React, { useRef, useState } from 'react'
import RiskProfessionalItem from './RiskProfessionalItem'
import SelectBoxMultiple from '../../components/SelectBoxMultiple'

function RiskProfessional({ professional }) {

  const [reload, setReload] = useState(false)

  const pRef = useRef([
    'Profissional 1',
    'Profissional 2',
    'Profissional 3',
    'Profissional 4',
  ])

  function handleAddProfessional(e) {

    const selected = document.getElementById('idSelectMultiple').selectedOptions

    let count = 0
    for (let o of selected) {

      let shouldIAdd = true

      for (let p of professional.current)
        if (p.name === o.value)
          shouldIAdd = false

      if (shouldIAdd) {
        const object = {
          id: String(Date.now() + count),
          name: o.value
        }
        professional.current.push(object)
        count += 100
      }

    }
    setReload(!reload)
  }

  function handleRemove(e) {
    professional.current = professional.current.filter(p => p.id !== e.target.name)
    setReload(!reload)
  }

  //professional.current.map(p => console.log('TESTE', p))

  return (
    <div className='containerRiskProfessional'>

      <div className="row">
        <h3>Profissionais</h3>
      </div>

      <div className="row">
        <SelectBoxMultiple
          id='idSelectMultiple'
          name='professionals'
          title='professionals'
          options={pRef.current}
          size='6' />
      </div>

      <div className="row">
        <button
          onClick={(e) => handleAddProfessional(e)}
          className='btn btn-warning rounded-3'>
          Adicionar
        </button>
      </div>

      <div className="row">
        <div className="professionalBoard">
          <h5>Profissionais</h5>
          {professional.current.map(
            p => <RiskProfessionalItem key={p.id} professional={p}
              handleRemove={handleRemove} />)}
        </div>

      </div>
    </div>
  )
}

export default RiskProfessional