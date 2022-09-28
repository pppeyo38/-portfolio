import styled from '@emotion/styled'
import Link from 'next/link'

import { WorkImage } from '@/components/atoms/WorkImage'

type Props = {
  imgPath: string
  imgAlt: string
  route: string
}

export const TopWorkImage = ({ imgPath, imgAlt, route }: Props) => {
  return (
    <div>
      <WorkImage imgPath={imgPath} imgAlt={imgAlt} />
    </div>
  )
}
