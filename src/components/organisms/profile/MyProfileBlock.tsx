import styled from '@emotion/styled'
import Image from 'next/image'
import { ReactNode } from 'react'

import { TextEg } from '@/components/atoms/text/TextEg'

import profile from '/public/profile.png'

type Props = {
  children: ReactNode
}

export const MyProfileBlock = ({ children }: Props) => {
  return (
    <_Content>
      <_Detail>
        <_ImgWrap>
          <_ImageFigure>
            <Image src={profile} alt={'プロフィール写真'} layout="fill" />
          </_ImageFigure>
        </_ImgWrap>
        <_TextWrap>
          <_NameWrap>
            <_MyName>磯野 圭希</_MyName>
            <TextEg fontSize="14px">Isono Tamaki</TextEg>
          </_NameWrap>
          {children}
        </_TextWrap>
      </_Detail>
    </_Content>
  )
}

const _Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _Detail = styled.div`
  display: flex;
`

const _ImgWrap = styled.div`
  display: grid;
  width: 460px;
  place-content: center;
`

const _ImageFigure = styled.figure`
  position: relative;
  width: 240px;
  height: 240px;
`

const _TextWrap = styled.div`
  display: flex;
  width: 460px;
  flex-direction: column;
`

const _NameWrap = styled.div`
  margin-bottom: 24px;
`

const _MyName = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 24px;
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  letter-spacing: 0.96px;
  line-height: 1.43;
`
