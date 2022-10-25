import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Heading } from '@/components/atoms/text/Heading'

type Props = {
  children: ReactNode
}

export const WorksLayout = ({ children }: Props) => {
  return (
    <_DisplayWrap>
      <Heading fontSize="48px">Works</Heading>
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
`
