import React from 'react'

const Input = ({ value, type, placeholder, id, name, onChange}) => {
  return (
     <input 
     type={type} 
     placeholder={placeholder} 
     id={id} 
     name={name} 
     onChange={onChange}
     value={value}  
     className='h-10 w-full border rounded-md p-2 my-3 outline-none'
     />
  )
}

export default Input