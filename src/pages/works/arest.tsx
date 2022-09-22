import type { NextPage } from 'next'
import Head from 'next/head'

import { WorkLayout } from '@/components/templates/WorkLayout'

import images from '@/data/works/aRestImg.json'

const aRest: NextPage = () => {
  return (
    <>
      <Head>
        <title>A Rest | Works | Peyo Log!</title>
      </Head>

      <WorkLayout images={images} workTitle="A Rest" />
    </>
  )
}

export default aRest
