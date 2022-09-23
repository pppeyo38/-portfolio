import styled from '@emotion/styled'
import Link from 'next/link'

import { TextEg } from '@/components/atoms/text/TextEg'

type Props = {
  path: string
}

export const ViewMore = ({ path }: Props) => {
  return (
    <Link href={path}>
      <_A>
        <TextEg fontSize="20px">VIEW MORE</TextEg>
        <_Border />
      </_A>
    </Link>
  )
}

const _A = styled.a`
  display: block;
  width: 150px;
  cursor: pointer;
  text-align: center;
`

const _Border = styled.span`
  display: block;
  width: 0px;
  height: 0.7px;
  background: ${({ theme }) => theme.colors.gray};
  transition: all 0.4s;

  ${_A}:hover & {
    width: 100%;
  }
`
