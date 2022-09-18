import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeLayout } from '@/components/templates/HomeLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peyo Log!</title>
      </Head>

      <HomeLayout />
    </>
  )
}

export default Home
