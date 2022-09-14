import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'
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
              color: #111012;
              text-decoration: none;
            }
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
