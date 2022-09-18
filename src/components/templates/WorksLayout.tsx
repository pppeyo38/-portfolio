import styled from '@emotion/styled'
import Link from 'next/link'
import { Heading } from '@/components/atoms/Heading'

export const WorksLayout = () => {
  return (
    <_Page>
      <Heading>Works</Heading>
      <Link href="/works/16memo">16memo</Link>
      <Link href="/works/geikousai2022-pre">芸工祭2022プレサイト</Link>
      <Link href="/works/arest">A Rest</Link>
    </_Page>
  )
}

const _Page = styled.div`
  padding-top: 130px;
`
