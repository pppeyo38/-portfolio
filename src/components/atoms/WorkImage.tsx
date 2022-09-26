import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

type Props = {
  imgPath: StaticImageData
  imgAlt: string
}

export const WorkImage = ({ imgPath, imgAlt }: Props) => {
  return (
    <_ImgInner>
      <img src={imgPath.src} alt={imgAlt} />
    </_ImgInner>
  )
}

const _ImgInner = styled.figure`
  max-width: 800px;
`
