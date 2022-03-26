import '../styles/globals.scss'
import Layout from '../src/components/layouts/main'
import { AnimatePresence } from 'framer-motion'

function Website(props) {
  const { Component, pageProps, router } = props
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}
export default Website
