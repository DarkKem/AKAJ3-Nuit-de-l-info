import React from "react"
import '../styles/globals.scss'
import Layout from "../components/Layout";
import {Router} from 'next/dist/client/router'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

// Loading events on each page
NProgress.configure({
    showSpinner: false,
})
Router.events.on('routeChangeStart', () => {
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => {
    NProgress.done()
})
Router.events.on('routeChangeError', () => {
    NProgress.done()

})

// Importing Font Awesome
export default function MyApp({Component, pageProps}) {

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )

}

