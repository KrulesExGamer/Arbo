import React from 'react'

function InputText({
    id,
    type,
    value,
    name,
    placeholder,
    onChange,
    children
}) {

    return (
        <div className="form-floating formInputText">
            <input 
                type={type}
                value={value} 
                name={name}
                onChange={(e) => onChange(e.target.value)} 
                className="form-control" 
                id={id}
                placeholder={placeholder} />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default InputText