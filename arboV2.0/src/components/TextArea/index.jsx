import React from 'react'

function TextArea({
    id,
    type,
    value,
    name,
    placeholder,
    onChange,
    rows,
    children
}) {

    return (
        <div className="form-floating formTextArea">
            <textarea
                type={type}
                value={value} 
                name={name}
                onChange={(e) => onChange(e.target.value)} 
                className="form-control h-100" 
                id={id}
                placeholder={placeholder} 
                rows={rows}></textarea>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default TextArea