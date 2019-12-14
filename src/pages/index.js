import React from "react"
import Header from "../components/Header"
import TextHeader from "../components/TextHeader"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"
import FloatBtn from "../components/FloatBtn"

import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Wrapper from "../components/Wrapper"
import Sticky from "../components/Wrapper/Sticky"

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
                    text="Smart Oak Project łączy ambitnych, aktywnych i kreatywnych ludzi z całego świata, chcących od życia czegoś więcej. Umożliwia on tworzenie różnorodnych projektów społecznych i komercyjnych. Dzięki wspólnemu zaangażowaniu i ogromnej pasji możemy realizować świetne projekty, startupy, możemy wspierać się i co najważniejsze pomagać innym. Jeśli tak jak my jesteś pozytywnie zakręcony, szukasz dobrej energii i motywacji do ambitnych działań – nie mogłeś trafić lepiej. Z nami będzie ci doskonale!"
                    title="Smart Oak Project"
                />
            </Header>
            <Wrapper
                logo={false}
                color="black"
                videoSrc="home-1.mp4"
                text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                title="NeuroN Foundation"
                textColor="black"
                z="3"
                secondText
            />
            <Wrapper
                logo={true}
                color="white"
                videoSrc="home-2.mp4"
                text="To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, "
                title="New Neuropsychiatry"
                textColor="white"
                z="4"
                thirdText
            />
            <Wrapper
                logo={false}
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
                videoSrc="home-4.mp4"
                text="To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, "
                title="Oakes Innovate"
                textColor="white"
                z="6"
            />
            <Wrapper
                logo={false}
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
                videoSrc="home-6.mp4"
                text="To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, "
                title="Oakes Clinic"
                textColor="white"
                z="8"
            />
            <Wrapper
                logo={false}
                color="black"
                videoSrc="home-7.mp4"
                text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                title="Oak Atlantis"
                textColor="black"
                z="9"
            />
            <Wrapper z="10" style={{ height: "auto" }} isLast>
                <Sticky
                    color="white"
                    logo={true}
                    videoSrc="home-8.mp4"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="NeuroN Currency"
                    textColor="white"
                    isLast={true}
                />

                <Footer black />
            </Wrapper>
        </>
    )
}

export default IndexPage
