import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '@/components/organisms/Header'
import { HomeLayout } from '@/components/templates/HomeLayout'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peyo Log!</title>
      </Head>

      <main>
        <Header />
        <HomeLayout />
      </main>
    </>
  )
}

export default Home
