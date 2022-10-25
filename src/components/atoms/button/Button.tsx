import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  strokeColor: string
  fillColor: string
  children: ReactNode
  onClick: () => void
}

export const Button = (props: Props) => {
  const { strokeColor, fillColor, children, onClick } = props
  return (
    <_Button onClick={onClick} strokeColor={strokeColor} fillColor={fillColor}>
      {children}
    </_Button>
  )
}

const _Button = styled.button<{ strokeColor: string; fillColor: string }>`
  display: inline-flex;
  height: 36px;
  align-items: center;
  padding: 0 36px;
  background-color: ${(props) => props.fillColor};
  border-radius: 200px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 10%),
    0px 10px 10px -5px rgba(0, 0, 0, 4%);
  color: ${(props) => props.strokeColor};
  cursor: pointer;
  line-height: 1.2;
`
