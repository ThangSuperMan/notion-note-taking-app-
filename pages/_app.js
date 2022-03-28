import React, { useEffect } from 'react'
import '../styles/globals.scss'
import Layout from '../src/components/layouts/main'
import { AnimatePresence } from 'framer-motion'

function Website(props) {
  const { Component, pageProps, router } = props

  useEffect(() => {
    //console.log('mouted from _app.js')

    return () => console.log('unmouted from _app.js')
  })

  console.log(router.route)

  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}
export default Website
