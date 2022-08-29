import { Heading } from '@/components/atoms/Heading'
import styled from '@emotion/styled'
import Image from 'next/image'
import { use100vh } from 'react-div-100vh'

import profile from '/public/profile.png'

export const AboutMe = () => {
  const height = use100vh()
  return (
    <_Section height={height ? `${height}px` : '100vh'}>
      <_Content>
        <Heading>About Me</Heading>
        <_Detail>
          <_ImgWrap>
            <_ImageFigure>
              <Image src={profile} alt={'プロフィール写真'} layout="fill" />
            </_ImageFigure>
          </_ImgWrap>
          <_TextWrap>
            <_NameWrap>
              <_MyName>磯野 圭希</_MyName>
              <_Romaji>Isono Tamaki</_Romaji>
            </_NameWrap>
            <_Introduction>
              名古屋市立大学芸術工学部情報環境デザイン学科3年生。
              <br />
              Webフロントエンドエンジニアを志望しています。
              <br />
              プログラミングとデザインシステムが好きです。
              <br />
            </_Introduction>
          </_TextWrap>
        </_Detail>
      </_Content>
    </_Section>
  )
}

const _Section = styled.section<{ height: string }>`
  display: grid;
  height: ${(props) => props.height};
  place-content: center;
`

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _Detail = styled.div`
  display: flex;
  margin: 90px 0 45px;
`

const _ImgWrap = styled.div`
  display: grid;
  width: 435px;
  place-content: center;
`

const _ImageFigure = styled.figure`
  position: relative;
  width: 240px;
  height: 240px;
`

const _TextWrap = styled.div`
  width: 435px;
`

const _NameWrap = styled.div`
  margin-bottom: 24px;
  * + * {
    margin-top: 4px;
  }
`

const _MyName = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 32px;
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  letter-spacing: 0.96px;
  line-height: 1.43;
`
const _Romaji = styled.h4`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 0.96px;
  line-height: 1.28;
`

const _Introduction = styled.p`
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 16px;
  letter-spacing: 0.96px;
  line-height: 1.625;
`
