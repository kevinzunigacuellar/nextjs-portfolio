import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        </Head>
        <body
          className="bg-gray-100 antialiased selection:bg-teal-300 selection:text-teal-900
        dark:bg-gray-900/95 dark:selection:bg-indigo-300 dark:selection:text-indigo-900"
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
