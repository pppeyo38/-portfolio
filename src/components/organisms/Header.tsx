import { Modal, ModalContent, useDisclosure } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { use100vh } from 'react-div-100vh'

import { HeaderIcon } from '../atoms/HeaderIcon'
import { Title } from '../atoms/Title'
import { GithubIcon } from '../atoms/icons/GithubIcon'
import { TwitterIcon } from '../atoms/icons/TwitterIcon'

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
          <Link href="/">
            <_HeaderTitle isView={isTItle && !isOpen}>Peyo Log!</_HeaderTitle>
          </Link>
          <HeaderIcon isOpen={isOpen} toggleIcon={toogleIcon} />
        </_HeaderInner>
      </_Header>

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalContent alignItems="center">
          <_ContentInner height={height ? `${height}px` : '100vh'}>
            <Title />
            <_ContentLists>
              <ul onClick={toogleIcon}>
                <_NavItem>
                  <Link href="/">Top</Link>
                </_NavItem>
                <_NavItem>
                  <Link href="/works">Works</Link>
                </_NavItem>
                <_NavItem>
                  <Link href="/profile">Profile</Link>
                </_NavItem>
                <_SnsItem>
                  <TwitterIcon />
                  <GithubIcon />
                </_SnsItem>
              </ul>
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
  align-items: center;
  justify-content: space-between;
  margin: 14px auto;
`

const _HeaderTitle = styled.a<{ isView: boolean }>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 24px;
  font-style: italic;
  letter-spacing: 1.6px;
  line-height: 1.25;
  opacity: ${(props) => (props.isView ? `1` : `0`)};
  transition: all 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;
  }
`

const _ContentInner = styled.div<{ height: string }>`
  display: grid;
  max-width: 680px;
  height: ${(props) => props.height};
  align-items: center;
  grid-template-columns: 1fr 1fr;
`

const _ContentLists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _NavItem = styled.li`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 38px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
`

const _SnsItem = styled.li`
  display: flex;
  gap: 20px;
`
