import React, { Component } from "react"

import Header from "../components/Header"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"
import Footer from "../components/Footer/Footer"
import Content from "../components/Content"
import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Wrapper from "../components/Wrapper"
import FloatBtn from "../components/FloatBtn"

import TextHeader from "../components/TextHeader"

class IndexPage extends Component {
    render() {
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
                        text="Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!"
                        title="New Neuropsychiatry"
                        color="white"
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
                    videoSrc="NCurrency"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="Dlaczego warto z nami działać?"
                    textColor="white"
                    color="white"
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
                <Wrapper
                    logo={true}
                    sticky={false}
                    bgc="black"
                    videoSrc="NCurrency"
                    text="Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu."
                    title="Dlaczego warto z nami działać?"
                    textColor="white"
                    color="white"
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
