import React from "react"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content"
import Cards from "../components/Cards"
import Wrapper from "../components/Wrapper"
import Test from "../components/Wrapper/Test"

import GlobalStyle from "../components/GlobalStyles/GlobalStyles"

const IndexPage = () => {
    return (
        <>
            <GlobalStyle />
            <Nav />
            <Header />
            <Wrapper bgc="black" z="90">
                <Content />
            </Wrapper>
            <Wrapper bgc="black" z="100">
                <Test
                    bgc="black"
                    videoSrc="blackPulse.mp4"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="Dlaczego warto z nami działać?"
                    textColor="white"
                />
                <Content />
            </Wrapper>
            <Cards />
            <Footer />
        </>
    )
}

export default IndexPage
