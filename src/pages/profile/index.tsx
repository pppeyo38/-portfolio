import type { NextPage } from 'next'
import Head from 'next/head'

import { TextJp } from '@/components/atoms/text/TextJp'
import { MyProfileBlock } from '@/components/organisms/profile/MyProfileBlock'
import { LowpageLayout } from '@/components/templates/LowpageLayout'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Peyo Log!</title>
      </Head>

      <LowpageLayout heading="Profile">
        <MyProfileBlock>
          <TextJp fontSize="16px">
            名古屋市立大学芸術工学部情報環境デザイン学科3年生。
            <br />
            プログラミングとデザインシステムに興味があります。
            <br />
            業務支援サービスの開発と提供を行うIT企業で
            <br />
            Webエンジニアとして長期インターンシップをしています。
            <br />
            <br />
            本サイトのタイトルである『Peyo(ぺよ)』とは
            <br />
            大学の先輩や友人につけてもらったあだ名で
            <br />
            私の出身地である茨城の方言に由来しています。
          </TextJp>
        </MyProfileBlock>
      </LowpageLayout>
    </>
  )
}

export default Profile
