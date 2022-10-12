import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import { NavModal } from './NavModal'
import { HamburgerBtn } from '@/components/atoms/buttons/HamburgerBtn'
import { HeaderTitle } from '@/components/molecules/link/HeaderTitle'

export const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isTItle, setIsTitle] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    if (router.route !== '/') {
      setIsTitle(true)
    } else {
      setIsTitle(false)
    }
    setIsOpen(false)
  }, [router.route])

  const toogleIcon = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <_Header>
        <_HeaderInner>
          <HeaderTitle isView={isTItle && !isOpen} fontSize="24px" />
          <HamburgerBtn isOpen={isOpen} toggleIcon={toogleIcon} />
        </_HeaderInner>
      </_Header>

      <NavModal isOpen={isOpen} />
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
  max-width: 80%;
  align-items: center;
  justify-content: space-between;
  margin: 14px auto;
`
