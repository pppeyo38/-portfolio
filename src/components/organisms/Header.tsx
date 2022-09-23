import { Modal, ModalContent, useDisclosure } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { HamburgerBtn } from '../atoms/buttons/HamburgerBtn'
import { HeaderTitle } from '@/components/molecules/link/HeaderTitle'
import { NavList } from '@/components/molecules/link/NavList'

type Props = {
  isTItle: boolean
}

export const Header = ({ isTItle }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const height = use100vh()

  const toogleIcon = () => {
    isOpen ? onClose() : onOpen()
  }

  return (
    <>
      <_Header>
        <_HeaderInner>
          <HeaderTitle isView={isTItle && !isOpen} fontSize="24px" />
          <HamburgerBtn isOpen={isOpen} toggleIcon={toogleIcon} />
        </_HeaderInner>
      </_Header>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalContent alignItems="center">
          <_ContentInner height={height ? `${height}px` : '100vh'}>
            <HeaderTitle isView fontSize="66px" />
            <NavList onClick={toogleIcon} />
          </_ContentInner>
        </ModalContent>
      </Modal>
    </>
  )
}

const _Header = styled.header`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
`

const _HeaderInner = styled.div`
  display: flex;
  max-width: 900px;
  align-items: center;
  justify-content: space-between;
  margin: 14px auto;
`

const _ContentInner = styled.div<{ height: string }>`
  display: grid;
  max-width: 680px;
  height: ${(props) => props.height};
  align-items: center;
  grid-template-columns: 1fr 1fr;
`
