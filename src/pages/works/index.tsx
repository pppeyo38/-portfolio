import type { NextPage } from 'next'
import Head from 'next/head'

import { WorksBlock } from '@/components/organisms/works/WorksBlock'
import { LowpageLayout } from '@/components/templates/LowpageLayout'

import worksList from '@/data/works/worksList.json'

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works | PEYO LOG!</title>
      </Head>

      <LowpageLayout heading="Works">
        <WorksBlock worksList={worksList} />
      </LowpageLayout>
    </>
  )
}

export default Works
