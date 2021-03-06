import React from 'react'
import styles from '../styles/login.module.scss'
import AnimatedSection from '../src/components/animated-section'

const Login = () => {
  return (
    <AnimatedSection>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            Log in
          </h3>
          <div className={styles.form}>
            <div className={styles.textField}>
              <span className={styles.textFieldTitle}>
                Email
              </span>
              <input className={styles.textFieldInput}
                placeholder='Enter your email address...'
                type='email'
              />
            </div>
            <div className={styles.textField}>
              <span className={styles.textFieldTitle}>
                Password
              </span>
              <input className={styles.textFieldInput}
                placeholder='Enter your passwrod...'
                type='password'
              />
            </div>
            <button className={styles.formButton}>Continue login</button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Login
