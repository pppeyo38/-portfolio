import styled from '@emotion/styled'

import { WorkItem } from '@/components/molecules/WorkItem'

import iromemo from 'public/work/16memo.jpg'
import arest from 'public/work/ARest.jpg'
import geikousai from 'public/work/geikosaiPre.jpg'

export const WorksBlock = () => {
  return (
    <_Works>
      <_ItemWrapper>
        <WorkItem
          imgPath={iromemo}
          title="16memo"
          route="16memo"
          product="WEB APPLICATION"
          role="Backend/Frontend"
        />
      </_ItemWrapper>
      <_ItemWrapper>
        <WorkItem
          imgPath={geikousai}
          title="芸工祭2022プレサイト"
          route="geikousai2022-pre"
          product="WEB SITE"
          role="Frontend"
        />
      </_ItemWrapper>
      <_ItemWrapper>
        <WorkItem
          imgPath={arest}
          title="A Rest"
          route="arest"
          product="WEB APPLICATION"
          role="Frontend/Backend/Design"
        />
      </_ItemWrapper>
    </_Works>
  )
}

const _Works = styled.section`
  display: flex;
  width: 100%;
  max-width: 1100px;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 15px;
  margin: 0 auto;
`
const _ItemWrapper = styled.div`
  width: calc(33% - 40px);
`
