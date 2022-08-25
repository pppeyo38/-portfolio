import styled from '@emotion/styled'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <_H1>テスト</_H1>
      </main>
    </div>
  )
}

export default Home

const _H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
`
