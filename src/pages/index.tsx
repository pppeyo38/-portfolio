import type { NextPage } from 'next'
import Head from 'next/head'

import { TopLayout } from '@/components/templates/TopLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PEYO LOG!</title>
      </Head>

      <TopLayout />
    </>
  )
}

export default Home
