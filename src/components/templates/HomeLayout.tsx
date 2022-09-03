import styled from '@emotion/styled'
import { useState } from 'react'
import { use100vh } from 'react-div-100vh'
import { useInView } from 'react-intersection-observer'

import { AboutMe } from '@/components/organisms/top/AboutMe'
import { HeroArea } from '@/components/organisms/top/HeroArea'
import { Work } from '@/components/organisms/top/Work'
import useScroll from '@/hooks/useScroll'

export const HomeLayout = () => {
  const [opacity, setOpacity] = useState<number>(0)
  const height = use100vh()
  const scrollY = useScroll()

  const buildThresholdList = () => {
    const thresholds = []
    const numSteps = 20

    for (let i = 1; i <= numSteps; i++) {
      const ratio = i / numSteps
      thresholds.push(ratio)
    }
    return thresholds
  }
  const [workRef, inWorkView, entry] = useInView({
    rootMargin: '0px',
    triggerOnce: false,
    threshold: buildThresholdList(),
    onChange: changeWorkBgColor,
  })
  function changeWorkBgColor() {
    if (!entry || !height) return
    const ratio = Math.round(entry.intersectionRatio * 100) / 100
    setOpacity(ratio)
  }

  return (
    <_FixedBg opacity={opacity * 2} isEdge={scrollY === 0}>
      <HeroArea />
      <Work workRef={workRef} scrollY={scrollY} />
      <AboutMe />
    </_FixedBg>
  )
}

const _FixedBg = styled.div<{ opacity: number; isEdge: boolean }>`
  background: linear-gradient(
    rgba(250, 250, 252, ${(props) => props.opacity}) 0%,
    rgba(0, 153, 151, ${(props) => props.opacity}) 25%,
    rgba(82, 153, 0, ${(props) => props.opacity}) 42%,
    rgba(0, 84, 153, ${(props) => props.opacity}) 58%,
    rgba(250, 250, 252, ${(props) => props.opacity}) 100%
  );
  ${(props) => props.isEdge && `background: #FAFAFC;`}
`
