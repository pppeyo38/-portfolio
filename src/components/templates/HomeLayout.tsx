import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { HeroArea } from '@/components/organisms/top/HeroArea'
import { Work } from '@/components/organisms/top/Work'

export const HomeLayout = () => {
  const height = use100vh()
  const styleHeight = height ? `${height}px` : '100vh'

  return (
    <_FixedBg height={styleHeight}>
      <_ScrollContent height={styleHeight}>
        <HeroArea />
        <Work />
      </_ScrollContent>
    </_FixedBg>
  )
}

const _FixedBg = styled.div<{ height: string }>`
  position: relative;
  height: ${(props) => props.height};
  background: #e9e9f2;
  background-attachment: fixed;
  background-size: cover;
`
const _ScrollContent = styled.div<{ height: string }>`
  width: 100vw;
  height: ${(props) => props.height};
  position: absolute;
  overflow-y: scroll;
`
