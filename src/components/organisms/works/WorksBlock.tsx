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

  @media (max-width: 960px) {
    max-width: 800px;
  }

  @media (max-width: 520px) {
    max-width: 380px;
  }
`
const _ItemWrapper = styled.div`
  width: calc(33% - 40px);

  @media (max-width: 960px) {
    width: calc(50% - 40px);
  }

  @media (max-width: 520px) {
    width: calc(100% - 40px);
  }
`
