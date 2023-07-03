import React from 'react'
import { Link } from 'react-router-dom'

function DropDownItem({ to, text }) {
    return (
        <li>
            <Link 
                className="dropdown-item ddItem" 
                to={to}>
                {text}
            </Link>
        </li>
    )
}

export default DropDownItem