import styled from '@emotion/styled'
import { Title } from '@/components/atoms/text/Title'

export const TopTablet = () => {
  return (
    <_DisplayWrap>
      <Title fontSize="64px">Welcome, Peyo’s Portfolio!</Title>
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  margin-top: 4.5rem;

  h1 {
    width: 400px;
    line-height: 1.2;
  }
`
