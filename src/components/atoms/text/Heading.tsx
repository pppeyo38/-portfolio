import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Heading = ({ children }: Props) => {
  return <_H1>{children}</_H1>
}

const _H1 = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 45px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
  text-align: center;
`
