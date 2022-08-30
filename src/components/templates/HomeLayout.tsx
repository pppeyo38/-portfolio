import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { AboutMe } from '@/components/organisms/top/AboutMe'
import { HeroArea } from '@/components/organisms/top/HeroArea'
import { Work } from '@/components/organisms/top/Work'

export const HomeLayout = () => {
  const height = use100vh()

  return (
    <_FixedBg height={height ? `${height}px` : '100vh'} color={'#fff'}>
      <HeroArea />
      <Work />
      <AboutMe />
    </_FixedBg>
  )
}

const _FixedBg = styled.div<{ height: string; color: string }>`
  background: ${(props) => props.color};
`
