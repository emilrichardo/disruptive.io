import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { appWithTranslation } from 'next-i18next'
import { TokenProvider } from '../context/tokenContext'


function MyApp({ Component, pageProps }) {



  return (
      <Layout>
        <Head>
          <meta name="description" content="Disruptive.io" />
        </Head>

        <TokenProvider>
          <Component {...pageProps}    />
        </TokenProvider>




      </Layout>
  )
}


export default appWithTranslation(MyApp);
