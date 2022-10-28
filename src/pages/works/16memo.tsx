import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkContentLayout } from '@/components/templates/WorkContentLayout'
import iromemoData from '@/data/works/16memo.json'

const iromemo: NextPage = () => {
  return (
    <>
      <Head>
        <title>16memo | Works | PEYO LOG</title>
      </Head>

      <WorkContentLayout {...iromemoData} />
    </>
  )
}

export default iromemo
