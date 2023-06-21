import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect } from "react"
import Head from "next/head"

import { store } from "@/store"
import { Provider } from "react-redux"
import Script from "next/script"

import "styles/scss/global.scss"
import "styles/scss/auth.scss"

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, [])
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-NH7553EBWK"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NH7553EBWK', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <Head>
        <title>Hire Job App</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}
