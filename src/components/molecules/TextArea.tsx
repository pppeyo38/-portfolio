import styled from '@emotion/styled'
import { ReactNode } from 'react'
import useMedia from 'use-media'
import { Heading } from '@/components/atoms/text/Heading'
import { Text } from '@/components/atoms/text/Text'
import { mediaQueries } from '@/themes/mediaQueries'

type Props = {
  heading: string
  children: ReactNode
}

export const TextArea = ({ heading, children }: Props) => {
  const isMobile = useMedia(mediaQueries.mobile)

  return (
    <_Wrapper>
      <Heading fontSize={isMobile ? '20px' : '24px'}>{heading}</Heading>
      <Text fontSize={isMobile ? '12px' : '16px'}>{children}</Text>
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
