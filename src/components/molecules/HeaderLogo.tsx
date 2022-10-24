import styled from '@emotion/styled'
import { Title } from '@/components/atoms/text/Title'
import LogoIcon from 'public/icons/LogoIcon.svg'

export const HeaderLogo = () => {
  return (
    <_Wrap>
      <LogoIcon width={32} height={32} />
      <Title fontSize="24px">PEYO LOG!</Title>
    </_Wrap>
  )
}

const _Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
