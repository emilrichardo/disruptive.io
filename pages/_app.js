import '../styles/globals.css'

import Layout from '../components/Layout'
import { appWithTranslation } from 'next-i18next'
import { TokenProvider } from '../context/tokenContext'

import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {



  return (
      <Layout>


        <TokenProvider>
          <AnimatePresence exitBeforeEnter intial={false}>
            <Component {...pageProps}  key={router.asPath}   />

          </AnimatePresence>

        </TokenProvider>




      </Layout>
  )
}


export default appWithTranslation(MyApp);
