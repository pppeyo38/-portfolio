import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { WorkImg } from '@/components/molecules/WorkImg'
import iromemoImg from '/public/work/16memo.jpg'
import geikousaiImg from '/public/work/geikosaiPre.jpg'
import { WorksPagination } from '@/components/molecules/WorksPagination'

export const Work = () => {
  const height = use100vh()

  return (
    <_Section>
      <_FixedPagination height={height ? `${height}px` : '100vh'}>
        <WorksPagination />
      </_FixedPagination>
      <WorkImg imgPath={iromemoImg} title="16memo" />
      <WorkImg imgPath={geikousaiImg} title="geikousai pre" />
    </_Section>
  )
}

const _Section = styled.section`
  position: relative;
`

const _FixedPagination = styled.div<{ height: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(props) => props.height};
`
