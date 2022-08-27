import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import { Heading } from '@/components/atoms/Heading'

export const HeroArea = () => {
  const height = use100vh()

  return (
    <_Section height={height ? `${height}px` : '100vh'}>
      <_TitleWrap>
        <Heading>Peyo Log!</Heading>
        <_SubTitle>Isono Tamaki’s portfolio</_SubTitle>
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
  * + * {
    margin-top: 8px;
  }
`

const _SubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 20px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
  text-align: center;
`
