import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from '../../styles/card.module.scss'

const Card = () => {
  const [isOpenCard, setIsOpenCard] = useState(false)

  const handleOpenCardDetail = () => {
    setIsOpenCard(!isOpenCard)
  }

  return (
    <div className={styles.container}>
      <motion.div
        layout
        transition={{ duration: 0.6, type: 'spring', stiffness: 110 }}
        className={styles.wrapper}
        //style={{ borderRadius: '15px' }}
        onClick={handleOpenCardDetail}
      >
        <motion.h3
          layout='position'
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className={styles.title}
        >Framer motion 🚀</motion.h3>
        {
          isOpenCard && (
            <motion.div
              initial={{ x: 0, y: 20, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              exit={{
                x: 0, y: 20, opacity: 0,
              }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={styles.content}>
              <p>
                is a free collection of 180 linear gradients that you can use as
                <br />
                content backdrops in any part of your website.
              </p>
              <p>
                is a free collection of 180 linear gradients that you can use as
                <br />
                content backdrops in any part of your website.
              </p>
            </motion.div>
          )
        }
      </motion.div>
    </div >
  )
}

export default Card;
