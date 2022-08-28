import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { WorkImg } from '@/components/molecules/WorkImg'
import iromemoImg from '/public/work/16memo.jpg'
import geikousaiImg from '/public/work/geikosaiPre.jpg'
import { WorksPagination } from '@/components/molecules/WorksPagination'

export const Work = () => {
  const height = use100vh()

  return (
    <_Section height={height ? `${height}px` : '100vh'}>
      <WorksPagination />
      <_WorkScroll>
        <WorkImg imgPath={iromemoImg} title="16memo" />
        <WorkImg imgPath={geikousaiImg} title="geikousai pre" />
      </_WorkScroll>
    </_Section>
  )
}

const _Section = styled.section<{ height: string }>`
  position: relative;
  height: ${(props) => props.height};
`

const _WorkScroll = styled.div`
  overflow-x: scroll;
`
