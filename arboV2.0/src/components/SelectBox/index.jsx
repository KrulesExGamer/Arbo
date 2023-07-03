import React from 'react'

function FormSelect({ id, value, name, onChange, titleOption, options, children }) {

    return (
        <>
            {children && (
                <label
                    forhtml="selectProd"
                    className="form-label">
                    {children}
                </label>)}

            <select
                name={name}
                onChange={e => onChange(e.target.value)}
                value={value}
                id={id}
                className="form-select formSelectBox"
                aria-label="Select">

                <option value="DEFAULT">{titleOption}</option>
                {options.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
        </>
    )
}
export default FormSelect