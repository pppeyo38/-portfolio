import styled from '@emotion/styled'
import { Introduction } from '@/components/atoms/text/Introduction'

export const TopTablet = () => {
  return (
    <>
      <_SectionRight>
        <Introduction color="#FFF">
          Welcome,
          <br />
          Peyo’s
          <br />
          Portfolio!
        </Introduction>
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
