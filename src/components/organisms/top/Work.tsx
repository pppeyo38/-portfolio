import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { use100vh } from 'react-div-100vh'

import iromemoImg from '/public/work/16memo.jpg'
import geikousaiImg from '/public/work/geikosaiPre.jpg'
import { WorksPagination } from '@/components/molecules/WorksPagination'

type Props = {
  workRef: (node?: Element | null | undefined) => void
}

export const Work = ({ workRef }: Props) => {
  const height = use100vh()

  return (
    <_Section ref={workRef}>
      <_FixedPagination height={height ? `${height}px` : '100vh'}>
        <WorksPagination />
      </_FixedPagination>
      <Link href={'/'}>
        <_Wrapper height={height ? `${height}px` : '100vh'}>
          <_ImgInner>
            <Image
              src={iromemoImg}
              alt="16memo"
              layout="fill"
              objectFit="cover"
            />
          </_ImgInner>
        </_Wrapper>
      </Link>
      <Link href={'/'}>
        <_Wrapper height={height ? `${height}px` : '100vh'}>
          <_ImgInner>
            <Image
              src={geikousaiImg}
              alt="geikousai pre"
              layout="fill"
              objectFit="cover"
            />
          </_ImgInner>
        </_Wrapper>
      </Link>
    </_Section>
  )
}

const _Section = styled.section`
  position: relative;
`

const _FixedPagination = styled.div<{ height: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height};
`
const _Wrapper = styled.div<{ height: string }>`
  display: flex;
  width: 100vw;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
`

const _ImgInner = styled.figure`
  position: relative;
  width: 53%;
  aspect-ratio: 1.618 / 1;
`
