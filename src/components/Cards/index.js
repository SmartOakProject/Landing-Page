import React from "react"
import styled from "styled-components"
import Card from "./components/Card"
import img1 from "../../images/news/1.jpeg"
import img2 from "../../images/news/2.jpeg"
import img3 from "../../images/news/3.jpeg"
import img4 from "../../images/news/4.jpeg"
import img5 from "../../images/news/5.jpeg"
import img6 from "../../images/news/6.jpeg"

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding-top: 3rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    /* @media screen and (max-width: 1560px) {
        grid-template-columns: repeat(3, 1fr);
    } */
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export default function Section() {
    return (
        <Container>
            <Card
                img={img1}
                title="Smart Oak ERP System"
                text="Jesteśmy dumni z naszego systemu Smart Oak ERP. To nasz komunikator i jednocześnie system do zarządzania całym projektem o wartości 200.000 $. Z jego pomocą każdy może do nas dołączyć, niezależnie od miejsca, w którym się znajduje i działać w projektach, które są mu najbliższe."
            />
            <Card
                img={img2}
                title="Jak dołączyć do projektu?"
                text="Jeżeli chcesz zostać naszym wolontariuszem lub e-wolontariuszem, ściągnij Smart Oak ERP System, który znajduje się w zakładce POBIERZ. Po utworzeniu konta skontaktuje się z Tobą nasz koordynator i wszystko wytłumaczy. Pomaganie jeszcze nigdy nie było tak łatwe."
            />
            <Card
                img={img3}
                title="Dlaczego warto z nami działać?"
                text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i wzajemnie od siebie uczyć. Osobom bardziej zaangażowanym wystawiamy dokumenty referencyjne, dajemy staż, zatrudniamy lub włączamy w komercyjne części projektu."
            />
            <Card
                img={img4}
                title="W czym możesz pomóc?"
                text="Zadania w naszej Fundacji są bardzo różne. Dlatego podajemy kilka najważniejszych tematów, które pozwolą Ci pomyśleć, czym można się zająć w projekcie: grafika, prawo, programowanie, social media, tłumaczenie, redagowanie, e-maile, wnioski, organizacja, marketing, PR etc."
            />
            <Card
                img={img5}
                title="Hakatony Wolontariackie"
                text="W ramach naszych działań IT, w różnych miastach organizujemy weekendowe hakatony, by pracować nad naszą aplikacją. W zakładce wydarzenia dodajemy informacje o wszystkich naszych planowanych działaniach. Znajdziesz tam także informacje, dotyczące hakatonów."
            />
            <Card
                img={img6}
                title="Działalności gospodarcze"
                text="Najbardziej zaangażowane osoby w projekty charytatywne, są też z nami w projektach komercyjnych. Doceniamy tych, którzy więcej robią niż mówią. Jeżeli lubisz działać w projektach i potrafisz myśleć strategicznie, rozwijaj działalności gospodarcze. Więcej zakładce Oakes Innovate."
            />
        </Container>
    )
}
