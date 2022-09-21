import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'
import Slider, { Settings } from 'react-slick'

import { Arrow } from '@/components/atoms/icons/Arrow'

type Props = {
  images: {
    path: StaticImageData
    alt: string
  }[]
}

export const WorkImgSlick = ({ images }: Props) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow isPrev />,
  }

  return (
    <_Container>
      <Slider {...settings}>
        {images.map((img, index) => (
          <_ImgWrap key={index}>
            <_Img src={img.path.src} alt={img.alt} />
          </_ImgWrap>
        ))}
      </Slider>
    </_Container>
  )
}

const _Container = styled.div`
  width: 900px;

  .slick-slider {
    display: flex;
    justify-content: center;
    align-items: center;

    .slick-list {
      .slick-slide {
        display: grid;
        place-content: center;
      }
    }

    .slick-dots {
      bottom: -45px;
      button:before {
        color: ${({ theme }) => theme.colors.gray};
        .slick-active {
          color: ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`

const _ImgWrap = styled.div`
  max-width: 700px;
`

const _Img = styled.img`
  width: 100%;
`
