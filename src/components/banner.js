import React from 'react'
import styles from '../../styles/banner.module.scss'
import Image from 'next/image'
import ButtonSignup from './button-signup'
import { motion } from 'framer-motion'
import curologo from '../assets/curology.png'
import mixapanel from '../assets/mixpanel.png'
import mitsushibi from '../assets/mitsubishi.png'
import matchV2 from '../assets/match-v2.png'
import headspaceLogo from '../assets/headspace-logo.png'

const Banner = () => {

  const variants = {
    hidden: { x: 0, y: 20, opacity: 0 },
    enter: { x: 0, y: 0, opacity: 1 },
    exit: { x: 0, y: 20, opacity: 0 }
  }

  return (
    <motion.div
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className={styles.banner}>
      <div className={styles.bannerLeftBar}>
        <h1 className={styles.bannerTitle}>
          <span>
            One workspace.
          </span>
          <br />
          <span>
            Every team.
          </span>
        </h1>
        <p className={styles.bannerSubtitle}>
          <span className={styles.breakLine}>
            We’re more than a doc. Or a table. Customize
          </span>
          <span className={styles.breakLine}>
            Notion to work the way you do.
          </span>
        </p>
        <div className={styles.bannerButton}>
          <ButtonSignup padding='8px 20px' />
        </div>
        <div className={styles.trusted}>
          <h4 className={styles.trustedTitle}>
            trusted by teams at
          </h4>
          <ul className={styles.trustedList}>
            <li className={styles.trustedItem}>
              <Image src={curologo} />
            </li>
            <li className={styles.trustedItem}>
              <Image src={mixapanel} />
            </li>
            <li className={styles.trustedItem}>
              <Image src={mitsushibi} />
            </li>
            <li className={styles.trustedItem}>
              <Image src={matchV2} />
            </li>
            <li className={styles.trustedItem}>
              <Image src={headspaceLogo} />
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bannerRightBar}>
        <img src='https://www.notion.so/cdn-cgi/image/format=auto,width=1080,quality=100/front-static/pages/product/home-page-hero-refreshed-v3.png' />
      </div>
    </motion.div>
  )
}

export default Banner;
