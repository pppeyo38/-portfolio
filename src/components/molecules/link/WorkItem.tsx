import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'

import { CategoryTag } from '@/components/atoms/text/CategoryTag'
import { HeadingJp } from '@/components/atoms/text/HeadingJp'
import { TextJp } from '@/components/atoms/text/TextJp'

import { worksListContent } from '@/types/workTypes'

export const WorkItem = (props: worksListContent) => {
  const { img, title, route, product, role } = props

  return (
    <Link href={`/works/${route}`}>
      <_A>
        <_ImgWrap>
          <_Image src={img} alt={title} layout="fill" />
        </_ImgWrap>
        <_TagWrap>
          <CategoryTag>{product}</CategoryTag>
        </_TagWrap>
        <HeadingJp fontSize="16px">{title}</HeadingJp>
        <TextJp fontSize="10px" isPale>
          {role}
        </TextJp>
      </_A>
    </Link>
  )
}

const _A = styled.a`
  &:hover {
    cursor: pointer;
  }
`

const _ImgWrap = styled.figure`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-bottom: 15px;
  aspect-ratio: 1.618 / 1;
`

const _Image = styled(Image)`
  transition: 0.8s;
  ${_A}:hover & {
    transform: scale(1.08);
  }
`

const _TagWrap = styled.div`
  margin-bottom: 6px;
`
