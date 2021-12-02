import Nav from './Navigation/Navbar'
import Meta from './Meta'
import Footer from "./Navigation/Footer";
import React, {useEffect, useState, Fragment} from "react";
import {useRouter} from "next/router";

const Layout = ({children}) => {


    const router = useRouter();
    const [isPageAuthenticated, setIsPageAuthenticated] = useState(false)
    useEffect(() => {
        setIsPageAuthenticated(router.pathname.includes('auth'))
    }, [router.pathname])
    const [showLoader, setShowLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false)
        }, 0)
    }, [])
    return (
        <Fragment>
            <Meta/>

            <main>
                <Nav/>

                {children}
            </main>
            <Footer/>


        </Fragment>
    )
}

export default Layout
