import { useDisclosure, Fade } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { HeaderIcon } from '../atoms/HeaderIcon'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const toogleIcon = () => {
    isOpen ? onClose() : onOpen()
  }

  return (
    <>
      <_Header>
        <_HeaderInner>
          <HeaderIcon isOpen={isOpen} toggleIcon={toogleIcon} />
        </_HeaderInner>
      </_Header>
    </>
  )
}

const _Header = styled.header`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 70px;
  top: 0;
  left: 0;
`

const _HeaderInner = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 900px;
  margin: 14px auto;
`
