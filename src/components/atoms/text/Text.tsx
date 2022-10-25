import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Text = ({ children }: Props) => {
  return <_P>{children}</_P>
}

const _P = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  letter-spacing: 0.02em;
  line-height: 1.75;
`
