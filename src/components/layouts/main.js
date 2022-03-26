import React from 'react'
import Navbar from '../navbar'
import styles from '../../../styles/Home.module.scss'

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className={styles.appContainer}>
        {children}
      </div>
    </>
  )
}

export default Main
