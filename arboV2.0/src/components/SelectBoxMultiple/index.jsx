import React from 'react'

function FormSelectMultiple({ id, value, name, onChange, title, options, size, children }) {
  return (
    <>
      {children && (
        <label
          forhtml="selectProd"
          className="form-label">
          {children}
        </label>)}

      <select
        multiple
        name={name}
        value={value}
        id={id}
        className="form-select formSelectBox"
        size={size}
        aria-label={title}>
        {options && options.map(item => <option key={item} value={item}>{item}</option>)}
      </select>
    </>
  )
}
export default FormSelectMultiple