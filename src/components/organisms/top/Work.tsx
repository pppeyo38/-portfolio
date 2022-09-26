import styled from '@emotion/styled'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'

import { WorkImage } from '@/components/atoms/WorkImage'
import { Heading } from '@/components/atoms/text/Heading'
import { WorksPagination } from '@/components/molecules/WorksPagination'

import iromemoImg from '/public/work/16memo.jpg'
import geikousaiImg from '/public/work/geikosaiPre.jpg'
import arestImg from '/public/work/ARest.jpg'

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
        <_Section ref={workRef}>
          <_ScrollArea height={height ? `${height * 4}px` : '100vh'}>
            <_StickyHeading isFix={height <= scrollY && scrollY <= height * 4}>
              <Heading fontSize="45px">Works</Heading>
            </_StickyHeading>
            <_StickyPagination
              isFix={height <= scrollY && scrollY <= height * 4}
              top={height <= scrollY && scrollY <= height * 4 ? '50%' : '12.5%'}
            >
              <WorksPagination />
            </_StickyPagination>
            <_WrapperIromemo
              height={height ? `${height}px` : '100vh'}
              isFix={height <= scrollY && scrollY < height * 2}
              isView={isIromemoView}
            >
              <WorkImage imgPath={iromemoImg} imgAlt="16memo" />
            </_WrapperIromemo>
            <_WrapperGeiko
              height={height ? `${height}px` : '100vh'}
              isFix={height * 2 <= scrollY && scrollY < height * 3}
              isView={isGeikosaiView}
            >
              <WorkImage imgPath={geikousaiImg} imgAlt="geikousai pre" />
            </_WrapperGeiko>
            <_WrapperARest
              height={height ? `${height}px` : '100vh'}
              isFix={height * 3 <= scrollY && scrollY < height * 4}
              isView={isARestView}
            >
              <WorkImage imgPath={arestImg} imgAlt="A Rest" />
            </_WrapperARest>
            <_WorkSticky
              height={height ? `${height}px` : '100vh'}
              isView={height * 4 <= scrollY}
            >
              <_StickyHeading isFix={false}>
                <Heading fontSize="45px">Works</Heading>
              </_StickyHeading>
              <_StickyPagination isFix={false}>
                <WorksPagination />
              </_StickyPagination>
              <WorkImage imgPath={arestImg} imgAlt="A Rest" />
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

const _StickyPagination = styled.div<{ isFix: boolean; top?: string }>`
  position: ${(props) => (props.isFix ? 'fixed' : 'absolute')};
  top: ${(props) => (props.top ? props.top : '50%')};
  left: 7%;
  transform: translate(0, -50%);
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
