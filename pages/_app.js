import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Head>
      <title>Disruptive</title>
      <meta name="description" content="Disruptive.io" />
      <link rel="icon" href="/logoflat.svg" />
    </Head>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
