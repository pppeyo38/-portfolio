import styled from '@emotion/styled'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'
import StickyBox from 'react-sticky-box'

import iromemoImg from '/public/work/16memo.jpg'
import geikousaiImg from '/public/work/geikosaiPre.jpg'
import arestImg from '/public/work/ARest.jpg'
import { WorksPagination } from '@/components/molecules/WorksPagination'
import useScroll from '@/hooks/useScroll'

type Props = {
  workRef: (node?: Element | null | undefined) => void
}

export const Work = ({ workRef }: Props) => {
  const height = use100vh()
  const scrollY = useScroll()
  console.log(scrollY)
  const [isIromemoView, setIsIromemoView] = useState(false)
  const [isGeikosaiView, setIsGeikosaiView] = useState(false)
  const [isARestView, setIsARestView] = useState(false)

  useEffect(() => {
    if (!height) return
    if (scrollY < height) {
      setIsIromemoView(true)
      setIsGeikosaiView(false)
      setIsARestView(false)
    } else if (height <= scrollY && scrollY < height * 2) {
      setIsIromemoView(true)
      setIsGeikosaiView(false)
      setIsARestView(false)
    } else if (height * 2 <= scrollY && scrollY < height * 3) {
      setIsIromemoView(false)
      setIsGeikosaiView(true)
      setIsARestView(false)
    } else if (height * 3 <= scrollY && scrollY < height * 4) {
      setIsIromemoView(false)
      setIsGeikosaiView(false)
      setIsARestView(true)
    } else if (height * 4 <= scrollY) {
      setIsIromemoView(false)
      setIsGeikosaiView(false)
      setIsARestView(true)
    }
  }, [scrollY])

  return (
    <>
      {height && (
        <_Section ref={workRef}>
          <StickyBox style={{ width: '20vw' }}>
            <WorksPagination height={height ? `${height}px` : '100vh'} />
          </StickyBox>
          <_ScrollArea height={height ? `${height * 4}px` : '100vh'}>
            <Link href={'/'}>
              <_WrapperIromemo
                height={height ? `${height}px` : '100vh'}
                isFix={height <= scrollY && scrollY < height * 2}
                isView={isIromemoView}
              >
                <_ImgInner>
                  <img src={iromemoImg.src} alt="16memo" />
                </_ImgInner>
              </_WrapperIromemo>
            </Link>
            <Link href={'/'}>
              <_WrapperGeiko
                height={height ? `${height}px` : '100vh'}
                isFix={height * 2 <= scrollY && scrollY < height * 3}
                isView={isGeikosaiView}
              >
                <_ImgInner>
                  <img src={geikousaiImg.src} alt="geikousai pre" />
                </_ImgInner>
              </_WrapperGeiko>
            </Link>
            <Link href={'/'}>
              <_WrapperARest
                height={height ? `${height}px` : '100vh'}
                isFix={height * 3 <= scrollY && scrollY < height * 4}
                isView={isARestView}
              >
                <_ImgInner>
                  <img src={arestImg.src} alt="A Rest" />
                </_ImgInner>
              </_WrapperARest>
            </Link>
            <_WorkSticky
              height={height ? `${height}px` : '100vh'}
              isView={height * 4 <= scrollY}
            >
              <_ImgInner>
                <img src={arestImg.src} alt="A Rest" />
              </_ImgInner>
            </_WorkSticky>
          </_ScrollArea>
        </_Section>
      )}
    </>
  )
}

const _Section = styled.section`
  display: flex;
  width: 100vw;
  align-items: flex-start;
`

const _ScrollArea = styled.div<{ height: string }>`
  position: relative;
  width: 60vw;
  height: ${(props) => props.height};
`

const _WrapperIromemo = styled.div<{
  height: string
  isFix: boolean
  isView: boolean
}>`
  ${(props) => props.isFix && `position: fixed; top: 0;`}
  display: flex;
  width: 60vw;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isView ? 1 : 0)};
`

const _WrapperGeiko = styled.div<{
  height: string
  isFix: boolean
  isView: boolean
}>`
  ${(props) => props.isFix && `position: fixed; top: 0;`}
  display: flex;
  width: 60vw;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isView ? 1 : 0)};
`

const _WrapperARest = styled.div<{
  height: string
  isFix: boolean
  isView: boolean
}>`
  ${(props) => props.isFix && `position: fixed; top: 0;`}
  display: flex;
  width: 60vw;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isView ? 1 : 0)};
`

const _WorkSticky = styled.div<{ height: string; isView: boolean }>`
  display: flex;
  width: 60vw;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isView ? 1 : 0)};
`

const _ImgInner = styled.figure`
  width: 80%;
  img {
    width: 100%;
    aspect-ratio: 1.618 / 1;
    object-fit: cover;
  }
`
