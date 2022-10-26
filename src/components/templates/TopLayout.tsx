import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import useMedia from 'use-media'

import { TopMobile } from '@/components/templates/responsive/top/TopMobile'
import { TopPc } from '@/components/templates/responsive/top/TopPc'
import { TopTablet } from '@/components/templates/responsive/top/TopTablet'
import { mediaQueries } from '@/themes/mediaQueries'

export const TopLayout = () => {
  const isPc = useMedia(mediaQueries.pc)
  const isTablet = useMedia(mediaQueries.tablet)
  const isMobile = useMedia(mediaQueries.mobile)

  const height = use100vh()
  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      {isPc && <TopPc />}
      {isTablet && <TopTablet />}
      {isMobile && <TopMobile />}
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div<{ height: string }>`
  display: flex;
  width: 100vw;
  height: ${(props) => `calc(${props.height}) `};
`
