import styled from '@emotion/styled'
import Link from 'next/link'

import { Title } from '@/components/atoms/text/Title'

type Props = {
  isView: boolean
  fontSize: string
}

export const HeaderTitle = ({ isView, fontSize }: Props) => {
  return (
    <Link href="/">
      <_HeaderTitle isView={isView}>
        <Title fontSize={fontSize} />
      </_HeaderTitle>
    </Link>
  )
}

const _HeaderTitle = styled.a<{ isView: boolean }>`
  opacity: ${(props) => (props.isView ? `1` : `0`)};
  h1 {
    transition: all 0.4s;
  }

  &:hover {
    cursor: pointer;
    h1 {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`
