import type { NextPage } from 'next'
import Head from 'next/head'

import { WorksBlock } from '@/components/organisms/works/WorksBlock'
import { LowpageLayout } from '@/components/templates/LowpageLayout'

const Works: NextPage = () => {
  return (
    <>
      <Head>
        <title>Works | Peyo Log!</title>
      </Head>

      <LowpageLayout heading="Works">
        <WorksBlock />
      </LowpageLayout>
    </>
  )
}

export default Works
