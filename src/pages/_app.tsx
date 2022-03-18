import { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name="theme-color" content="#285943" />
        <link rel="manifest" href="manifest.webmanifest" />
        <link rel="apple-touch-icon" href="icons/icon192.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
