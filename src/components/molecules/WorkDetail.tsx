import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { Heading } from '@/components/atoms/text/Heading'
import { TextJp } from '@/components/atoms/text/TextJp'

type Props = {
  theme: string
  children: ReactNode
}

export const WorkDetail = ({ theme, children }: Props) => {
  return (
    <_WorkDetail>
      <_Heading>{theme}</_Heading>
      <TextJp fontSize="16px">{children}</TextJp>
    </_WorkDetail>
  )
}

const _WorkDetail = styled.div`
  padding: 24px 0;
  h1 {
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.gray};
    text-align: start;
  }
`

const _Heading = styled(Heading)`
  font: 32px;
`
