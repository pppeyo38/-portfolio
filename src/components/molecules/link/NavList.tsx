import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { GithubIcon } from '@/components/atoms/icons/GithubIcon'
import { TwitterIcon } from '@/components/atoms/icons/TwitterIcon'

type Props = {
  onClick: () => void
}

export const NavList = ({ onClick }: Props) => {
  const router = useRouter()

  return (
    <_NavList>
      <ul onClick={onClick}>
        <_NavItem isNowPos={router.route === '/'}>
          <Link href="/">Top</Link>
        </_NavItem>
        <_NavItem isNowPos={router.route.includes('/works')}>
          <Link href="/works">Works</Link>
        </_NavItem>
        <_NavItem isNowPos={router.route === '/profile'}>
          <Link href="/profile">Profile</Link>
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

const _NavItem = styled.li<{ isNowPos: boolean }>`
  margin-bottom: 20px;
  color: ${(props) =>
    props.isNowPos ? props.theme.colors.black : props.theme.colors.lightGray};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 38px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
  transition: all 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.black};
  }
`

const _SnsItem = styled.li`
  display: flex;
  gap: 20px;
`
