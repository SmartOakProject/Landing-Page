import Header from "../components/Header"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content"
import Cards from "../components/Cards"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import React, { Component } from "react"
import Wrapper from "../components/Wrapper"
import Text from "../components/Header/Text"

import styled from "styled-components"
import VisibilitySensor from "react-visibility-sensor"

class IndexPage extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
                <Nav />
                <MobileNav />
                <Header>
                    <Text zindex="20" color="#fff" />
                </Header>
                <Content />
                <Content />
                <Wrapper
                    logo={true}
                    sticky={false}
                    bgc="black"
                    videoSrc="blackEarth.mp4"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="Dlaczego warto z nami działać?"
                    textColor="white"
                />
                <Content />
                <Wrapper
                    logo={true}
                    sticky={false}
                    bgc="black"
                    videoSrc="blackEarth.mp4"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="Dlaczego warto z nami działać?"
                    textColor="white"
                />
                <Content />
                <Footer />
            </>
        )
    }
}

export default IndexPage
