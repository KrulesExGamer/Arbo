import React from 'react'
import DropDownItem from './DropDownItem'
import AuthConsumer from '../../hooks/auth'

function DropDown({ title }) {

    const [authed] = AuthConsumer()

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle headerItem" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </a>

            <ul className="dropdown-menu headerDD" aria-labelledby="navbarDropdownMenuLink">
                <DropDownItem to='contatos' text='Contatos' />
                {authed.auth && authed.admin && (
                    <>
                        <div className='ddItem bold'>Pessoas</div>
                        <hr />
                        <DropDownItem to='users' text='Usuários' />
                        <DropDownItem to='professionals' text='Profissionais' />
                        <div className='ddItem bold'>Árvores</div>
                        <hr />
                        <DropDownItem to='register/tree' text='Cadastrar Árvores' />
                        <DropDownItem to='inventory' text='Inventário do Parque Arbóreo' />
                        <div className='ddItem bold'>Situações de Risco</div>
                        <hr />                        
                        <DropDownItem to='register/risk' text='Cadastrar Risco' />
                        <DropDownItem to='risksituation' text='Situações de Risco' />
                    </>
                )}
                
            </ul>
        </li>
    )
}

export default DropDown