import styled from '@emotion/styled'

import { WorkItem } from '@/components/molecules/link/WorkItem'

import { worksListProps } from '@/types/workTypes'

export const WorksBlock = ({ worksList }: worksListProps) => {
  return (
    <_Works>
      {worksList.map((item, index) => (
        <_ItemWrapper key={index}>
          <WorkItem {...item} />
        </_ItemWrapper>
      ))}
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
