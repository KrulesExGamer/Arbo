import React from 'react'

function RiskProfessionalItem({ professional, handleRemove }) {
    return (
        <div id={professional.id}>
            <div className='container containerRiskProfessionalItem'>
                <div className="row">
                    <div className="col-9">
                        {professional.name}
                    </div>
                    <div className="col-3">
                        <button name={professional.id} className='btn btn-danger btn-sm rounded' onClick={(e) => handleRemove(e)}>
                            Remover
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RiskProfessionalItem