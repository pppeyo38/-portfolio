import styled from '@emotion/styled'
import { Introduction } from '@/components/atoms/text/Introduction'

export const TopPc = () => {
  return (
    <>
      <_SectionRight>
        <Introduction>Welcome, Peyo’s Portfolio!</Introduction>
      </_SectionRight>
      <_SectionLeft></_SectionLeft>
    </>
  )
}

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
