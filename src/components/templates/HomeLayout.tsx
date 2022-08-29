import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { HeroArea } from '@/components/organisms/top/HeroArea'
import { Work } from '@/components/organisms/top/Work'
import { AboutMe } from '../organisms/top/AboutMe'

export const HomeLayout = () => {
  const height = use100vh()
  const styleHeight = height ? `${height}px` : '100vh'

  return (
    <_FixedBg height={styleHeight} color={'#FAFAFC'}>
      <_ScrollContent height={styleHeight}>
        <HeroArea />
        <Work />
        <AboutMe />
      </_ScrollContent>
    </_FixedBg>
  )
}

const _FixedBg = styled.div<{ height: string; color: string }>`
  position: relative;
  height: ${(props) => props.height};
  background: ${(props) => props.color};
  background-attachment: fixed;
  background-size: cover;
`
const _ScrollContent = styled.div<{ height: string }>`
  position: absolute;
  width: 100vw;
  height: ${(props) => props.height};
  overflow-y: scroll;
`
