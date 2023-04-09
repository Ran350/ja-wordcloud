import { ServerStyles, createStylesServer } from '@mantine/next'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

// import { fontFamilies } from '~/feature/font/fontFamily'
// import { fontFamilySampleText } from '~/feature/font/sampleText'

const stylesServer = createStylesServer()

export default class _Document extends Document {
  static override async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    ctx.res?.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59')

    return {
      ...initialProps,
      styles: [initialProps.styles, <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />],
    }
  }

  override render() {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="description"
            content="Author: Ran350, WordCloud generator for Japanese, many selectable style option, serverless, generate by wordcloud2.js, split by TinySegmenter"
          ></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <meta name="theme-color" content="#285943" />
          <link rel="manifest" href="manifest.webmanifest" />
          <link rel="apple-touch-icon" href="icons/icon192.png" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>☁️</text></svg>"
          />

          {/* Google Fonts */}
          {/* https://fonts.google.com/share?selection.family=Dela%20Gothic%20One%7CDotGothic16%7CHachi%20Maru%20Pop%7CKaisei%20Tokumin:wght@800%7CKiwi%20Maru:wght@500%7CM%20PLUS%201:wght@700%7CM%20PLUS%20Rounded%201c:wght@800%7CMochiy%20Pop%20One%7CMochiy%20Pop%20P%20One%7CNoto%20Sans%20JP:wght@700%7CNoto%20Serif%20JP:wght@900%7CPotta%20One%7CRampart%20One%7CRocknRoll%20One%7CSawarabi%20Mincho%7CTrain%20One%7CYuji%20Syuku */}
          {/* TODO: 入力欄のプレビュー用font family */}
          {/* <link
            href={`https://fonts.googleapis.com/css2?${new URLSearchParams([
              ...fontFamilies.map((f) => ['family', f.name.replaceAll(' ', '+')]),
              // ['text', fontFamilySampleText],
            ])}`}
            rel="stylesheet"
          /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&family=Hachi+Maru+Pop&family=Kaisei+Tokumin:wght@800&family=Kiwi+Maru:wght@500&family=M+PLUS+1:wght@700&family=M+PLUS+Rounded+1c:wght@800&family=Mochiy+Pop+One&family=Mochiy+Pop+P+One&family=Noto+Sans+JP:wght@700&family=Noto+Serif+JP:wght@900&family=Potta+One&family=Rampart+One&family=RocknRoll+One&family=Sawarabi+Mincho&family=Train+One&family=Yuji+Syuku&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
