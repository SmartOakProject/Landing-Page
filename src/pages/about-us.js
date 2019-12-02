import React from "react"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content"
import Cards from "../components/Cards"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <Header />
            <h1>loading...</h1>
            <Cards />
            <Footer />
        </>
    )
}

export default IndexPage
