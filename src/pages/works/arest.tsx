import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkLayout } from '@/components/templates/WorkLayout'

import aRestData from '@/data/works/aRest.json'

const aRest: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Rest | Works | PEYO LOG!</title>
      </Head>

      <WorkLayout {...aRestData} />
    </>
  )
}

export default aRest
