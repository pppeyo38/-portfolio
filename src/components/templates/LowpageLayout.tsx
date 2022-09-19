import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'
import { Heading } from '@/components/atoms/Heading'

type Props = {
  heading: string
  children: ReactNode
}

export const LowpageLayout: FC<Props> = ({ heading, children }) => {
  return (
    <_Page>
      <Heading>{heading}</Heading>
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
