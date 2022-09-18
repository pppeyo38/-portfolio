import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  imgPath: StaticImageData
  title: string
  route: string
}

export const WorkItem: FC<Props> = (props) => {
  const { imgPath, title, route } = props

  return (
    <Link href={`works/${route}`}>
      <>
        <_ImgInner>
          <img src={imgPath.src} alt={title} />
        </_ImgInner>
        <_WorkTitle>{title}</_WorkTitle>
      </>
    </Link>
  )
}

const _ImgInner = styled.figure`
  position: relative;
`
const _WorkTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 16px;
`
