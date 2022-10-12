import styled from '@emotion/styled'
import Image from 'next/image'
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
          <_Image src={imgPath} alt={imgAlt} width={800} height={494} />
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
`

const _Image = styled(Image)`
  transition: 0.8s;
  ${_A}:hover & {
    transform: scale(1.03);
  }
`
