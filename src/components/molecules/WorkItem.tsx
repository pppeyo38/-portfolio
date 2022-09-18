import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

type Props = {
  imgPath: StaticImageData
  title: string
  route: string
  product?: string
  role?: string
}

export const WorkItem: FC<Props> = (props) => {
  const { imgPath, title, route, product, role } = props

  return (
    <Link href={`/works/${route}`}>
      <_A>
        <_ImgInner>
          <_Image src={imgPath.src} alt={title} />
        </_ImgInner>
        <_WorkProduct>{product}</_WorkProduct>
        <_WorkTitle>{title}</_WorkTitle>
        <_WorkRole>{role}</_WorkRole>
      </_A>
    </Link>
  )
}

const _A = styled.a`
  /* transform: scale(1.08); */
`

const _ImgInner = styled.figure`
  position: relative;
  margin-bottom: 15px;
  overflow: hidden;
`

const _Image = styled.img`
  transition: 0.8s;
  ${_A}:hover & {
    transform: scale(1.08);
  }
`

const _WorkProduct = styled.span`
  display: block;
  width: 120px;
  height: 16px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 10px;
  line-height: 1.4;
  margin-bottom: 7px;
  border: 0.7px solid ${({ theme }) => theme.colors.gray};
  text-align: center;
`

const _WorkTitle = styled.h3`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 16px;
  line-height: 1.6;
`

const _WorkRole = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.ZKGothic};
  font-size: 10px;
  line-height: 1.4;
`
