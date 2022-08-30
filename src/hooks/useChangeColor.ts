import { useEffect, useState } from 'react'

const useChangeColor = (elmHeight: number) => {
  const [scrollY, setScrollY] = useState(0)
  const [cololr, setColor] = useState<string>('#FAFAFC')
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return cololr
}

export default useChangeColor
