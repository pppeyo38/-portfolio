import type { NextPage } from 'next'
import Head from 'next/head'

import { ProfileLayout } from '@/components/templates/ProfileLayout'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Peyo Log! | Profile</title>
      </Head>

      <main>
        <ProfileLayout />
      </main>
    </>
  )
}

export default Profile
