import styled from '@emotion/styled'

type Props = {
  isOpen: boolean
  toggleIcon: () => void
}

export const HeaderIcon = ({ isOpen, toggleIcon }: Props) => {
  return (
    <_HeaderIcon isOpen={isOpen} onClick={toggleIcon}>
      <span />
      <span />
      <span />
    </_HeaderIcon>
  )
}

const _HeaderIcon = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 42px;
  height: 42px;

  span {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 42px;
    height: 0.7px;
    margin: auto;
    background: ${({ theme }) => theme.colors.black};
    transition: all 0.4s;

    &:nth-of-type(1) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(45deg)' : 'translateY(-7px)'};
    }
    &:nth-of-type(2) {
      display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};
    }
    &:nth-of-type(3) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(-45deg)' : 'translateY(7px)'};
    }
  }
`
