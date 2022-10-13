import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { GithubIcon } from '@/components/atoms/icons/GithubIcon'
import { TwitterIcon } from '@/components/atoms/icons/TwitterIcon'

export const NavList = () => {
  const router = useRouter()

  return (
    <_NavList>
      <ul>
        <_NavItem>
          <Link href="/">
            <_A isNowPos={router.route === '/'}>Top</_A>
          </Link>
        </_NavItem>
        <_NavItem>
          <Link href="/works">
            <_A isNowPos={router.route === '/works'}>Works</_A>
          </Link>
        </_NavItem>
        <_NavItem>
          <Link href="/profile">
            <_A isNowPos={router.route === '/profile'}>Profile</_A>
          </Link>
        </_NavItem>
        <_SnsItem>
          <TwitterIcon />
          <GithubIcon />
        </_SnsItem>
      </ul>
    </_NavList>
  )
}

const _NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const _NavItem = styled.li`
  margin-bottom: 20px;
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 38px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
`

const _A = styled.a<{ isNowPos: boolean }>`
  color: ${(props) =>
    props.isNowPos ? props.theme.colors.black : props.theme.colors.lightGray};
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

const _SnsItem = styled.li`
  display: flex;
  gap: 20px;
`
