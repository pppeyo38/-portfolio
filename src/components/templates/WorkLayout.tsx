import styled from '@emotion/styled'

import { workPageProps } from '@/types/workPageProps'

export const WorkLayout = ({ images, workTitle }: workPageProps) => {
  return (
    <_Page>
      <_WorkTitleWrap>
        <_SubHeading>Works</_SubHeading>
        <_WorkTitle>{workTitle}</_WorkTitle>
      </_WorkTitleWrap>
      <_Container>
        {images.map((img, index) => (
          <_ImgWrap key={index}>
            <img src={img.path} alt={img.alt} />
          </_ImgWrap>
        ))}
      </_Container>
    </_Page>
  )
}

const _Page = styled.div`
  padding-top: 130px;
`

const _WorkTitleWrap = styled.div`
  width: fit-content;
  margin: 0 auto 50px;
  text-align: center;
`

const _SubHeading = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 16px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Light};
  letter-spacing: 1.6px;
  line-height: 1.25;
  text-align: center;
`

const _WorkTitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 38px;
  font-weight: ${({ theme }) => theme.fontWt.Regular};
  letter-spacing: 1.6px;
  line-height: 1.25;
  text-align: center;
`

const _Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  gap: 20px;
`

const _ImgWrap = styled.figure`
  max-width: 880px;
`
