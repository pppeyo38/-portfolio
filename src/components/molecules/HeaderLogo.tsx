import styled from '@emotion/styled'
import Link from 'next/link'
import { Title } from '@/components/atoms/text/Title'
import LogoIcon from 'public/icons/LogoIcon.svg'

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <_A>
        <LogoIcon width={32} height={32} />
        <Title fontSize="24px">PEYO LOG!</Title>
      </_A>
    </Link>
  )
}

const _A = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`
