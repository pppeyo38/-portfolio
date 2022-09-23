import styled from '@emotion/styled'

import { Heading } from '@/components/atoms/text/Heading'

export const WorksPagination = ({ height }: { height: string }) => {
  return (
    <_Pagination height={height}>
      <Heading fontSize="45px">Works</Heading>
      <_PageList>
        <_PageListItems>01</_PageListItems>
        <_VerticalLine />
        <_PageListItems>02</_PageListItems>
        <_VerticalLine />
        <_PageListItems>03</_PageListItems>
      </_PageList>
    </_Pagination>
  )
}

const _Pagination = styled.div<{ height: string }>`
  display: flex;
  width: fit-content;
  height: ${(props) => props.height};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 auto;
`

const _PageList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  gap: 16px;
`

const _PageListItems = styled.li`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
`

const _VerticalLine = styled.span`
  display: block;
  width: 0.7px;
  height: 44px;
  background-color: rgba(93, 92, 96, 40%);
`
