import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  fontSize: string
  isPale?: boolean
  children: ReactNode
}

export const TextJp = ({ fontSize, isPale, children }: Props) => {
  return (
    <_TextJp fontSize={fontSize} isPale={isPale}>
      {children}
    </_TextJp>
  )
}

const _TextJp = styled.p<{ fontSize: string; isPale: boolean | undefined }>`
  color: ${(props) =>
    props.isPale ? props.theme.colors.gray : props.theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: ${(props) => props.fontSize};
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  letter-spacing: 0.96px;
  line-height: 1.625;
`
