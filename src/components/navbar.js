import React from 'react'
import Logo from './logo'
import Link from 'next/link'
import styles from '../../styles/navbar.module.scss'
import { BiChevronDown } from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightBar}>
        <Logo />
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Product</a>
            </Link>
            <BiChevronDown />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Dowload</a>
            </Link>
            <BiChevronDown />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Solution</a>
            </Link>
            <BiChevronDown />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Resources</a>
            </Link>
            <BiChevronDown />
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Pricing</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.leftBar}>
        <Link href='/contact'>
          <a>Contact sales</a>
        </Link>
        <Link href='/login'>
          <a>Login</a>
        </Link>
        <span className={styles.hightlightVericle}></span>
        <Link href='/login'>
          <a>
            <button className={styles.butonSignup}>Try Notion free</button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
