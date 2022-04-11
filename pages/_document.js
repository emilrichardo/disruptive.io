// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel="icon" href="/logoflat.svg" />
        <meta name="description" content="At Disruptive we reinvent the world. We create and innovate in a way that some people can't even imagine and we bet on projects that are out of the ordinary: that makes us unique. It makes us Disruptive." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}