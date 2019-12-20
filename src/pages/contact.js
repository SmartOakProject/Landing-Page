import React from "react"

import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Contact from "../components/Contact"
import FloatBtn from "../components/FloatBtn"
import MobileNav from "../components/MobileNav"

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <FloatBtn />
            <Nav />
            <MobileNav />
            <Contact />
            <Footer />
        </>
    )
}

export default IndexPage
