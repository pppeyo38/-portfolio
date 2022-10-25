import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import { TextArea } from '@/components/molecules/TextArea'

type Props = {
  bgColor: string
}

export const WorkSplitLayout = ({ bgColor }: Props) => {
  const height = use100vh()
  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_SectionLeft bgColor={bgColor}></_SectionLeft>
      <_SectionRight>
        <TextArea heading="Period">2020 October</TextArea>
        <TextArea heading="Concept">
          テキストテキストテキストテキストテキスト
        </TextArea>
        <TextArea heading="Technology">React, TypeScript</TextArea>
        <TextArea heading="Repository">
          <span>ripository</span>
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
