import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import { TextArea } from '@/components/molecules/TextArea'
import { WorkPageProps } from '@/types/workTypes'

export const WorkSplitLayout = (props: WorkPageProps) => {
  const { image, color, title, abstract, content } = props
  const height = use100vh()

  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_SectionLeft bgColor={color}></_SectionLeft>
      <_SectionRight>
        <TextArea heading="Period">{content.period}</TextArea>
        <TextArea heading="Concept">{content.concept}</TextArea>
        <TextArea heading="Technology">{content.technology}</TextArea>
        <TextArea heading="Repository">
          {content.repository.map((item, index) => (
            <_Link key={index} href={item}>
              {item}
            </_Link>
          ))}
        </TextArea>
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
  width: 50%;
  margin-top: 4.5rem;
  background: ${(props) => props.bgColor};
`

const _SectionRight = styled.section`
  display: flex;
  width: calc(50% - 8%);
  flex-direction: column;
  padding: 4%;
  margin-top: 4.5rem;
  gap: 42px;
`

const _Link = styled.a`
  display: block;
  color: #9eb7ff;
`
