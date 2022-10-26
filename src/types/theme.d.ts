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
  white: string
  subWhite: string
  purple: string
  purpleGradient: string
}

interface Fonts {
  ZKGothic: string
  Inter: string
}

interface FontWt {
  Regular: number
  Medium: number
  SemiBold: number
  Bold: number
  ExtraBold: number
}
