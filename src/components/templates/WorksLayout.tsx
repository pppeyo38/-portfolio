import styled from '@emotion/styled'
import { Heading } from '@/components/atoms/text/Heading'
import { WorkCard } from '@/components/molecules/WorkCard'

export const WorksLayout = () => {
  return (
    <_DisplayWrap>
      <Heading>Works</Heading>
      <WorkCard />
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div`
  display: flex;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  margin-top: 4.5rem;
`
