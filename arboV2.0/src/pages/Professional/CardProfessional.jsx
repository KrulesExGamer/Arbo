import React from 'react'

function CardProfessional({ id, name, type, number, prof}) {

    return (
        <div id={id} className="border container container-user">
            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Nome:</div>
                <div className="col-6 container-celula">{name}</div>
            </div>

            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Tipo:</div>
                <div className="col-6 container-celula">{type}</div>
            </div>

            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Número:</div>
                <div className="col-6 container-celula">{number}</div>
            </div>

            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Profissão:</div>
                <div className="col-6 container-celula">{prof}</div>
            </div>
        </div>
    )
}

export default CardProfessional