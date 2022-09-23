import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  fontSize: string
  children: ReactNode
}

export const TextEg = ({ fontSize, children }: Props) => {
  return <_TextEg fontSize={fontSize}>{children}</_TextEg>
}

const _TextEg = styled.p<{ fontSize: string }>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: ${(props) => props.fontSize};
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 0.96px;
  line-height: 1.625;
`
