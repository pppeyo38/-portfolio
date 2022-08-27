import { ThemeProvider, Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'
import { theme } from '@/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          ${emotionReset}
          body {
            background-color: #fafafc;
          }
          li {
            list-style: none;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
