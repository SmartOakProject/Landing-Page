import React from "react"

import Header from "../components/Header/Header"
import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content/Content"
import Cards from "../components/Cards"

import GlobalStyle from "../components/GlobalStyles/GlobalStyles"

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <h1>Next Page</h1>
            <Nav />
            <Header />
            <Content
                text="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique asperiores est aliquam placeat accusantium molestiae eius aspernatur autem officiis ipsam sequi numquam ea amet, a"
            />
            <Content
                text="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique asperiores est aliquam placeat accusantium molestiae eius aspernatur autem officiis ipsam sequi numquam ea amet, a"
            />
            <Content
                text="
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique asperiores est aliquam placeat accusantium molestiae eius aspernatur autem officiis ipsam sequi numquam ea amet, a"
            />
            <Cards />
            <Footer />
        </>
    )
}

export default IndexPage
