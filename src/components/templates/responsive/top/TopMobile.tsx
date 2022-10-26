import styled from '@emotion/styled'
import { Title } from '@/components/atoms/text/Title'

export const TopMobile = () => {
  return (
    <>
      <_SectionRight>
        <Title color="#FFF" fontSize="48px">
          Welcome, <br />
          Peyo’s Portfolio!
        </Title>
      </_SectionRight>
      <_SectionLeft />
    </>
  )
}

const _SectionRight = styled.section`
  overflow: hidden;
  width: calc(50% - 2rem);
  padding: 2rem 0 0 2rem;
  margin-top: 4.5rem;

  h1 {
    line-height: 1.2;
    white-space: pre;
    writing-mode: vertical-rl;
  }
`

const _SectionLeft = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 4.5rem;
  background-image: url('/mockUp/topMock_sp_tb.png');
  background-position-y: center;
  background-size: cover;
  transform: scale(1.2);
`
