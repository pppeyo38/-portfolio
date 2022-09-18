import type { NextPage } from 'next'
import Head from 'next/head'

import { WorksLayout } from '@/components/templates/WorksLayout'

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peyo Log! | Works</title>
      </Head>

      <main>
        <WorksLayout />
      </main>
    </>
  )
}

export default Works
