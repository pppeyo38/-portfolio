import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkContentLayout } from '@/components/templates/WorkContentLayout'
import peyologData from '@/data/works/peyolog.json'

const peyoLog: NextPage = () => {
  return (
    <>
      <Head>
        <title>PEYO LOG | Works | PEYO LOG</title>
      </Head>

      <WorkContentLayout {...peyologData} />
    </>
  )
}

export default peyoLog
