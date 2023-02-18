import { GlobalStyleWithTheme } from '@/styles/Global'
import '@/styles/globals.css'
import 'node_modules/modern-normalize/modern-normalize.css'
import { defaultTheme } from '@/styles/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyleWithTheme />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
