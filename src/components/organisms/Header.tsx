import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useMedia from 'use-media'
import { HamburgerBtn } from '@/components/atoms/button/HamburgerBtn'
import { HeaderLogo } from '@/components/molecules/HeaderLogo'
import { Modal } from '@/components/molecules/Modal'
import { NavList } from '@/components/molecules/NavList'

const mediaQueries = {
  mobile: '(max-width: 519px)',
  tablet: '(min-width: 520px) and (max-width: 959px)',
  pc: '(min-width: 960px)',
}

export const Header = () => {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)
  const isPc = useMedia(mediaQueries.pc)

  useEffect(() => {
    setOpen(false)
  }, [router.pathname])

  return (
    <_Header isOpen={isOpen}>
      <_Inner>
        <HeaderLogo />
        {isPc ? (
          <NavList pathname={router.pathname} />
        ) : (
          <HamburgerBtn isOpen={isOpen} setOpen={setOpen} />
        )}
      </_Inner>
    </_Header>
  )
}

const _Header = styled.header<{ isOpen: boolean }>`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  padding: 1px;
  border-bottom: ${(props) =>
    !props.isOpen && `1px solid ${props.theme.colors.subWhite}`};
  background-color: ${({ theme }) => theme.colors.white};
`

const _Inner = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
`
