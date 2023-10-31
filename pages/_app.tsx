import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  )
}
