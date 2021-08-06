import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta name="theme-color" content="#285943" />
        <link rel="manifest" href="manifest.webmanifest" />
        <link rel="apple-touch-icon" href="icons/icon192.png" />
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
