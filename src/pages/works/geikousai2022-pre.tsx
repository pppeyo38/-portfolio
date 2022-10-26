import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkContentLayout } from '@/components/templates/WorkContentLayout'
import geikousaiData from '@/data/works/geikousai.json'

const geikousai: NextPage = () => {
  return (
    <>
      <Head>
        <title>芸工祭2022告知サイト | Works | PEYO LOG</title>
      </Head>

      <WorkContentLayout {...geikousaiData} />
    </>
  )
}

export default geikousai
