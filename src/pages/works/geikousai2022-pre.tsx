import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkLayout } from '@/components/templates/WorkLayout'

import images from '@/data/works/geikousaiImg.json'

const geikousai: NextPage = () => {
  return (
    <>
      <Head>
        <title>芸工祭2022プレサイト | Works | Peyo Log!</title>
      </Head>

      <WorkLayout images={images} workTitle="芸工祭2022プレサイト" />
    </>
  )
}

export default geikousai
