import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { use100vh } from 'react-div-100vh'

type Props = {
  isOpen: boolean
  children: ReactNode
}

export const Modal = ({ isOpen, children }: Props) => {
  const height = use100vh()
  return (
    <_Modal isOpen={isOpen} height={height ? `${height}px` : '100vh'}>
      {children}
    </_Modal>
  )
}

const FadeIn = keyframes`
  0% {
    z-index: -1;
    opacity: 0;
  }
  100% {
    z-index: 100;
    opacity: 1;
  }
`

const FadeOut = keyframes`
  0% {
    z-index: 100;
    opacity: 1;
  }
  100% {
    z-index: -1;
    opacity: 0;
  }
`

const _Modal = styled.div<{ isOpen: boolean; height: string }>`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  width: 100%;
  height: ${(props) => props.height};
  animation: 0.4s ${(props) => (props.isOpen ? FadeIn : FadeOut)} forwards;
  background-color: ${({ theme }) => theme.colors.white};
  place-content: center;
`
