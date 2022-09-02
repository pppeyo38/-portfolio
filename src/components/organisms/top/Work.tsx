import styled from '@emotion/styled'
import Image from 'next/image'
import Link from 'next/link'
import { use100vh } from 'react-div-100vh'
import StickyBox from 'react-sticky-box'

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
      <StickyBox style={{ width: '20%' }}>
        <WorksPagination height={height ? `${height}px` : '100vh'} />
      </StickyBox>
      <_ScrollArea height={height ? `${height * 2}px` : '100vh'}>
        <Link href={'/'}>
          <_Wrapper height={height ? `${height}px` : '100vh'}>
            <_ImgInner>
              <img src={iromemoImg.src} alt="16memo" />
            </_ImgInner>
          </_Wrapper>
        </Link>
        <Link href={'/'}>
          <_Wrapper height={height ? `${height}px` : '100vh'}>
            <_ImgInner>
              <img src={geikousaiImg.src} alt="geikousai pre" />
            </_ImgInner>
          </_Wrapper>
        </Link>
      </_ScrollArea>
    </_Section>
  )
}

const _Section = styled.section`
  display: flex;
  width: 100vw;
  align-items: flex-start;
`

const _ScrollArea = styled.div<{ height: string }>`
  width: 60%;
  height: ${(props) => props.height};
`

const _Wrapper = styled.div<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
`

const _ImgInner = styled.figure`
  width: 80%;
  img {
    aspect-ratio: 1.618 / 1;
    width: 100%;
    object-fit: cover;
  }
`
