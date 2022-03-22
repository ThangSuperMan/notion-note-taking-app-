import React, { useState } from 'react'


const ButtonSignup = (props) => {
  const { marginLeft, padding } = props

  const styles = {
    backgroundColor: '#e16259',
    color: '#ffffff',
    border: '1px solid #be5643',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    //padding: '8px 12px',
    padding: padding ? padding : '6px 12px',
    transition: 'all 0.1s linear',
    fontSize: '14px',
    marginLeft: marginLeft ? '20px' : undefined,
  }

  return (
    <button style={styles}>Try notion Free</button>
  )
}

export default ButtonSignup;
