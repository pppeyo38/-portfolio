import styled from '@emotion/styled'

type Props = {
  fontSize: string
}

export const Title = ({ fontSize }: Props) => {
  return <_Title fontSize={fontSize}>Peyo Log!</_Title>
}

const _Title = styled.h1<{ fontSize: string }>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.BVP};
  font-size: ${(props) => props.fontSize};
  font-style: italic;
  font-weight: ${({ theme }) => theme.fontWt.Light};
  letter-spacing: 1.6px;
  line-height: 1.25;
  text-align: center;
`
