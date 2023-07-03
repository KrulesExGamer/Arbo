import React from 'react'
import CardProfessional from './CardProfessional'

function DisplayProfessional({ list }) {

    return (
        <div className='containerDisplayProfessionals'>
            <h3>Lista de Profissionais</h3>
            <hr />
            <div className='containerDisplayList'>
                {list.length !== 0 ? list.map(p => <CardProfessional key={'Professional'+p.id} id={p.id} name={p.name} type={p.type} number={p.number} prof={p.profession} />) : (<h3>Lista Vazia</h3>)}
            </div>
        </div>
    )
}

export default DisplayProfessional