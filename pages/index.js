import React from 'react'
import Banner from '../src/components/banner'
import Head from 'next/head'

export default function Home() {

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
