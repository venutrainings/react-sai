import React from 'react'

function TextField({label,input,value,onChange}) {
  return (
    <div>
        <label>{label}</label>
        <input 
        {...input}
        value={value}
        onChange={onChange}
        />
    </div>
  )
}

export default TextField