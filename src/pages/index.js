import React from "react"

import Header from "../components/Header/Header"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content/Content"
import Section from "../components/Section/Section"

import GlobalStyle from "../components/GlobalStyles/GlobalStyles"

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <MobileNav />
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
            <Section />
            <Footer />
        </>
    )
}

export default IndexPage
