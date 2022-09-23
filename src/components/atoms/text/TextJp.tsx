import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  fontSize: string
  children: ReactNode
}

export const TextJp = ({ fontSize, children }: Props) => {
  return <_TextJp fontSize={fontSize}>{children}</_TextJp>
}

const _TextJp = styled.p<{ fontSize: string }>`
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: ${(props) => props.fontSize};
  letter-spacing: 0.96px;
  line-height: 1.625;
`
