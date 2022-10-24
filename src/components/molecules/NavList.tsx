import styled from '@emotion/styled'
import Link from 'next/link'

export const NavList = () => {
  const navList = ['Top', 'Works', 'Profile']

  return (
    <_NavList>
      {navList.map((item, index) => (
        <li key={index}>
          <Link href={`/${item}`}>
            <_Item>{item}</_Item>
          </Link>
        </li>
      ))}
    </_NavList>
  )
}

const _NavList = styled.ul`
  display: flex;
  margin: 0 18px;
  gap: 36px;
`

const _Item = styled.a`
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWt.Medium};
`
