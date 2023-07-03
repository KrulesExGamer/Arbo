import React from 'react'

function CardProfessional({ id, name, nUSP, email, admin}) {

    return (
        <div id={id} className="border container container-user">
            <div className="row container-linha">
                <div className="col-3 text-end container-celula">nUSP:</div>
                <div className="col-6 container-celula">{nUSP}</div>
            </div>

            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Nome:</div>
                <div className="col-6 container-celula">{name}</div>
            </div>

            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Email:</div>
                <div className="col-6 container-celula">{email}</div>
            </div>

            <div className="row container-linha">
                <div className="col-3 text-end container-celula">Admin:</div>
                <div className="col-6 container-celula">{admin}</div>
            </div>
        </div>
    )
}

export default CardProfessional