import React from 'react'

function Brand({ text }) {
    return (
        <div className='col'>
            <div className="navbar-brand headerTitle">{text}</div>
        </div>
    )
}

export default Brand