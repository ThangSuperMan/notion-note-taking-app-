import React, { useState, useEffect } from 'react'
import Navbar from '../src/components/navbar'
import Banner from '../src/components/banner'
import Styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home(props) {
  const [key, setKey] = useState(false)

  useEffect(() => {
    console.log('mouted form index.js')

    //return () => setKey(prev => !prev)
  })

  const handleClickButtonChangeKey = () => {
    console.log('handleClickButtonChangeKey')
    setKey(prev => !prev)
  }

  return (
    <>
      <Head>
        <title>Notion Note taking app - Homepage</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Banner />
    </>
  )
}
