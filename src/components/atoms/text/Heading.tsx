import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  fontSize: string
  isSub?: boolean
  children: ReactNode
}

export const Heading = ({ fontSize, isSub, children }: Props) => {
  return (
    <_H1 fontSize={fontSize} isSub={isSub || false}>
      {children}
    </_H1>
  )
}

const _H1 = styled.h1<{ fontSize: string; isSub: boolean }>`
  color: ${(props) =>
    props.isSub ? props.theme.colors.gray : props.theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: ${(props) => props.fontSize};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
  text-align: center;
`
