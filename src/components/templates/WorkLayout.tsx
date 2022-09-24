import styled from '@emotion/styled'

import { IntroductionBlock } from '../organisms/works/IntroductionBlock'
import { Heading } from '@/components/atoms/text/Heading'

import { workPageProps } from '@/types/workTypes'

export const WorkLayout = (props: workPageProps) => {
  const { workTitle, images, introduction } = props

  return (
    <_Page>
      <_WorkTitleWrap>
        <Heading fontSize="16px" isSub>
          Works
        </Heading>
        <_WorkTitle>{workTitle}</_WorkTitle>
      </_WorkTitleWrap>
      <_Container>
        <figure>
          <img src={images[0].path} alt={images[0].alt} />
        </figure>
        <IntroductionBlock {...introduction} />
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
  max-width: 880px;
  margin: 0 auto 50px;
`
