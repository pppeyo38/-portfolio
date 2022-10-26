import styled from '@emotion/styled'
import Image from 'next/image'
import { use100vh } from 'react-div-100vh'
import useMedia from 'use-media'
import { Button } from '@/components/atoms/button/Button'
import { Heading } from '@/components/atoms/text/Heading'
import { Text } from '@/components/atoms/text/Text'
import { Title } from '@/components/atoms/text/Title'
import { TextArea } from '@/components/molecules/TextArea'
import { mediaQueries } from '@/themes/mediaQueries'
import { WorkPageProps } from '@/types/workTypes'

export const WorkContentLayout = (props: WorkPageProps) => {
  const { image, bgColor, title, abstract, url, content } = props
  const height = use100vh()
  const isMobile = useMedia(mediaQueries.mobile)

  return (
    <_DisplayWrap height={height ? `${height}px` : '100vh'}>
      <_SectionLeft bgColor={bgColor}>
        <_SectionLeftHead>
          <Title fontSize={isMobile ? '32px' : '48px'} color="#FFF">
            {title}
          </Title>
          <Text fontSize={isMobile ? '12px' : '16px'} color="#FFF">
            {abstract}
          </Text>
        </_SectionLeftHead>
        <_MockUpBlock>
          {image.map((item, index) => (
            <_MockFigure key={index}>
              <Image src={item.path} alt={item.alt} layout="fill" />
            </_MockFigure>
          ))}
        </_MockUpBlock>
      </_SectionLeft>
      <_SectionRight>
        <TextArea heading="Period">{content.period}</TextArea>
        <TextArea heading="Concept">{content.concept}</TextArea>
        <TextArea heading="Technology">{content.technology}</TextArea>
        <_LinkArea>
          <Heading fontSize={isMobile ? '20px' : '24px'}>Repository</Heading>
          {content.repository.map((item, index) => (
            <_Link key={index} href={item}>
              {item}
            </_Link>
          ))}
        </_LinkArea>
      </_SectionRight>
      {url && (
        <_GoLiveBtn>
          <Button
            strokeColor="#FFF"
            fillColor={bgColor}
            onClick={() => location.assign(url)}
          >
            Go Live
          </Button>
        </_GoLiveBtn>
      )}
    </_DisplayWrap>
  )
}

const _DisplayWrap = styled.div<{ height: string }>`
  display: flex;
  width: 100vw;
  height: ${(props) => `calc(${props.height}) `};

  @media screen and (max-width: 959px) {
    flex-direction: column;
  }
`

const _SectionLeft = styled.section<{ bgColor: string }>`
  width: calc(50% - 8%);
  padding: 4%;
  margin-top: 4.5rem;
  background: ${(props) => props.bgColor};
  overflow-y: hidden;

  @media screen and (max-width: 959px) {
    width: calc(100% - 8%);
    height: 50%;
  }
`

const _SectionLeftHead = styled.div`
  * + * {
    margin-top: 4px;
  }
`

const _MockUpBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 32px;
  @media screen and (max-width: 1200px) {
    margin-top: 10px;
  }
`

const _MockFigure = styled.figure`
  position: relative;
  width: 230px;
  height: 466px;

  @media screen and (max-width: 1200px) {
    width: 180px;
    height: 364.7px;
  }
  @media screen and (max-width: 519px) {
    width: 115.68px;
    height: 234.38px;
  }
`

const _SectionRight = styled.section`
  display: flex;
  width: calc(50% - 8%);
  flex-direction: column;
  padding: 4%;
  margin-top: 4.5rem;
  gap: 42px;
  overflow-y: scroll;
  @media screen and (max-width: 959px) {
    width: calc(100% - 8%);
    height: 50%;
    margin-top: 0;
    gap: 24px;
  }
`

const _LinkArea = styled.div`
  h2 {
    margin-bottom: 16px;
  }
`

const _Link = styled.a`
  display: block;
  color: #4d79ff;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
  @media screen and (max-width: 959px) {
    font-size: 12px;
  }
`

const _GoLiveBtn = styled.div`
  position: fixed;
  right: 40px;
  bottom: 40px;
  transition: 0.8s;

  &:hover {
    transform: translateY(-10px);
  }

  @media screen and (max-width: 1519px) {
    right: 20px;
    bottom: 20px;
    font-size: 12px;
  }
`
