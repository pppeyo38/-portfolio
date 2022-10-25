import type { NextPage } from 'next'
import Head from 'next/head'

import { WorksLayout } from '@/components/templates/WorksLayout'
import worksList from '@/data/works/worksList.json'

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works | PEYO LOG!</title>
      </Head>

      <WorksLayout />
    </>
  )
}

export default Works
