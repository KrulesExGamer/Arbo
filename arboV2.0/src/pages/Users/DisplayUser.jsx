import React from 'react'
import CardUser from './CardUser'

function DisplayUser({ list }) {

    return (
        <div className='containerDisplayUser'>
            <h3>Lista de Usuários</h3>
            <hr className='hrTitle'/>
            <div className='containerDisplayList'>
                {list.length !== 0 ? list.map(p => <CardUser key={'User'+p.id} id={p.id} name={p.name} nUSP={p.nusp} email={p.email} admin={p.admin} />) : (<h3>Lista Vazia</h3>)}
            </div>
        </div>
    )
}

export default DisplayUser