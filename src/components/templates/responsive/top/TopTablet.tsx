import styled from '@emotion/styled'
import { Title } from '@/components/atoms/text/Title'

export const TopTablet = () => {
  return (
    <>
      <_SectionRight>
        <Title color="#FFF" fontSize="48px">
          Welcome, Peyo’s Portfolio!
        </Title>
      </_SectionRight>
      <_SectionLeft />
    </>
  )
}

const _SectionRight = styled.section`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  margin-top: 4.5rem;

  h1 {
    width: 250px;
    line-height: 1.2;
  }
`

const _SectionLeft = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 4.5rem;
  background-image: url('/mockUp/topMock_sp_tb.png');
  background-position-y: center;
  background-size: cover;
`
