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
          a {
            text-decoration: none;
          }
          button {
            border: none;
            background: none;
          }
        `}
      />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}

export default MyApp
