import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'

import { TopWorkImage } from '@/components/molecules/link/TopWorkImage'
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

  const imgData = [
    { imgPath: iromemoImg, imgAlt: '16memo' },
    { imgPath: geikousaiImg, imgAlt: '芸工祭2022 プレサイト' },
    { imgPath: arestImg, imgAlt: 'A Rest' },
  ]

  const [dataIndex, setDataIndex] = useState(0)

  console.log(scrollY)

  useEffect(() => {
    if (!height) return
    if (scrollY < height || scrollY <= height * 2) {
      setDataIndex(0)
    } else if (height * 2 < scrollY && scrollY < height * 3) {
      setDataIndex(1)
    } else if (height * 3 < scrollY && scrollY < height * 4) {
      setDataIndex(2)
    }
  }, [scrollY])

  return (
    <>
      {height && (
        <_Section ref={workRef} height={`${height * 4}px`}>
          <_SectionInner isFixed={height <= scrollY && scrollY < height * 4}>
            <Heading fontSize="45px">Works</Heading>
            <_Content>
              <_PaginationWrap>
                <WorksPagination />
              </_PaginationWrap>
              <TopWorkImage
                imgPath={imgData[dataIndex].imgPath}
                imgAlt={imgData[dataIndex].imgAlt}
              />
            </_Content>
          </_SectionInner>
          <_StickyBottom isView={height * 4 <= scrollY} height={`${height}px`}>
            <Heading fontSize="45px">Works</Heading>
            <_Content>
              <_PaginationWrap>
                <WorksPagination />
              </_PaginationWrap>
              <TopWorkImage
                imgPath={imgData[2].imgPath}
                imgAlt={imgData[2].imgAlt}
              />
            </_Content>
          </_StickyBottom>
        </_Section>
      )}
    </>
  )
}

const _Section = styled.section<{ height: string }>`
  width: 100vw;
  height: ${(props) => props.height};
  position: relative;
`

const _SectionInner = styled.div<{ isFixed: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: 100vh;
  position: ${(props) => (props.isFixed ? 'fixed;' : 'absolute')};
  top: 0;
  left: 0;
`

const _Content = styled.div`
  position: relative;
`

const _PaginationWrap = styled.div`
  position: absolute;
  top: 50%;
  left: -10%;
  transform: translate(0, -50%);
`

const _StickyBottom = styled.div<{ isView: boolean; height: string }>`
  display: ${(props) => (props.isView ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  width: 100%;
  height: ${(props) => props.height};
  position: absolute;
  bottom: 0;
  left: 0;
`
