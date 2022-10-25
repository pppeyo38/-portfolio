import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  fontSize: string
  children: ReactNode
}

export const Heading = ({ fontSize, children }: Props) => {
  return <_H2 fontSize={fontSize}>{children}</_H2>
}

const _H2 = styled.h2<{ fontSize: string }>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: ${(props) => props.fontSize};
  font-weight: ${({ theme }) => theme.fontWt.Bold};
`
