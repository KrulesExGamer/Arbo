import React from 'react'

function CardTreeRisks({ tree }) {
    return (
        <>
            <h3 className='h3Card'>Potenciais Riscos</h3>
            <hr />
            <ul>
                {tree.risks.map(a => <li className='text-start'>{a}</li>)}
            </ul>
        </>
    )
}

export default CardTreeRisks