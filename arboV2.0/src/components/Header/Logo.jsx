import React from 'react'

function Logo({source, height, width, alt}) {
    return (
        <div className='col text-center'>
            <img src={source} width={width} height={height} alt={alt}/>
        </div>
    )
}

export default Logo