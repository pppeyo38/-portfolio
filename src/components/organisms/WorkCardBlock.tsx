import styled from '@emotion/styled'
import { WorkCard } from '@/components/molecules/WorkCard'
import { WorksListProps } from '@/types/workTypes'

export const WorkCardBlock = ({ worksList }: WorksListProps) => {
  console.log(worksList)
  return (
    <_Wrapper>
      {worksList.map((item, index) => (
        <WorkCard key={index} {...item} />
      ))}
    </_Wrapper>
  )
}

const _Wrapper = styled.section`
  display: flex;
  width: 100%;
  max-width: 1100px;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 15px;
  margin: 0 auto;
`
