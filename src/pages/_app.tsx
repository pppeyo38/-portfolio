import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider, Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { Header } from '@/components/organisms/Header'
import { theme } from '@/themes/theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  const [isTItle, setIsTitle] = useState(true)

  useEffect(() => {
    if (router.pathname !== '/') {
      setIsTitle(true)
    } else {
      setIsTitle(false)
    }
  }, [router.pathname])

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
        <main>
          <Header isTItle={isTItle} />
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </ChakraProvider>
  )
}

export default MyApp
