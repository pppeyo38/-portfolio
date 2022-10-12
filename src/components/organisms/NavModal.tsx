import { css, keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { HeaderTitle } from '@/components/molecules/link/HeaderTitle'
import { NavList } from '@/components/molecules/link/NavList'

type Props = {
  isOpen: boolean
}

export const NavModal = ({ isOpen }: Props) => {
  const height = use100vh()

  return (
    <_Modal isOpen={isOpen} height={height ? `${height}px` : '100vh'}>
      <_ModalInner>
        <HeaderTitle isView fontSize="66px" />
        <NavList />
      </_ModalInner>
    </_Modal>
  )
}

const ModalOpen = keyframes`
  0% {
    z-index: -1;
    opacity: 0;
  }

  100% {
    z-index: 100;
    opacity: 1;
  }
`

const ModalClose = keyframes`
  0% {
    z-index: 100;
    opacity: 1;
  }

  100% {
    z-index: -1;
    opacity: 0;
  }
`

const _Modal = styled.div<{ height: string; isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  display: grid;
  width: 100vw;
  height: ${(props) => props.height};
  animation: ${(props) =>
    props.isOpen
      ? css`.5s ${ModalOpen} forwards`
      : css`.5s ${ModalClose} forwards`};
  background-color: ${({ theme }) => theme.colors.white};
  place-content: center;
`

const _ModalInner = styled.div`
  display: grid;
  max-width: 680px;
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
