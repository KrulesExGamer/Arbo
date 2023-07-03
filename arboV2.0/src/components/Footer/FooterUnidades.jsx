import React from 'react'
import { Link } from 'react-router-dom'

function FooterUnidades() {
    return (
        <div className="p-2 bd-highlight footerBox">
            <h6>Unidades do Campus</h6>
            <p><Link to="#">EESC - Engenharia</Link></p>
            <p><Link to="#">IAU - Arquitetura e Urbanismo</Link></p>
            <p><Link to="#">ICMC - Matemática e Computação</Link></p>
            <p><Link to="#">IFSC - Física</Link></p>
            <p><Link to="#">IQSC - Química</Link></p>
        </div>
    )
}
export default FooterUnidades