import React, { Component } from "react"

import Header from "../components/Header"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Wrapper from "../components/Wrapper"

import TextHeader from "../components/Header/TextHeader"

class IndexPage extends Component {
    render() {
        return (
            <>
                <GlobalStyle />
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
                <Content
                    text={[
                        {
                            title: "NeuroN Coin",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: false,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                        {
                            title: "NeuroN Cash",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: true,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                        {
                            title: "NeuroN Gold",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: false,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                        {
                            title: "NeuroN Coin",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: true,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                    ]}
                />
                <Wrapper
                    logo={true}
                    sticky={false}
                    bgc="black"
                    videoSrc="NCurrency.mp4"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="Dlaczego warto z nami działać?"
                    textColor="white"
                />
                <Content
                    text={[
                        {
                            title: "NeuroN Coin",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: false,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                        {
                            title: "NeuroN Cash",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: true,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                        {
                            title: "NeuroN Gold",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: false,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                        {
                            title: "NeuroN Coin",
                            post: true,
                            link: "https://www.facebook.com/neuronfoundation/",
                            isRight: true,
                            desc:
                                "Dzięki NeuroN Coin zyskasz możliwość korzystania z atrakcyjnych zniżek w różnych niesieciowych sklepach i restauracjach; to zamiennik kodów rabatowych. W jaki sposób je zyskać? Nic prostszego: biegaj z aplikacją iMundusi, oddawaj krew i szpik kostny, bierz udział w naszym wolontariacie, pomagaj ludziom, którzy najbardziej tego potrzebują. Twoja błękitna krew może uratować komuś życie!",
                        },
                    ]}
                />

                <Footer />
            </>
        )
    }
}

export default IndexPage
