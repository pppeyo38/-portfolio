import styled from '@emotion/styled'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'
import StickyBox from 'react-sticky-box'

import iromemoImg from '/public/work/16memo.jpg'
import geikousaiImg from '/public/work/geikosaiPre.jpg'
import arestImg from '/public/work/ARest.jpg'
import { Heading } from '@/components/atoms/text/Heading'
import { WorksPagination } from '@/components/molecules/WorksPagination'

type Props = {
  workRef: (node?: Element | null | undefined) => void
  scrollY: number
}

export const Work = ({ workRef, scrollY }: Props) => {
  const height = use100vh()
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
        // <_Section ref={workRef}>
        //   <_ScrollArea height={height ? `${height * 4}px` : '100vh'}>
        //     <_WrapperIromemo
        //       height={height ? `${height}px` : '100vh'}
        //       isFix={height <= scrollY && scrollY < height * 2}
        //       isView={isIromemoView}
        //     >
        //       <Heading fontSize="45px">Works</Heading>
        //       <_ImgInner>
        //         <img src={iromemoImg.src} alt="16memo" />
        //       </_ImgInner>
        //     </_WrapperIromemo>
        //     <_WrapperGeiko
        //       height={height ? `${height}px` : '100vh'}
        //       isFix={height * 2 <= scrollY && scrollY < height * 3}
        //       isView={isGeikosaiView}
        //     >
        //       <Heading fontSize="45px">Works</Heading>
        //       <_ImgInner>
        //         <img src={geikousaiImg.src} alt="geikousai pre" />
        //       </_ImgInner>
        //     </_WrapperGeiko>
        //     <_WrapperARest
        //       height={height ? `${height}px` : '100vh'}
        //       isFix={height * 3 <= scrollY && scrollY < height * 4}
        //       isView={isARestView}
        //     >
        //       <Heading fontSize="45px">Works</Heading>
        //       <_ImgInner>
        //         <img src={arestImg.src} alt="A Rest" />
        //       </_ImgInner>
        //     </_WrapperARest>
        //     <_WorkSticky
        //       height={height ? `${height}px` : '100vh'}
        //       isView={height * 4 <= scrollY}
        //     >
        //       <_ImgInner>
        //         <img src={arestImg.src} alt="A Rest" />
        //       </_ImgInner>
        //     </_WorkSticky>
        //   </_ScrollArea>
        // </_Section>
        <_Section ref={workRef}>
          <_ScrollArea height={height ? `${height * 4}px` : '100vh'}>
            <_StickyHeading isFix={height <= scrollY && scrollY <= height * 4}>
              <Heading fontSize="45px">Works</Heading>
            </_StickyHeading>
            <_WrapperIromemo
              height={height ? `${height}px` : '100vh'}
              isFix={height <= scrollY && scrollY < height * 2}
              isView={isIromemoView}
            >
              <_ImgInner>
                <img src={iromemoImg.src} alt="16memo" />
              </_ImgInner>
            </_WrapperIromemo>
            <_WrapperGeiko
              height={height ? `${height}px` : '100vh'}
              isFix={height * 2 <= scrollY && scrollY < height * 3}
              isView={isGeikosaiView}
            >
              <_ImgInner>
                <img src={geikousaiImg.src} alt="geikousai pre" />
              </_ImgInner>
            </_WrapperGeiko>
            <_WrapperARest
              height={height ? `${height}px` : '100vh'}
              isFix={height * 3 <= scrollY && scrollY < height * 4}
              isView={isARestView}
            >
              <_ImgInner>
                <img src={arestImg.src} alt="A Rest" />
              </_ImgInner>
            </_WrapperARest>
            <_WorkSticky
              height={height ? `${height}px` : '100vh'}
              isView={height * 4 <= scrollY}
            >
              <_StickyHeading isFix={false}>
                <Heading fontSize="45px">Works</Heading>
              </_StickyHeading>
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
  width: 100vw;
`

const _ScrollArea = styled.div<{ height: string }>`
  position: relative;
  height: ${(props) => props.height};
`

const _StickyHeading = styled.div<{ isFix: boolean }>`
  position: ${(props) => (props.isFix ? 'fixed' : 'absolute')};
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
`

const _WrapperIromemo = styled.div<{
  height: string
  isFix: boolean
  isView: boolean
}>`
  ${(props) => props.isFix && `position: fixed; top: 0;`}
  display: flex;
  width: 100%;
  height: ${(props) => props.height};
  flex-direction: column;
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
  width: 100%;
  height: ${(props) => props.height};
  flex-direction: column;
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
  width: 100%;
  height: ${(props) => props.height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isView ? 1 : 0)};
`

const _WorkSticky = styled.div<{ height: string; isView: boolean }>`
  position: relative;
  display: flex;
  height: ${(props) => props.height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isView ? 1 : 0)};
`

const _ImgInner = styled.figure`
  max-width: 800px;
`
