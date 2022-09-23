import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { Title } from '@/components/atoms/Title'
import { TextEg } from '@/components/atoms/text/TextEg'

export const HeroArea = () => {
  const height = use100vh()

  return (
    <_Section height={height ? `${height}px` : '100vh'}>
      <_TitleWrap>
        <Title />
        <TextEg fontSize="20px">Isono Tamaki’s portfolio</TextEg>
      </_TitleWrap>
    </_Section>
  )
}

const _Section = styled.section<{ height: string }>`
  display: grid;
  height: ${(props) => props.height};
  place-content: center;
`
const _TitleWrap = styled.div`
  height: fit-content;
  text-align: center;
  * + * {
    margin-top: 8px;
  }
`
