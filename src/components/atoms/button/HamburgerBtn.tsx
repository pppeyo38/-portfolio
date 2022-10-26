import { Squash as Hamburger } from 'hamburger-react'
import { Dispatch, SetStateAction } from 'react'

type Props = {
  isOpen: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export const HamburgerBtn = ({ isOpen, setOpen }: Props) => {
  return (
    <Hamburger toggled={isOpen} toggle={setOpen} size={24} color="#414A53" />
  )
}
