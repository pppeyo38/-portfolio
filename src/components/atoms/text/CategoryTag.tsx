import styled from '@emotion/styled'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const CategoryTag = ({ children }: Props) => {
  return <_CategoryTag>{children}</_CategoryTag>
}

const _CategoryTag = styled.span`
  display: block;
  width: 120px;
  height: 16px;
  border: 0.7px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 10px;
  letter-spacing: 0.96px;
  line-height: 1.4;
  text-align: center;
`
