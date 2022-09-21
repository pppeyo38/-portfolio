import styled from '@emotion/styled'

import { WorkImgSlick } from '@/components/molecules/WorkImgSlick'
import iromemo from 'public/work/16memo.jpg'

export const WorkLayout = () => {
  const iromemoImgs = [
    { path: iromemo, alt: '16memo アイキャッチ' },
    { path: iromemo, alt: '16memo アイキャッチ' },
    { path: iromemo, alt: '16memo アイキャッチ' },
  ]

  return (
    <_Page>
      <WorkImgSlick images={iromemoImgs}></WorkImgSlick>
    </_Page>
  )
}

const _Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 130px;
`
