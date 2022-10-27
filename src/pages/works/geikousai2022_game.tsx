import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkContentLayout } from '@/components/templates/WorkContentLayout'
import gamesiteData from '@/data/works/geikousaiGame.json'

const aRest: NextPage = () => {
  return (
    <>
      <Head>
        <title>芸工祭2022ゲームサイト | Works | PEYO LOG</title>
      </Head>

      <WorkContentLayout {...gamesiteData} />
    </>
  )
}

export default aRest
