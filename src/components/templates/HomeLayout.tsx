import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import { useInView } from 'react-intersection-observer'

import { AboutMe } from '@/components/organisms/top/AboutMe'
import { HeroArea } from '@/components/organisms/top/HeroArea'
import { Work } from '@/components/organisms/top/Work'
import { useState } from 'react'

export const HomeLayout = () => {
  const height = use100vh()
  const [rgb, setRgb] = useState({ red: 250, green: 250, blue: 252 })

  const buildThresholdList = () => {
    let thresholds = []
    let numSteps = 20

    for (let i = 1; i <= numSteps; i++) {
      let ratio = i / numSteps
      thresholds.push(ratio)
    }
    return thresholds
  }

  const [iromemoRef, inIromemoView, entry] = useInView({
    rootMargin: '0px',
    triggerOnce: false,
    threshold: buildThresholdList(),
    onChange: changeColor,
  })

  function changeColor() {
    if (!entry) return
    let ratio = Math.round(entry.intersectionRatio * 100) / 100
    setRgb((prev) => ({
      red: 250 - 43 * ratio,
      green: 250 - 21 * ratio,
      blue: 252 - 23 * ratio,
    }))
    console.log(inIromemoView)
  }

  return (
    <_FixedBg
      height={height ? `${height}px` : '100vh'}
      color={`rgb(${rgb['red']}, ${rgb['green']}, ${rgb['blue']})`}
    >
      <HeroArea />
      <Work iromemoRef={iromemoRef} />
      <AboutMe />
    </_FixedBg>
  )
}

const _FixedBg = styled.div<{ height: string; color: string }>`
  background: ${(props) => props.color};
`
