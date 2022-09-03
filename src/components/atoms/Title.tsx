import styled from '@emotion/styled'

export const Title = () => {
  return <_Title>Peyo Log!</_Title>
}

const _Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: 66px;
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Light};
  letter-spacing: 1.6px;
  line-height: 1.25;
  text-align: center;
`
