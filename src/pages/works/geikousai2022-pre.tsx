import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkLayout } from '@/components/templates/WorkLayout'

import geikousaiData from '@/data/works/geikousai.json'

const geikousai: NextPage = () => {
  return (
    <>
      <Head>
        <title>芸工祭2022プレサイト | Works | Peyo Log!</title>
      </Head>

      <WorkLayout {...geikousaiData} />
    </>
  )
}

export default geikousai
