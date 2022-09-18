import type { NextPage } from 'next'
import Head from 'next/head'

import { ProfileLayout } from '@/components/templates/ProfileLayout'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Peyo Log!</title>
      </Head>

      <main>
        <ProfileLayout />
      </main>
    </>
  )
}

export default Profile
