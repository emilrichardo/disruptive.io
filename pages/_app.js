import '../styles/globals.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { appWithTranslation } from 'next-i18next'
import { TokenProvider } from '../context/tokenContext'

import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {



  return (
      <Layout>
        <Head>
          <meta name="description" content="At Disruptive we reinvent the world. We create and innovate in a way that some people can't even imagine and we bet on projects that are out of the ordinary: that makes us unique. It makes us Disruptive." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>


        </Head>

        <TokenProvider>
          <AnimatePresence exitBeforeEnter intial={false}>
            <Component {...pageProps}  key={router.asPath}   />

          </AnimatePresence>

        </TokenProvider>




      </Layout>
  )
}


export default appWithTranslation(MyApp);
