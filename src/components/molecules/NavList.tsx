import styled from '@emotion/styled'
import Link from 'next/link'
import { useRouter } from 'next/router'

import GithubIcon from 'public/icons/github.svg'
import TwitterIcon from 'public/icons/twitter.svg'

export const NavList = () => {
  const router = useRouter()
  const navList = [
    { nav: 'Top', path: '/' },
    { nav: 'Works', path: '/works' },
    { nav: 'Profile', path: '/profile' },
  ]

  return (
    <_NavList>
      {navList.map((item, index) => (
        <_NavListItem isActive={router.pathname === item.path} key={index}>
          <Link href={`${item.path}`}>
            <_Item>{item.nav}</_Item>
          </Link>
        </_NavListItem>
      ))}
      <_A href="https://github.com/pppeyo38">
        <GithubIcon width={24} height={24} />
      </_A>
      <_A href="https://twitter.com/ume2_uguisu">
        <TwitterIcon width={24} height={24} />
      </_A>
    </_NavList>
  )
}

const _NavList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 18px;
  gap: 24px;
`

const _NavListItem = styled.li<{ isActive: boolean }>`
  position: relative;

  &:before {
    ${(props) =>
      props.isActive &&
      `
        content: '';
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        width: 16px;
        height: 4px;
        border-radius: 200px;
        background: linear-gradient(135deg, #ab79e8 0%, #555ee7 100%);
    `}
  }
`

const _Item = styled.a`
  margin: 0 4px;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWt.Medium};
`

const _A = styled.a`
  cursor: pointer;
`
