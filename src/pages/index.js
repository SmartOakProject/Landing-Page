import React from "react"
// import Header from "../components/Header"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"
// import Content from "../components/Content"
import Cards from "../components/Cards"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Wrapper from "../components/Wrapper"
import logo from "../images/logo-biale.png"
import styled from "styled-components"
// ../../video/blackEarth.mp4
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
            {/* <Logo src={logo} /> */}
            <Wrapper
                bgc="#131B2B"
                videoSrc="blackEarth.mp4"
                text="To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, wymianie własnych doświadczeń, ułatwia organizację i podział zadań, a także daje możliwość odbierania e-maili, zarządzania social mediami i korzystania z czytnika RSS. Chcesz do nas dołączyć? Nic prostszego! Wystarczy, że klikniesz „pobierz” i utworzysz konto, a jeden z naszych konsultantów niebawem się z tobą skontaktuje. Po rozmowie otrzymasz dostęp do naszej platformy. Jeżeli lubisz działać w projektach, które mogą pomóc innym – czekamy na ciebie!"
                title="Smart Oak System"
                textColor="white"
            />
            <Wrapper
                bgc="white"
                videoSrc="whiteAnim.mp4"
                text="Osoby najbardziej zaangażowane w projekty charytatywne uczestniczą także w projektach komercyjnych. Doceniamy tych, którzy robią więcej, niż mówią. Jeżeli lubisz współpracować i potrafisz myśleć strategicznie, zacznij działać i rozwijaj z nami działalności gospodarcze. Więcej o naszych pomysłach przeczytasz w zakładce Oakes Innovate."
                title="Działalności gospodarcze"
                textColor="black"
            />
            <Wrapper
                bgc="black"
                videoSrc="blackPulse.mp4"
                text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                title="Dlaczego warto z nami działać?"
                textColor="white"
            />
            <Wrapper
                bgc="white"
                videoSrc="whiteParticles.mp4"
                text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                title="Jak dołączyć do projektu?"
                textColor="black"
            />
            <Wrapper bgc="white" z="100">
                <Cards />
                <Footer />
            </Wrapper>
        </>
    )
}

export default IndexPage
