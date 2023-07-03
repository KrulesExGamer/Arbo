import React, { useState } from "react"

function Checkbox({text, name}) {
    
    const [checked, setChecked] = useState(false)

    function handleClick(e){
        setChecked(previous => !previous)
    }
    
    return (
        <div className="form-check form-switch text-start">
            <input
                className="form-check-input"
                type="checkbox"
                name={name}
                id={text}
                onChange={e => handleClick(e)}
                checked={checked}/>

            <label
                className="form-check-label text-start"
                htmlFor={text}
                onClick={e => handleClick(e)}>
                {text}
            </label>
        </div >
    )
}

export default Checkbox