import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import { Button } from '@/components/atoms/button/Button'
import { Heading } from '@/components/atoms/text/Heading'
import { Text } from '@/components/atoms/text/Text'
import { Title } from '@/components/atoms/text/Title'
import { TextArea } from '@/components/molecules/TextArea'
import { WorkPageProps } from '@/types/workTypes'

export const WorkSplitLayout = (props: WorkPageProps) => {
  const { image, bgColor, title, abstract, url, content } = props
  const height = use100vh()

  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_SectionLeft bgColor={bgColor}>
        <_SectionLeftHead>
          <_WorkHeadingWrap>
            <Title fontSize="48px" color="#FFF">
              {title}
            </Title>
            <Text color="#FFF">{abstract}</Text>
          </_WorkHeadingWrap>
        </_SectionLeftHead>
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
      {url && (
        <_GoLiveBtn>
          <Button
            strokeColor="#FFF"
            fillColor={bgColor}
            onClick={() => location.assign(url)}
          >
            Go Live
          </Button>
        </_GoLiveBtn>
      )}
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

const _SectionLeftHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const _WorkHeadingWrap = styled.div`
  * + * {
    margin-top: 4px;
  }
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

const _GoLiveBtn = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  transition: 0.8s;

  &:hover {
    transform: translateY(-10px);
  }
`
