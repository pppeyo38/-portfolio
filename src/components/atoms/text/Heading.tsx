import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Heading = ({ children }: Props) => {
  return <_H2>{children}</_H2>
}

const _H2 = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.fontWt.Bold};
`
