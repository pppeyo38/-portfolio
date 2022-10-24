import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Style = {
  fontSize: string
  color?: string
}

type Props = {
  children: ReactNode
}

export const Title = ({ fontSize, color, children }: Style & Props) => {
  return (
    <_H1 fontSize={fontSize} color={color}>
      {children}
    </_H1>
  )
}

const _H1 = styled.h1<Style>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: ${(props) => props.fontSize};
  font-weight: ${({ theme }) => theme.fontWt.ExtraBold};
  letter-spacing: 0.015em;
`
