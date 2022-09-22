import styled from '@emotion/styled'

type Props = {
  isPrev?: boolean
  onClick?: () => void
}

export const Arrow = ({ isPrev, onClick }: Props) => {
  return (
    <_Wrap isPrev={isPrev} onClick={onClick}>
      <svg
        width="49"
        height="7"
        viewBox="0 0 49 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line y1="6.65" x2="48" y2="6.65" stroke="#111012" strokeWidth="0.7" />
        <line
          x1="42.2475"
          y1="0.752513"
          x2="48.2475"
          y2="6.75251"
          stroke="#111012"
          strokeWidth="0.7"
        />
      </svg>
    </_Wrap>
  )
}

const _Wrap = styled.div<{ isPrev: boolean | undefined }>`
  display: grid;
  width: 50px;
  height: 50px;
  cursor: pointer;
  place-content: center;
  ${(props) => props.isPrev && `transform: rotate(180deg);`}
`
