import type { NextPage } from 'next'
import Head from 'next/head'

import { LowpageLayout } from '@/components/templates/LowpageLayout'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Peyo Log!</title>
      </Head>

      <LowpageLayout heading="Profile">プロフィール</LowpageLayout>
    </>
  )
}

export default Profile
