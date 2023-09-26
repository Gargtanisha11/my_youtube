import React from 'react'

const Button = ({name}) => {
  return (
    <div className=' bg-gray-200 rounded-xl p-2 m-3'>
      <button>{name}</button>
    </div>
  )
}

export default Button
