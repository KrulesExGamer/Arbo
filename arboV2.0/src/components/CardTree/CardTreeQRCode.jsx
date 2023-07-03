import React from 'react'
import QRCode from '../../services/QRCode'

function CardQrCode({ tree }) {
    return (
        <>
            <h3 className='h3Card'>QRCode</h3>
            <hr />
            <div className='qrCode'>
                <QRCode text={'http://www.site.com/' + tree.codigo} size={100} />
            </div>
        </>
    )
}

export default CardQrCode