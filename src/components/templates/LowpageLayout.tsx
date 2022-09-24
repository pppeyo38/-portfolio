import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { Heading } from '@/components/atoms/text/Heading'

type Props = {
  heading: string
  children: ReactNode
}

export const LowpageLayout = ({ heading, children }: Props) => {
  return (
    <_Page>
      <Heading fontSize="45px">{heading}</Heading>
      {children}
    </_Page>
  )
}

const _Page = styled.div`
  padding-top: 130px;

  h1 {
    margin-bottom: 50px;
  }
`
