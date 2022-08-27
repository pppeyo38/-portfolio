import styled from '@emotion/styled'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  imgPath: StaticImageData
  title: string
}

export const WorkImg = ({ imgPath, title }: Props) => {
  return (
    <Link href={'/'}>
      <_ImgWrap>
        <Image src={imgPath} alt={title} layout="fill" objectFit="cover" />
      </_ImgWrap>
    </Link>
  )
}

const _ImgWrap = styled.figure`
  width: 53%;
  position: relative;
  aspect-ratio: 1.618 / 1;
`
