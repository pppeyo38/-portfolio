import styled from '@emotion/styled'

type Props = {
  imgPath: string
  imgAlt: string
}

export const WorkImage = ({ imgPath, imgAlt }: Props) => {
  return (
    <_ImgInner>
      <img src={imgPath} alt={imgAlt} />
    </_ImgInner>
  )
}

const _ImgInner = styled.figure`
  max-width: 800px;
`
