import styled from '@emotion/styled'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC, forwardRef } from 'react'
import { use100vh } from 'react-div-100vh'

type Props = {
  imgPath: StaticImageData
  title: string
}

export const WorkImg = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { imgPath, title } = props
  const height = use100vh()

  return (
    <Link href={'/'}>
      <_Wrapper height={height ? `${height}px` : '100vh'} ref={ref}>
        <_ImgInner>
          <Image src={imgPath} alt={title} layout="fill" objectFit="cover" />
        </_ImgInner>
      </_Wrapper>
    </Link>
  )
})

const _Wrapper = styled.div<{ height: string }>`
  display: flex;
  width: 100vw;
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
`

const _ImgInner = styled.figure`
  position: relative;
  width: 53%;
  aspect-ratio: 1.618 / 1;
`
