import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Support from "../components/Support"
import FloatBtn from "../components/FloatBtn"
import MobileNav from "../components/MobileNav"

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <FloatBtn />
            <Nav />
            <MobileNav />
            <Support />
            <Footer />
        </>
    )
}

export default IndexPage
