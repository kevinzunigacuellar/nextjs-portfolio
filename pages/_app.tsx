import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import AppLayout from 'layouts/AppLayout'
import 'styles/globals.css'
import 'styles/prism.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange>
      <SessionProvider session={session}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </SessionProvider>
    </ThemeProvider>
  )
}

export default MyApp
