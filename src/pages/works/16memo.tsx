import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkLayout } from '@/components/templates/WorkLayout'

import iromemoData from '@/data/works/iromemo.json'

const iromemo: NextPage = () => {
  return (
    <>
      <Head>
        <title>16memo | Works | Peyo Log!</title>
      </Head>

      <WorkLayout {...iromemoData} />
    </>
  )
}

export default iromemo
