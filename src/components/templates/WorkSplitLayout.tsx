import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import { Button } from '@/components/atoms/button/Button'
import { Heading } from '@/components/atoms/text/Heading'
import { Text } from '@/components/atoms/text/Text'
import { Title } from '@/components/atoms/text/Title'
import { TextArea } from '@/components/molecules/TextArea'
import { WorkPageProps } from '@/types/workTypes'

import GoLiveIcon from 'public/icons/goLive.svg'

export const WorkSplitLayout = (props: WorkPageProps) => {
  const { image, color, title, abstract, content } = props
  const height = use100vh()

  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_SectionLeft bgColor={color}>
        <Title fontSize="48px" color="#FFF">
          {title}
        </Title>
        <Text color="#FFF">{abstract}</Text>
        <Button
          strokeColor="#3DB8B3"
          fillColor="#FFF"
          onClick={() => console.log('click')}
        >
          Go Live
          <_BtnInner>
            <GoLiveIcon width={16} height={16} fill="#3DB8B3" />
          </_BtnInner>
        </Button>
      </_SectionLeft>
      <_SectionRight>
        <TextArea heading="Period">{content.period}</TextArea>
        <TextArea heading="Concept">{content.concept}</TextArea>
        <TextArea heading="Technology">{content.technology}</TextArea>
        <_LinkArea>
          <Heading fontSize="24px">Repository</Heading>
          {content.repository.map((item, index) => (
            <_Link key={index} href={item}>
              {item}
            </_Link>
          ))}
        </_LinkArea>
      </_SectionRight>
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div<{ height: string }>`
  display: flex;
  width: 100vw;
  height: ${(props) => `calc(${props.height}) `};
`

const _SectionLeft = styled.section<{ bgColor: string }>`
  width: calc(50% - 8%);
  padding: 4%;
  margin-top: 4.5rem;
  background: ${(props) => props.bgColor};
`

const _BtnInner = styled.span`
  display: inline-flex;
  align-self: center;
  margin-left: 10px;
`

const _SectionRight = styled.section`
  display: flex;
  width: calc(50% - 8%);
  flex-direction: column;
  padding: 4%;
  margin-top: 4.5rem;
  gap: 42px;
`
const _LinkArea = styled.div`
  h2 {
    margin-bottom: 16px;
  }
`

const _Link = styled.a`
  display: block;
  color: #4d79ff;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
`
