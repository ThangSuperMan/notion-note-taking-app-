import React from 'react'
import { motion } from 'framer-motion'


const AnimatedSection = ({ children }) => {
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
    >
      {children}
    </motion.div>
  )
}

export default AnimatedSection
