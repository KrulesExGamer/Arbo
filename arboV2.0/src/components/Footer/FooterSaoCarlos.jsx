import React from 'react'
import { Link } from 'react-router-dom'

function FooterSaoCarlos() {
    return (
        <div className="p-2 bd-highlight footerBox">
            <h6>São Carlos</h6>
            <p><Link to="#">Sobre a Cidade</Link></p>
            <p><Link to="#">Dados Geográficos e Demográficos</Link></p>
            <p><Link to="#">Comércio e Serviços</Link></p>
        </div>
    )
}
export default FooterSaoCarlos