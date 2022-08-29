import styled from '@emotion/styled'
import { Heading } from '@/components/atoms/Heading'

export const WorksPagination = () => {
  return (
    <_Pagination>
      <Heading>Works</Heading>
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

const _Pagination = styled.div`
  position: absolute;
  top: 50%;
  left: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translate(0, -50%);
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
