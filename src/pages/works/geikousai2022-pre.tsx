import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkSplitLayout } from '@/components/templates/WorkSplitLayout'
import geikousaiData from '@/data/works/geikousai.json'

const geikousai: NextPage = () => {
  return (
    <>
      <Head>
        <title>芸工祭2022告知サイト | Works | PEYO LOG</title>
      </Head>

      <WorkSplitLayout {...geikousaiData} />
    </>
  )
}

export default geikousai
