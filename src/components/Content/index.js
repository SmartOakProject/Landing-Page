import React from "react"
import styled from "styled-components"
import ContentItem from "./components/ContentItem"

const ContentElement = styled.div`
    margin-top: 15rem;
    background-color: #fff;
`

export default function Content() {
    return (
        <ContentElement>
            <ContentItem
                title="NeuroN Conference"
                text="Popularnonaukowe konferencje organizowane przez Fundację mają pokazać, że zaburzenia psychiczne nie są słabością, a skuteczność pustych haseł wypowiadanych w stronę osób, które je mają, jest niska. Coroczne wydarzenia, organizowane w różnych miastach, poruszają najważniejsze naukowe doniesienia z takich dziedzin jak: psychiatria, psychologia, neurologia czy neurochirurgia. Panele dyskusyjne mają angażować zarówno specjalistów z wyżej wymienionych dziedzin, jak i pasjonatów zainteresowanych tematyką."
                fbPost={true}
                fbLink="https://www.facebook.com/neuronfoundation/"
                isRight={true}
            />
            <ContentItem
                title="NeuroN Theater"
                text="W zależności od zamieszkania i zaawansowania choroby, Fundacja tworzy grupy teatralne skierowane dla dzieci z zaburzeniami integracji sensorycznej lub niepełnosprawnością fizyczną bądź intelektualną. Wykwalifikowani psychologowie i psychoterapeuci czuwają nad terapeutycznym efektem zajęć. Spektakle można oglądać w różnych miastach, a dochód z biletów przeznaczany jest na pracę oligofrenopedagogów, arteterapeutów i innych osób, pracujących przy powstawaniu spektakli."
                fbPost={false}
                fbLink=""
                isRight={false}
            />
        </ContentElement>
    )
}
