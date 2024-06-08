import React from 'react'
import './Button.css'

function Button({ buttonType, label, disabled, onClick }) {
  return (
    <button className={`btn ${(buttonType === 'add' && 'add') ||
      (buttonType === 'remove' && 'remove') ||
      (buttonType === 'checkout' && 'checkout')
      }`} disabled={disabled} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button