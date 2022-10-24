import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import { Title } from '../atoms/text/Title'

export const TopLayout = () => {
  const height = use100vh()
  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_SectionRight>
        <Title fontSize="64px">Welcome, Peyo’s Portfolio!</Title>
      </_SectionRight>
      <_SectionLeft></_SectionLeft>
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div<{ height: string }>`
  display: flex;
  width: 100vw;
  height: ${(props) => `calc(${props.height}) `};
`

const _SectionRight = styled.section`
  display: flex;
  width: 40%;
  align-items: center;
  justify-content: center;
  padding-left: 5%;
  margin-top: 4.5rem;

  h1 {
    width: 400px;
    line-height: 1.2;
  }
`

const _SectionLeft = styled.section`
  width: 55%;
  background-image: url('/mock.png');
  background-size: cover;
`
