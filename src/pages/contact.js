import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Contact from "../components/Contact"
import FloatBtn from "../components/FloatBtn"
import MobileNav from "../components/MobileNav"

const Container = styled.div`
    display: block;
    max-width: 1100px;
    padding: 0 1rem;
    margin: 5rem auto 0rem;
    @media screen and (max-width: 600px) {
        margin: 2.5rem auto 0rem;
    }
`

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
