import React from 'react'
import InputText from '../../components/InputText'
import GMaps from '../../services/GMaps'

function RiskLocalization({ lat, lng, setLat, setLng }) {
  return (
    <div className='containerRiskLocalization'>
      <h3>Localização</h3>

      <GMaps
        height='300px'
        width='auto'
        initialCenter={[-22.006388, -47.897335]}
        handleLat={setLat}
        handleLng={setLng} />

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
            value={lng}
            name='longitude'
            placeholder='Longitude'
            onChange={setLng}>
            Longitude
          </InputText>
        </div>
      </div>
    </div>
  )
}

export default RiskLocalization