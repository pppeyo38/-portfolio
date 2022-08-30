import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'
import { use100vh } from 'react-div-100vh'

import useChangeColor from '@/hooks/useChangeColor'
import { AboutMe } from '@/components/organisms/top/AboutMe'
import { HeroArea } from '@/components/organisms/top/HeroArea'
import { Work } from '@/components/organisms/top/Work'

export const HomeLayout = () => {
  const height = use100vh()
  const elm = useRef<HTMLDivElement>(null)
  const [elmHeight, setElmHeight] = useState<number>(0)

  useEffect(() => {
    if (!elm.current) return
    setElmHeight(elm.current.getBoundingClientRect().height)
  }, [])

  const color = useChangeColor(elmHeight)

  return (
    <_FixedBg height={height ? `${height}px` : '100vh'} color={color} ref={elm}>
      <HeroArea />
      <Work />
      <AboutMe />
    </_FixedBg>
  )
}

const _FixedBg = styled.div<{ height: string; color: string }>`
  background: ${(props) => props.color};
`
