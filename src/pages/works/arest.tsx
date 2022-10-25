import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkSplitLayout } from '@/components/templates/WorkSplitLayout'
import aRestData from '@/data/works/aRest.json'

const aRest: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Rest | Works | PEYO LOG</title>
      </Head>

      <WorkSplitLayout {...aRestData} />
    </>
  )
}

export default aRest
