import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Title } from '@/components/atoms/text/Title'

type Props = {
  children: ReactNode
}

export const WorksLayout = ({ children }: Props) => {
  return (
    <_DisplayWrap>
      <Title isBold>Works</Title>
      {children}
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
