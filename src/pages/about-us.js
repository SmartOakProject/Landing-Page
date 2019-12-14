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
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John",
        description: "Frontendowiec z zamiłowania",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullname: "Wojciech John3",
        description: "Trzeci opis",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },
    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },

    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
    },

    {
        imgSrc: "https://via.placeholder.com/150",
        fullName: "Wojciech John2",
        description: "Drugi opis",
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
