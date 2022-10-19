import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import { use100vh } from 'react-div-100vh'

import { Heading } from '@/components/atoms/text/Heading'
import { WorksPagination } from '@/components/molecules/WorksPagination'
import { TopWorkImage } from '@/components/molecules/link/TopWorkImage'

import imgData from '@/data/top/topWorkImg.json'

type Props = {
  workRef: (node?: Element | null | undefined) => void
  scrollY: number
}

export const Work = ({ workRef, scrollY }: Props) => {
  const height = use100vh()
  const [dataIndex, setDataIndex] = useState(0)
  const [progress1to2, setProgress1to2] = useState<number>(0)
  const [progress2to3, setProgress2to3] = useState<number>(0)

  useEffect(() => {
    if (!height) return
    if (scrollY < height) {
      setDataIndex(0)
      setProgress1to2(0)
      setProgress2to3(0)
    } else if (height <= scrollY && scrollY < height * 2) {
      setDataIndex(0)
      setProgress1to2(Math.round(((scrollY - height) / height) * 100))
      setProgress2to3(0)
    } else if (height * 2 <= scrollY && scrollY < height * 3) {
      setDataIndex(1)
      setProgress1to2(100)
      setProgress2to3(Math.round(((scrollY - height * 2) / height) * 100))
    } else if (height * 3 <= scrollY) {
      setDataIndex(2)
      setProgress1to2(100)
      setProgress2to3(100)
    }
  }, [scrollY, height])

  return (
    <>
      {height && (
        <_Section ref={workRef} height={`${height * 4}px`}>
          <_SectionInner
            isFixed={height <= scrollY && scrollY < height * 4}
            height={`${height}px`}
          >
            <Heading>Works</Heading>
            <_Content>
              <_PaginationWrap>
                <WorksPagination
                  dataIndex={dataIndex}
                  progress1to2={progress1to2}
                  progress2to3={progress2to3}
                />
              </_PaginationWrap>
              <TopWorkImage
                imgPath={imgData[dataIndex].imgPath}
                imgAlt={imgData[dataIndex].imgAlt}
                route={imgData[dataIndex].route}
              />
            </_Content>
          </_SectionInner>
          <_StickyBottom isView={height * 4 <= scrollY} height={`${height}px`}>
            <Heading>Works</Heading>
            <_Content>
              <_PaginationWrap>
                <WorksPagination
                  dataIndex={dataIndex}
                  progress1to2={progress1to2}
                  progress2to3={progress2to3}
                />
              </_PaginationWrap>
              <TopWorkImage
                imgPath={imgData[2].imgPath}
                imgAlt={imgData[2].imgAlt}
                route={imgData[2].route}
              />
            </_Content>
          </_StickyBottom>
        </_Section>
      )}
    </>
  )
}

const _Section = styled.section<{ height: string }>`
  position: relative;
  width: 100vw;
  height: ${(props) => props.height};
`

const _SectionInner = styled.div<{ isFixed: boolean; height: string }>`
  position: ${(props) => (props.isFixed ? 'fixed;' : 'absolute')};
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: ${(props) => props.height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
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
  position: absolute;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.isView ? 'flex' : 'none')};
  width: 100%;
  height: ${(props) => props.height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
`
