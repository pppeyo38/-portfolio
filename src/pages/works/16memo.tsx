import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkLayout } from '@/components/templates/WorkLayout'

import images from '@/data/works/iromemoImg.json'

const iromemo: NextPage = () => {
  return (
    <>
      <Head>
        <title>16memo | Works | Peyo Log!</title>
      </Head>

      <WorkLayout images={images} workTitle="16memo" />
    </>
  )
}

export default iromemo
