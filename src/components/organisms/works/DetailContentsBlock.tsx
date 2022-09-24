import styled from '@emotion/styled'

import { WorkDetail } from '@/components/molecules/WorkDetail'
import { workDetailContent } from '@/types/workTypes'

type Props = {
  detail: workDetailContent[]
}

export const DetailContentsBlock = ({ detail }: Props) => {
  return (
    <_Wrapper>
      {detail.map((content, index) => (
        <WorkDetail key={index} theme={content.theme}>
          {content.text}
        </WorkDetail>
      ))}
    </_Wrapper>
  )
}

const _Wrapper = styled.div`
  margin: 24px 0;
`
