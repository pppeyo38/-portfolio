import type { NextPage } from 'next'
import Head from 'next/head'

import { WorksLayout } from '@/components/templates/WorksLayout'

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works | Peyo Log!</title>
      </Head>

      <main>
        <WorksLayout />
      </main>
    </>
  )
}

export default Works
