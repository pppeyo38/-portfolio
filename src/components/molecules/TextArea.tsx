import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { Heading } from '@/components/atoms/text/Heading'
import { Text } from '@/components/atoms/text/Text'

type Props = {
  heading: string
  children: ReactNode
}

export const TextArea = ({ heading, children }: Props) => {
  return (
    <_Wrapper>
      <Heading>{heading}</Heading>
      <Text>{children}</Text>
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 959px) {
    gap: 8px;
  }
`
