import React from 'react'

const Button = ({action, text, className}) => {
  return (
    <button 
    className='bg-green-700    text-white border-green-700 border-2 hover:text-green-700 hover:bg-white px-4 py-2 rounded-md' 
    onClick={action}>{text}</button>
  )
}

export default Button