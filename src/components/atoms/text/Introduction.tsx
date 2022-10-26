import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  color?: string
  children: ReactNode
}

export const Introduction = ({ color, children }: Props) => {
  return <_H1 color={color}>{children}</_H1>
}

const _H1 = styled.h1<{ color?: string }>`
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 64px;
  font-weight: ${({ theme }) => theme.fontWt.ExtraBold};
  letter-spacing: 0.015em;

  @media screen and (max-width: 959px) {
    font-size: 54px;
  }

  @media screen and (max-width: 519px) {
    font-size: 48px;
  }
`
