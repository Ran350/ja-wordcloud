import App, { AppContext, AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log(`
見てくれてありがとう！

- GitHub repository:
    https://github.com/Ran350/web-wordcloud
- Issues
    https://github.com/Ran350/web-wordcloud/issues
    `)
  }, [])

  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="theme-color" content="#285943" />
        <link rel="manifest" href="manifest.webmanifest" />
        <link rel="apple-touch-icon" href="icons/icon192.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp
