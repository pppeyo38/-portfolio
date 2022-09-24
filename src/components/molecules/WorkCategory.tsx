import styled from '@emotion/styled'
import { ReactNode } from 'react'

import { CategoryTag } from '../atoms/text/CategoryTag'
import { TextJp } from '../atoms/text/TextJp'

type Props = {
  tag: string
  children: ReactNode
}

export const WorkCategory = ({ tag, children }: Props) => {
  return (
    <_WorkCategory>
      <CategoryTag>{tag}</CategoryTag>
      <TextJp fontSize="14px">{children}</TextJp>
    </_WorkCategory>
  )
}

const _WorkCategory = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
`
