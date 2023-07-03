import React, { useState } from 'react'
import RiskHistoryItem from './RiskHistorylItem'
import InputText from '../../components/InputText'

function RiskHistory({ history }) {

    const [description, setDescription] = useState('')
    const [reload, setReload] = useState(false)

    function handleAdd(e) {
        
        const dateInput = document.getElementById('idRiskHistoryDate')
        const tokens = dateInput.value.split('-')
        
        const day = tokens[2]
        const month = tokens[1]
        const year = tokens[0]

        const fact = {
            id: String(Date.now()),
            day: day, 
            month: month, 
            year: year, 
            description: description
        }    
        
        history.current.push(fact)
        setReload(e => !e)
    }

    function handleRemove(e) {
        history.current = history.current.filter(f => f.id !== e.target.name)
        setReload(e => !e)
    }

    return (
        <div className='containerRiskHistory'>
            <h3>Histórico</h3>

            <div className="container">
                <div className="row">

                    <div className="col-4 align-self-center">
                        <input id='idRiskHistoryDate' type='date' />
                    </div>

                    <div className="col">
                        <InputText
                            className='celula-form-arvore'
                            id='idRiskHistoryDescription'
                            type='text'
                            value={description}
                            name='description'
                            placeholder='Description'
                            onChange={setDescription}>
                            Descrição
                        </InputText>
                    </div>

                </div>

                <div className="row">
                    
                        <button
                            id='idBtnSubmitHistory'
                            className='btn btn-warning rounded-3'
                            onClick={handleAdd}>
                            Cadastrar
                        </button>
                    
                </div>

                <div className="historyBoard">
                    <h5>Registros</h5>
                    {reload && history && history.current.map(f => <RiskHistoryItem key={f.id} fact={f} handleRemove={handleRemove} />)}
                    {!reload && history && history.current.map(f => <RiskHistoryItem key={f.id} fact={f} handleRemove={handleRemove} />)}
                </div>
            </div>

        </div>
    )
}

export default RiskHistory