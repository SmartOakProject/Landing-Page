import React from "react"

import Header from "../components/Header/Header"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content/Content"
import Cards from "../components/Cards"

import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Wrapper from "../components/Wrapper"

import logo from "../images/logo-biale.png"
import styled from "styled-components"

const Logo = styled.img`
    position: fixed;
    top: 30%;
    left: 10%;
    height: 20vh;
    /* width: 30vw; */
    z-index: 100;
    @media screen and (max-width: 900px) {
        position: static;
    }
`
const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <MobileNav />
            <Header />
            <Logo src={logo} />
            <Wrapper bgc="red" />
            <Wrapper bgc="blue" />
            <Wrapper bgc="white" z="100">
                <Cards />
                <Footer />
            </Wrapper>
        </>
    )
}

export default IndexPage
