import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { ViewMore } from '@/components/atoms/buttons/ViewMore'
import { Heading } from '@/components/atoms/text/Heading'
import { TextJp } from '@/components/atoms/text/TextJp'
import { MyProfileBlock } from '@/components/organisms/profile/MyProfileBlock'

export const Profile = () => {
  const height = use100vh()
  return (
    <_Section height={height ? `${height}px` : '100vh'}>
      <Heading>Profile</Heading>
      <_ContentInner>
        <MyProfileBlock>
          <TextJp fontSize="16px">
            名古屋市立大学芸術工学部情報環境デザイン学科3年生。
            <br />
            プログラミングとデザインシステムに興味があります。
            <br />
            業務支援サービスの開発と提供を行うIT企業で
            <br />
            Webエンジニアとして長期インターンシップをしています。
          </TextJp>
          <_ButtonWrap>
            <ViewMore path="/profile">VIEW MORE</ViewMore>
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
