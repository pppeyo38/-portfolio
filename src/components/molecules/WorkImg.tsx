import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

type Props = {
  imgPath: StaticImageData
  title: string
}

export const WorkImg = ({ imgPath, title }: Props) => {
  const height = use100vh()

  return (
    <Link href={'/'}>
      <_Wrapper height={height ? `${height}px` : '100vh'}>
        <_ImgInner>
          <Image src={imgPath} alt={title} layout="fill" objectFit="cover" />
        </_ImgInner>
      </_Wrapper>
    </Link>
  )
}

const _Wrapper = styled.div<{ height: string }>`
  width: 100vw;
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`

const _ImgInner = styled.figure`
  position: relative;
  width: 53%;
  aspect-ratio: 1.618 / 1;
`
