import styled from '@emotion/styled'
import { Title } from '@/components/atoms/text/Title'
import { AboutMe } from '@/components/molecules/AboutMe'

export const ProfileLayout = () => {
  return (
    <_DisplayWrap>
      <Title isBold>Profile</Title>
      <AboutMe />
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  margin-top: calc(4.5rem + 60px);

  @media screen and (max-width: 519px) {
    margin-top: calc(4.5rem + 40px);
  }
`
