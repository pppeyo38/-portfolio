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
  width: 100px;
  height: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.fillColor};
  border-radius: 50%;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 10%),
    0px 10px 10px -5px rgba(0, 0, 0, 4%);
  color: ${(props) => props.strokeColor};
  cursor: pointer;
  font-size: 18px;

  @media screen and (max-width: 519px) {
    width: 60px;
    height: 60px;
    font-size: 12px;
  }
`
