import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>☁️</text></svg>"
          />

          {/* Google Fonts */}
          {/* https://fonts.google.com/share?selection.family=Dela%20Gothic%20One%7CDotGothic16%7CHachi%20Maru%20Pop%7CKaisei%20Tokumin:wght@800%7CKiwi%20Maru:wght@500%7CM%20PLUS%201:wght@700%7CM%20PLUS%20Rounded%201c:wght@800%7CMochiy%20Pop%20One%7CMochiy%20Pop%20P%20One%7CNoto%20Sans%20JP:wght@700%7CNoto%20Serif%20JP:wght@900%7CPotta%20One%7CRampart%20One%7CRocknRoll%20One%7CSawarabi%20Mincho%7CTrain%20One%7CYuji%20Syuku */}
          <link
            href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&family=Hachi+Maru+Pop&family=Kaisei+Tokumin:wght@800&family=Kiwi+Maru:wght@500&family=M+PLUS+1:wght@700&family=M+PLUS+Rounded+1c:wght@800&family=Mochiy+Pop+One&family=Noto+Sans+JP:wght@700&family=Noto+Serif+JP:wght@900&family=Potta+One&family=Rampart+One&family=RocknRoll+One&family=Sawarabi+Mincho&family=Train+One&family=Yuji+Syuku&display=swap"
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
export default MyDocument
