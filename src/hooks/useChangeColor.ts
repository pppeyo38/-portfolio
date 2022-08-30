import { useEffect, useState } from 'react'

type rgb = {
  red: number
  green: number
  blue: number
}

const useChangeColor = (height: number) => {
  const [scrollY, setScrollY] = useState(0)
  const [cololr, setColor] = useState<string>('#FAFAFC')
  const [rgb, setRgb] = useState<rgb>({ red: 250, green: 250, blue: 252 })

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    console.log(scrollY)
    if (0 <= scrollY && scrollY < height) {
      setRgb((prev) => ({
        red: prev.red - 43 / height,
        green: prev.green - 21 / height,
        blue: prev.blue - 23 / height,
      }))
    }
  }, [scrollY])

  return `rgb(${rgb['red']}, ${rgb['green']}, ${rgb['blue']})`
}

export default useChangeColor
