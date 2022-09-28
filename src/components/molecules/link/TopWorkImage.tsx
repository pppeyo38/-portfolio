import styled from '@emotion/styled'
import { StaticImageData } from 'next/image'

import { WorkImage } from '@/components/atoms/WorkImage'

type Props = {
  imgPath: StaticImageData
  imgAlt: string
}

export const TopWorkImage = ({ imgPath, imgAlt }: Props) => {
  return (
    <_Hover>
      <WorkImage imgPath={imgPath} imgAlt={imgAlt} />
    </_Hover>
  )
}

const _Hover = styled.div``
