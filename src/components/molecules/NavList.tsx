import styled from '@emotion/styled'
import Link from 'next/link'

import GithubIcon from 'public/icons/github.svg'
import TwitterIcon from 'public/icons/twitter.svg'

export const NavList = () => {
  const navList = [
    { nav: 'Top', path: '' },
    { nav: 'Works', path: 'works' },
    { nav: 'Profile', path: 'profile' },
  ]

  return (
    <_NavList>
      {navList.map((item, index) => (
        <li key={index}>
          <Link href={`/${item.path}`}>
            <_Item>{item.nav}</_Item>
          </Link>
        </li>
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
