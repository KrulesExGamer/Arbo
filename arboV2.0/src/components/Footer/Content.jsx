import React from 'react'
import FooterPrefeitura from './FooterPrefeitura'
import FooterUnidades from './FooterUnidades'
import FooterSaoCarlos from './FooterSaoCarlos'

function FooterContent() {
    return (
        <div className="d-flex flex-wrap justify-content-around bd-highlight mb-3">
            <FooterPrefeitura />
            <FooterUnidades />
            <FooterSaoCarlos />
        </div>
    )
}
export default FooterContent

