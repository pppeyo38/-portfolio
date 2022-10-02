import styled from '@emotion/styled'
import Link from 'next/link'

type Props = {
  imgPath: string
  imgAlt: string
  route: string
}

export const TopWorkImage = ({ imgPath, imgAlt, route }: Props) => {
  return (
    <Link href={`/works/${route}`}>
      <_A>
        <_ImgWrap>
          <_Image src={imgPath} alt={imgAlt} />
        </_ImgWrap>
      </_A>
    </Link>
  )
}

const _A = styled.a`
  &:hover {
    cursor: pointer;
  }
`

const _ImgWrap = styled.figure`
  position: relative;
  overflow: hidden;
  max-width: 800px;
`

const _Image = styled.img`
  transition: 0.8s;
  ${_A}:hover & {
    transform: scale(1.03);
  }
`
