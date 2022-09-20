import { theme } from '@chakra-ui/react'
import styled from '@emotion/styled'
import Link from 'next/link'

type Props = {
  path: string
}

export const ViewMore = ({ path }: Props) => {
  return (
    <Link href={path}>
      <_A>
        VIEW MORE
        <_Border />
      </_A>
    </Link>
  )
}

const _A = styled.a`
  display: block;
  width: 150px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 20px;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 0.96px;
  text-align: center;
  cursor: pointer;
`

const _Border = styled.span`
  display: block;
  width: 0px;
  height: 0.7px;
  margin-top: 12px;
  transition: all 0.4s;
  background: ${({ theme }) => theme.colors.gray};

  ${_A}:hover & {
    width: 100%;
  }
`
