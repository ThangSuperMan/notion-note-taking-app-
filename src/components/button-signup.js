import React, { useRef } from 'react'

const ButtonSignup = (props) => {
  const { marginLeft, padding } = props
  const buttonRef = useRef(null)

  const styles = {
    backgroundColor: '#e16259',
    color: '#ffffff',
    border: '1px solid #be5643',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    borderRadius: '5px',
    padding: padding ? padding : '6px 12px',
    transition: 'all 0.1s linear',
    fontSize: '14px',
    marginLeft: marginLeft ? '20px' : undefined,
    cursor: 'pointer',
  }

  const handleMouseEnter = () => {
    buttonRef.current.style.backgroundColor = '#CF534A'
  }

  const handleMouseLeave = () => {
    buttonRef.current.style.backgroundColor = 'rgba(225, 98, 89)'
  }

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={buttonRef}
      style={styles}
    >
      Try notion Free
    </button>
  )
}

export default ButtonSignup;
