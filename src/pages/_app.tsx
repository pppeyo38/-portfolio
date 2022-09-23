import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'

import { Header } from '@/components/organisms/Header'
import { theme } from '@/themes/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
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
          `}
        />
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
