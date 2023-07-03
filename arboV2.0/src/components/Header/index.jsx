import React from 'react'
import Logo from './Logo'
import Brand from './Brand'
import NavItem from './NavItem'
import DropDown from './DropDown'
import AuthConsumer from '../../hooks/auth'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
    const [authed, dispatch] = AuthConsumer()

    function handleLogout(e) {
        e.preventDefault()
        dispatch({ type: 'logout' })
        navigate('/landing')

    }

    return (
        <header id="componentHeader" className='fixed-top'>

            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Logo
                        source='images/usplogo.png'
                        height='30px'
                        width=''
                        alt='USP' />

                    <Brand text='Inventário do Parque Arbóreo' />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            {!authed.auth && <NavItem to='landing' text='Autenticação' />}
                            {authed.auth && <NavItem to='ocorrencias' text='Relatar Ocorrência' />}
                            {authed.auth && <DropDown title='Opcões' />}
                            {authed.auth && (
                                <li className="nav-item">
                                    <Link className="nav-link headerItem" onClick={e => handleLogout(e)}>Logout</Link>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    )
}
export default Header