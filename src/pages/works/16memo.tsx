import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkSplitLayout } from '@/components/templates/WorkSplitLayout'
import iromemoData from '@/data/works/iromemo.json'

const iromemo: NextPage = () => {
  const bgColor = 'linear-gradient(329.11deg, #00A8A6 0%, #79C8C0 100%);'

  return (
    <>
      <Head>
        <title>16memo | Works | PEYO LOG!</title>
      </Head>

      <WorkSplitLayout bgColor={bgColor} />
    </>
  )
}

export default iromemo
