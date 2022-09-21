import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { MyProfileBlock } from '../profile/MyProfileBlock'
import { Heading } from '@/components/atoms/Heading'
import { ViewMore } from '@/components/atoms/buttons/ViewMore'
import { JpText } from '@/components/atoms/text/TextJp'

export const Profile = () => {
  const height = use100vh()
  return (
    <_Section height={height ? `${height}px` : '100vh'}>
      <Heading>Profile</Heading>
      <_ContentInner>
        <MyProfileBlock>
          <JpText fontSize="16px">
            名古屋市立大学芸術工学部情報環境デザイン学科3年生。
            <br />
            プログラミングとデザインシステムに興味があります。
            <br />
            業務支援サービスの開発と提供を行うIT企業で
            <br />
            Webエンジニアとして長期インターンシップをしています。
          </JpText>
          <_ButtonWrap>
            <ViewMore path="/profile" />
          </_ButtonWrap>
        </MyProfileBlock>
      </_ContentInner>
    </_Section>
  )
}

const _Section = styled.section<{ height: string }>`
  display: grid;
  height: ${(props) => props.height};
  place-content: center;
`

const _ContentInner = styled.div`
  margin: 90px 0 45px;
`

const _ButtonWrap = styled.div`
  align-self: flex-end;
  margin-top: 24px;
`
