import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import AboutUsCard from "../components/AboutUsCard"
import TextHeader from "../components/TextHeader"
import FloatBtn from "../components/FloatBtn"
import MobileNav from "../components/MobileNav"

const aboutUsData = [
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski3",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski2",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },

    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },

    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
    {
        imgSrc:
            "https://ca.slack-edge.com/TQ53VB79U-UQ2FNT22G-982bc694e72a-512",
        fullName: "Lucas Dąbrowski-Dębski",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, quidem!",
    },
]

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
            <Header>
                <TextHeader
                    logo
                    link
                    text="Smart Oak Project to przedsięwzięcie, którego ideą jest korzystanie z najnowszych rozwiązań technologicznych. Nie sposób więc pominąć w nim rolę walut alternatywnych. Osoby korzystające z naszych walutowych rozwiązań wspierają działanie Fundacji; kupując w naszym sklepie NeuroN Store bądź u jednego z naszych partnerów. W aplikacji iMundus powstał moduł, pozwalający na zarządzanie naszymi trzema walutami, zapewniając pełną kontrolę!"
                    title="NeuroN Currency"
                    color="white"
                />
            </Header>
            <Container>
                <AboutUsCard aboutUsData={aboutUsData} />
            </Container>
            <Footer />
        </>
    )
}

export default IndexPage
