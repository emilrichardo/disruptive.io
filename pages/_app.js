import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Head>
          <meta name="description" content="Disruptive.io" />
        </Head>
        <Component {...pageProps} />
      </Layout>
  )
}


export default appWithTranslation(MyApp);
