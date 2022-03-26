import React, { useState, useRef, useEffect } from 'react'
import Logo from './logo'
import Link from 'next/link'
import styles from '../../styles/navbar.module.scss'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import ButtonSignup from './button-signup'

const Navbar = () => {
  const [downloadMenuDropdownWidth, setDowloadMenuDropdownWidth] = useState('170px')
  const [inActiveMenuMobile, setInActiveMenuMobile] = useState(false)
  const menuMobileRef = useRef(null)

  const handleToggleMenuMobile = () => {
    // Change the icon menu mobile
    setInActiveMenuMobile(prev => !prev)
    const display = menuMobileRef.current.style.display

    if (display === '' || display === 'none') {
      menuMobileRef.current.style.display = 'block';
    } else if (display !== '') {
      menuMobileRef.current.style.display = 'none';
    }
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        menuMobileRef.current?.style.display = 'none';

        // Hanle error when cient toggle menu mobile and resize the window 
        setInActiveMenuMobile(false)
      }
    })
  }, [])

  return (
    <>
      <div ref={menuMobileRef} className={styles.listMenuMobile}>
        <div className={styles.itemMenuMobile}>
          <Link href='/'>
            <a className={styles.itemMenuMobileLink}>Product</a>
          </Link>
          <ul>
            <li>
              <Link href='/'>
                <a>Overview</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Template gallery</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>Customer stories</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a>integrations</a>
              </Link>
            </li>
          </ul>
          <Link href='/'>
            <a className={styles.dowloadNotion}>
              <div>
                <AiOutlineCloudDownload className={styles.menuItemDropdownDownloadIcon} />
                <span>Download Notion</span>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <div className={styles.wrapper}>
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
            <div className={styles.rightBarContainer}>
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
            </div>
            <Link href='/register'>
              <a>
                <ButtonSignup marginLeft={20} />
              </a>
            </Link>
            <button onClick={handleToggleMenuMobile} className={styles.rightBarMenuMobile}>
              {inActiveMenuMobile ? (
                <svg viewBox="0 0 30 30" className={styles.icon}><polygon points="26,5.4 24.6,4 15,13.6 5.4,4 4,5.4 13.6,15 4,24.6 5.4,26 15,16.4 24.6,26 26,24.6 16.4,15 "></polygon></svg>
              ) : (
                <svg viewBox="0 0 30 30" className={styles.icon} ><path d="M2,4v2h26V4H2z M2,16h26v-2H2V16z M2,26h26v-2H2V26z"></path></svg>
              )}
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
