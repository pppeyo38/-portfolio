import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  color?: string
  fontSize?: string
  children: ReactNode
}

export const Text = ({ color, fontSize, children }: Props) => {
  return (
    <_P color={color} fontSize={fontSize}>
      {children}
    </_P>
  )
}

const _P = styled.p<{
  color: string | undefined
  fontSize: string | undefined
}>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  letter-spacing: 0.02em;
  line-height: 1.75;
`
