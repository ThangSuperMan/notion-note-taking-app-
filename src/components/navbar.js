import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import styles from '../../styles/navbar.module.scss'
import { BiChevronDown } from 'react-icons/bi'
import ButtonSignup from './button-signup'

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.leftBar}>
        <Logo />
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Product</a>
            </Link>
            <BiChevronDown className={styles.icon} />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Dowload</a>
            </Link>
            <BiChevronDown className={styles.icon} />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Solution</a>
            </Link>
            <BiChevronDown className={styles.icon} />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Resources</a>
            </Link>
            <BiChevronDown className={styles.icon} />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Pricing</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.rightBar}>
        <Link href='/contact'>
          <a className={styles.rightBarLink}>Contact sales</a>
        </Link>
        <span
          className={styles.hightlightVerticle}
        >
        </span>
        <Link href='/login'>
          <a className={styles.rightBarLink}>Login</a>
        </Link>
        <Link href='/register'>
          <a>
            <ButtonSignup marginLeft={20} />
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
