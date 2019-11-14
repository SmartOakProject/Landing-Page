import React from "react"
import Header from "../components/Header"
import Text from "../components/Header/TextHeader"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"

// import Content from "../components/Content"
import Cards from "../components/Cards"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Wrapper from "../components/Wrapper"
import Test from "../components/Wrapper/Test"
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
            <Header>
                <Text
                    text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                    title="NeuroN Foundation"
                />
            </Header>
            {/* <Logo src={logo} /> */}
            <Wrapper
                logo={false}
                bgc="white"
                color="black"
                videoSrc="home-1.mp4"
                text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                title="NeuroN Foundation"
                textColor="black"
                z="3"
            />
            <Wrapper
                logo={true}
                color="white"
                bgc="#131B2B"
                videoSrc="home-2.mp4"
                text="To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, "
                title="New Neuropsychiatry"
                textColor="white"
                z="4"
            />
            <Wrapper
                logo={false}
                bgc="white"
                color="black"
                videoSrc="home-3.mp4"
                text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                title="iMundus"
                textColor="black"
                z="5"
            />
            <Wrapper
                logo={true}
                color="white"
                bgc="#131B2B"
                videoSrc="home-4.mp4"
                text="To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, "
                title="Oakes Innovate"
                textColor="white"
                z="6"
            />
            <Wrapper
                logo={false}
                bgc="white"
                color="black"
                videoSrc="home-5.mp4"
                text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                title="NMedia"
                textColor="black"
                z="7"
            />
            <Wrapper
                logo={true}
                color="white"
                bgc="#131B2B"
                videoSrc="home-6.mp4"
                text="To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, "
                title="Oakes Clinic"
                textColor="white"
                z="8"
            />
            <Wrapper
                logo={false}
                bgc="white"
                color="black"
                videoSrc="home-7.mp4"
                text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                title="Oak Atlantis"
                textColor="black"
                z="9"
            />
            <Wrapper
                bgc="white"
                z="10"
                style={{ height: "auto" }}
                isLast={true}>
                <Test
                    color="white"
                    logo={true}
                    videoSrc="home-8.mp4"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="NeuroN Currency"
                    textColor="white"
                />

                <Footer black />
            </Wrapper>
        </>
    )
}

export default IndexPage
