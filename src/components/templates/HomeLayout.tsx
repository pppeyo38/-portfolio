import styled from '@emotion/styled'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { AboutMe } from '@/components/organisms/top/AboutMe'
import { HeroArea } from '@/components/organisms/top/HeroArea'
import { Work } from '@/components/organisms/top/Work'

export const HomeLayout = () => {
  const [opacity, setOpacity] = useState<number>(0)

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
    if (!entry) return
    const ratio = Math.round(entry.intersectionRatio * 100) / 100
    setOpacity(ratio)
  }

  return (
    <_FixedBg opacity={opacity}>
      <HeroArea />
      <Work workRef={workRef} />
      <AboutMe />
    </_FixedBg>
  )
}

const _FixedBg = styled.div<{ opacity: number }>`
  background: linear-gradient(
    rgba(250, 250, 252, ${(props) => props.opacity}) 0%,
    rgba(202, 237, 237, ${(props) => props.opacity}) 38%,
    rgba(212, 237, 206, ${(props) => props.opacity}) 62%,
    rgba(250, 250, 252, ${(props) => props.opacity}) 100%
  );
`
