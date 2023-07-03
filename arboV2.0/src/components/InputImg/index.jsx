import React from 'react'

function FormInputImg({
    id,
    accept,
    name,
    classes,
    placeholder
}) {

    const type = {
        "image": "image/*",
        "document": ".pdf, .txt, .docx",
        "audio": "audio/*",
        "video": "video"
    }

    return (
        <>
            <input
                accept={type[accept]}
                type="file"
                name={name}
                className={"form-control " + classes}
                id={id}
                placeholder={placeholder} 
                multiple/>
            {accept === 'image' && <div className='notation'>* Aceita-se apenas arquivos .jpg, .png e .gif</div>}
        </>
    )
}

export default FormInputImg