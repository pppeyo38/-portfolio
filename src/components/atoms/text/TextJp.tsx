import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  fontSize: string
  children: ReactNode
}

export const JpText = ({ fontSize, children }: Props) => {
  return <_JpText fontSize={fontSize}>{children}</_JpText>
}

const _JpText = styled.p<{ fontSize: string }>`
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0.96px;
  line-height: 1.625;
`
