import styled from '@emotion/styled'
import { HeaderLogo } from '@/components/molecules/HeaderLogo'

export const Header = () => {
  return (
    <_Header>
      <_Inner>
        <HeaderLogo />
      </_Inner>
    </_Header>
  )
}

const _Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4.5rem;
  border: 1px solid ${({ theme }) => theme.colors.subWhite};
  background-color: ${({ theme }) => theme.colors.white};
`

const _Inner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  padding: 0 1.5rem;
`
