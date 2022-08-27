import styled from '@emotion/styled'
import { use100vh } from 'react-div-100vh'

import { WorkImg } from '@/components/molecules/WorkImg'
import ImgPath from '/public/work/16memo.jpg'

export const Work = () => {
  const height = use100vh()

  return (
    <_Section height={height ? `${height}px` : '100vh'}>
      <WorkImg imgPath={ImgPath} title="16memo" />
    </_Section>
  )
}

const _Section = styled.section<{ height: string }>`
  display: flex;
  height: ${(props) => props.height};
  justify-content: center;
  align-items: center;
`
