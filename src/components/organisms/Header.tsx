import { Modal, ModalContent, useDisclosure } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { use100vh } from 'react-div-100vh'

import { HeaderIcon } from '../atoms/HeaderIcon'
import { Title } from '../atoms/Title'
import { GithubIcon } from '../atoms/icons/GithubIcon'
import { TwitterIcon } from '../atoms/icons/TwitterIcon'

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const height = use100vh()

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

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalContent alignItems="center">
          <_ContentInner height={height ? `${height}px` : '100vh'}>
            <Title />
            <_ContentLists>
              <_NavList>
                <_NavItem>
                  <Link href="">Top</Link>
                </_NavItem>
                <_NavItem>
                  <Link href="">Works</Link>
                </_NavItem>
                <_NavItem>
                  <Link href="">Profile</Link>
                </_NavItem>
                <_SnsItem>
                  <TwitterIcon />
                  <GithubIcon />
                </_SnsItem>
              </_NavList>
            </_ContentLists>
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
  justify-content: flex-end;
  margin: 14px auto;
`

const _ContentInner = styled.div<{ height: string }>`
  max-width: 680px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: ${(props) => props.height};
`

const _ContentLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _NavList = styled.ul``

const _NavItem = styled.li`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 38px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
  margin-bottom: 20px;
`

const _SnsItem = styled.li`
  display: flex;
  gap: 20px;
`
