import '@emotion/react'

declare module '@emotion/react' {
  interface Theme {
    colors: Colors
    fonts: Fonts
    fontWt: FontWt
  }
}

interface Colors {
  black: string
  gray: string
  lightGray: string
  white: string
}

interface Fonts {
  BVP: string
  ZKGothic: string
}

interface FontWt {
  Thin: number
  Regular: number
  Bold: number
}
