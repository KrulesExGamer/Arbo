import React, { useState } from 'react'
import BtnSubmit from '../../components/BtnSubmit'
import TextArea from '../../components/TextArea'
import BtnGoBack from '../../components/BtnGoBack'
import FormSelect from '../../components/SelectBox'
import GMaps from '../../services/GMaps'

function FormSituation() {

    async function handleSubmit(e) {
        e.preventDefault()
        // Recuperação de nome e email pode ser pelo contexto
        console.log(description)
        console.log(latitude)
        console.log(longitude)
    }

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [description, setDescription] = useState('')
    const [location, setLocation] = useState('DEFAULT')

    const localList = [
        'ICMC',
        'EESC',
        'IAU',
        'BANDECO'
    ]

    return (
        <div className='containerFormSituation'>
            
            <GMaps 
                height='300px' 
                width='auto' 
                initialCenter={[-22.006388, -47.897335]} 
                handleLat={setLatitude}
                handleLng={setLongitude}/>

            <FormSelect 
                id='idReportSituationLocation'
                value={location}
                onChange={setLocation}
                titleOption='Localização'
                options={localList}>
            </FormSelect>

            <TextArea
                id='idContactDescription'
                type='text'
                value={description}
                name='description'
                placeholder='Descrição'
                onChange={setDescription}
                rows='6'>
                Descrição
            </TextArea>

            <BtnGoBack
                id='idBtnGoBackContact' />

            <BtnSubmit
                id='idBtnSubmitContact'
                handleSubmit={handleSubmit}>
                Enviar
            </BtnSubmit>
        </div>
    )
}

export default FormSituation