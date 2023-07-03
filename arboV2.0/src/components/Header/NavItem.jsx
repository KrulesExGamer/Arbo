import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({ to, text, handleClick }) {
    return (
        <li className="nav-item">
            <Link 
                className="nav-link headerItem" 
                to={to}>
                {text}
            </Link>
        </li>
    )
}

export default NavItem




