import styled from '@emotion/styled'

type Props = {
  dataIndex: number
  progress1to2: number
  progress2to3: number
}

export const WorksPagination = ({
  dataIndex,
  progress1to2,
  progress2to3,
}: Props) => {
  return (
    <_Pagination>
      <_PageList>
        <_PageListItem1 isActive={dataIndex === 0}>01</_PageListItem1>
        <_VerticalLine1to2
          progress={progress1to2 > 100 ? '100%' : `${progress1to2}%`}
        />
        <_PageListItem2 isActive={dataIndex === 1}>02</_PageListItem2>
        <_VerticalLine2to3
          progress={progress2to3 > 100 ? '100%' : `${progress2to3}%`}
        />
        <_PageListItem3 isActive={dataIndex === 2}>03</_PageListItem3>
      </_PageList>
    </_Pagination>
  )
}

const _Pagination = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 auto;
`

const _PageList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const _PageListItems = styled.li`
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 18px;
  font-weight: ${({ theme }) => theme.fontWt.Thin};
  letter-spacing: 1.6px;
  line-height: 1.25;
`

const _PageListItem1 = styled(_PageListItems)<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.black : props.theme.colors.gray};
`

const _PageListItem2 = styled(_PageListItems)<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.black : props.theme.colors.gray};
`

const _PageListItem3 = styled(_PageListItems)<{ isActive: boolean }>`
  color: ${(props) =>
    props.isActive ? props.theme.colors.black : props.theme.colors.gray};
`

const _VerticalLine1to2 = styled.span<{ progress: string }>`
  position: relative;
  display: block;
  width: 0.7px;
  height: 72px;
  background-color: rgba(93, 92, 96, 40%);

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0.7px;
    height: ${(props) => props.progress};
    background-color: ${({ theme }) => theme.colors.gray};
  }
`

const _VerticalLine2to3 = styled.span<{ progress: string }>`
  position: relative;
  display: block;
  width: 0.7px;
  height: 72px;
  background-color: rgba(93, 92, 96, 40%);

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 0.7px;
    height: ${(props) => props.progress};
    background-color: ${({ theme }) => theme.colors.gray};
  }
`
