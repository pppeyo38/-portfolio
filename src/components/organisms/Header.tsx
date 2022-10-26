import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { HeaderLogo } from '@/components/molecules/HeaderLogo'
import { Modal } from '@/components/molecules/Modal'
import { NavList } from '@/components/molecules/NavList'
import useMediaQuery from '@/hooks/useMediaQuery'

export const Header = () => {
  const router = useRouter()
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [router.pathname])

  return (
    <_Header>
      <_Inner>
        <HeaderLogo />
        <NavList pathname={router.pathname} />
      </_Inner>
    </_Header>
  )
}

const _Header = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.5rem;
  padding: 1px;
  background-color: ${({ theme }) => theme.colors.white};
`

const _Inner = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;
`
