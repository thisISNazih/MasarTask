import React from 'react'

const InputField = ({onChangeHandler}) => { 

    return (
        <input type="text" className="form-control list-input" onChange={(e)=>onChangeHandler(e)}/>
    )

} 

export default InputField;