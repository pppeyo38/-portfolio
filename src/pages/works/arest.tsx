import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkContentLayout } from '@/components/templates/WorkContentLayout'
import aRestData from '@/data/works/aRest.json'

const aRest: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Rest | Works | PEYO LOG</title>
      </Head>

      <WorkContentLayout {...aRestData} />
    </>
  )
}

export default aRest
