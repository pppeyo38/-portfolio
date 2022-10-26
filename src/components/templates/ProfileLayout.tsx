import styled from '@emotion/styled'
import Image from 'next/image'
import { Text } from '@/components/atoms/text/Text'
import { Title } from '@/components/atoms/text/Title'

import profileIcon from 'public/profile.png'

export const ProfileLayout = () => {
  return (
    <_DisplayWrap>
      <Title isBold>Profile</Title>
      <_Block>
        <_Figure>
          <Image src={profileIcon} alt="プロフィール" layout="fill" />
        </_Figure>
        <_AboutWrap>
          <_Romaji>Isono Tamaki</_Romaji>
          <_Name>磯野 圭希</_Name>
          <Text>
            名古屋市立大学芸術工学部情報環境デザイン学科3年生。
            <br />
            業務支援サービスの開発・提供を行うIT企業で
            <br />
            Webエンジニアとして長期インターンシップをしています。
            <br />
            エンジニアリングとデザインが好きです。
            <br />
            デザインエンジニアの働き方に興味があります。
          </Text>
        </_AboutWrap>
      </_Block>
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  margin-top: calc(4.5rem + 60px);
`

const _Block = styled.section`
  display: flex;
  margin-top: 60px;
`

const _Figure = styled.figure`
  position: relative;
  width: 240px;
  height: 240px;
  margin: 0 80px;
  border-radius: 120px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 10%),
    0px 10px 10px -5px rgba(0, 0, 0, 4%);
`

const _AboutWrap = styled.div`
  padding: 10px 0;
  * + * {
    margin-top: 8px;
  }
`

const _Romaji = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
`

const _Name = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWt.Medium};
  letter-spacing: 0.1rem;
`
