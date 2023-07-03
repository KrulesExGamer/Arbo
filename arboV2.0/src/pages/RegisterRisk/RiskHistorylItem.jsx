import React from 'react'

function RiskHistoryItem({ fact, handleRemove }) {

    return (
        <div id={fact.id}>
            <div className='containerRiskHistoryItem'>
                <div className="row">
                    <div className="col-3">
                        {fact.day + '/' + fact.month + '/' + fact.year}
                    </div>

                    <div className="col-6">
                        {fact.description}
                    </div>

                    <div className="col-3">
                        <button
                            name={fact.id}
                            className='btn btn-danger btn-sm rounded'
                            onClick={(e) => handleRemove(e)}>
                            Remover
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RiskHistoryItem