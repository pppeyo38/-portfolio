import styled from '@emotion/styled'
import Link from 'next/link'

import { GithubIcon } from '@/components/atoms/icons/GithubIcon'
import { TwitterIcon } from '@/components/atoms/icons/TwitterIcon'

type Props = {
  onClick: () => void
}

export const NavList = ({ onClick }: Props) => {
  return (
    <_NavList>
      <ul onClick={onClick}>
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
