import React from 'react'

function CardTreeFeatures({ tree }) {
    return (
        <>
            <h3 className='h3Card'>Características</h3>
            <hr />
            <ul>
                <li><span className='bold'>Espécie:</span> {tree.especie}</li>
                <li><span className='bold'>Cadastrante:</span> {tree.insertBy}</li>
                <li><span className='bold'>Porte:</span> {tree.porte}</li>
                <li><span className='bold'>Diâmetro:</span> {tree.diametro}</li>
                <li><span className='bold'>Ameaça:</span> {tree.ameaca}</li>
                <li><span className='bold'>Radícula:</span> {tree.radicula}</li>
                <li><span className='bold'>Copa:</span> {tree.copa}</li>
                <li><span className='bold'>Idade:</span> {tree.idade}</li>
            </ul>
        </>
    )
}

export default CardTreeFeatures