import React, { useState } from 'react'
import Logo from './logo'
import Link from 'next/link'
import styles from '../../styles/navbar.module.scss'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import ButtonSignup from './button-signup'

const Navbar = () => {
  const [downloadMenuDropdownWidth, setDowloadMenuDropdownWidth] = useState('170px')

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
            <div className={styles.menuItemDropdown}>
              <Link href='/'>
                <a className={styles.menuItemDropdownSection}>
                  <h3 className={styles.menuItemDropdownTitle}>
                    Home
                  </h3>
                  <p className={styles.menuItemDropdownSubtitle}>
                    Docs, projects, &  wikis
                  </p>
                </a>
              </Link>
              <Link href='/'>
                <a className={styles.menuItemDropdownSection}>
                  <h3 className={styles.menuItemDropdownTitle}>
                    Template gallery
                  </h3>
                  <p className={styles.menuItemDropdownSubtitle}>
                    Setups to get you started
                  </p>
                </a>
              </Link>
              <Link href='/'>
                <a className={styles.menuItemDropdownSection}>
                  <h3 className={styles.menuItemDropdownTitle}>
                    Integrations
                  </h3>
                  <p className={styles.menuItemDropdownSubtitle}>
                    Connect your tools to notion
                  </p>
                </a>
              </Link>
              <Link href='/'>
                <a className={styles.menuItemDropdownDownload}>
                  <div>
                    <AiOutlineCloudDownload className={styles.menuItemDropdownDownloadIcon} />
                    <span>Download Notion</span>
                  </div>
                </a>
              </Link>
              <span className={styles.menuItemDropdownDownloadDesc}>
                Mac, Windows, IOS, & Android
              </span>
            </div>
          </li>
          <li className={styles.menuItem}>
            <Link href='/'>
              <a>Download</a>
            </Link>
            <BiChevronDown className={styles.icon} />
            <div style={{ width: downloadMenuDropdownWidth }} className={styles.menuItemDropdown}>
              <Link href='/'>
                <a className={styles.menuItemDropdownSection}>
                  <h3 className={styles.menuItemDropdownTitle}>
                    IOS & Android
                  </h3>
                </a>
              </Link>
              <Link href='/'>
                <a className={styles.menuItemDropdownSection}>
                  <h3 className={styles.menuItemDropdownTitle}>
                    Mac & Windows
                  </h3>
                </a>
              </Link>
              <Link href='/'>
                <a className={styles.menuItemDropdownSection}>
                  <h3 className={styles.menuItemDropdownTitle}>
                    Web Clipper
                  </h3>
                </a>
              </Link>
            </div>
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
