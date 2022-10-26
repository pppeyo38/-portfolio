import styled from '@emotion/styled'
import Link from 'next/link'
import LogoIcon from 'public/icons/LogoIcon.svg'

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <_A>
        <LogoIcon width={32} height={32} />
        <_Title>PEYO LOG</_Title>
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

const _Title = styled.h1`
  color: ${(props) => (props.color ? props.color : props.theme.colors.black)};
  font-family: ${({ theme }) => theme.fonts.Inter};
  font-size: 22px;
  font-weight: ${({ theme }) => theme.fontWt.ExtraBold};
  letter-spacing: 0.015em;
`
