import React from "react"
import styled from "styled-components"
import ContentItem from "./components/ContentItem"

const ContentElement = styled.div`
	margin-top: 15rem;
`

export default function Content() {
	return (
		<ContentElement>
			<ContentItem
				title="NeuroN Conference"
				text="Popularnonaukowe konferencje organizowane przez Fundację mają pokazać, że zaburzenia psychiczne nie są słabością, a skuteczność pustych haseł wypowiadanych w stronę osób, które je mają, jest niska. Coroczne wydarzenia, organizowane w różnych miastach, poruszają najważniejsze naukowe doniesienia z takich dziedzin jak: psychiatria, psychologia, neurologia czy neurochirurgia. Panele dyskusyjne mają angażować zarówno specjalistów z wyżej wymienionych dziedzin, jak i pasjonatów zainteresowanych tematyką."
				fbPost={true}
				fbLink="https://www.facebook.com/neuronfoundation/"
			/>
			<ContentItem
				title="NeuroN Theater"
				text="W zależności od zamieszkania i zaawansowania choroby, Fundacja tworzy grupy teatralne skierowane dla dzieci z zaburzeniami integracji sensorycznej lub niepełnosprawnością fizyczną bądź intelektualną. Wykwalifikowani psychologowie i psychoterapeuci czuwają nad terapeutycznym efektem zajęć. Spektakle można oglądać w różnych miastach, a dochód z biletów przeznaczany jest na pracę oligofrenopedagogów, arteterapeutów i innych osób, pracujących przy powstawaniu spektakli."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Other Side"
				text="Na działania Fundacji składają się także spotkania edukacyjno-integracyjne, które służą przełamywaniu negatywnej roli, jaką w życiu społecznym odgrywają stereotypy. Zależy nam na utworzeniu wspólnej płaszczyzny komunikacji między różnymi grupami społecznymi, nawiązaniu dialogu i pogłębieniu zrozumienia zjawisk, które wskutek niewiedzy prowadzą do uprzedzeń."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Pomaganie przez kupowanie"
				text="Rób zakupy w Internecie i wspieraj ważne cele. Zainstaluj wtyczkę i zacznij pomagać. Na czym to polega? Robiąc zakupy w dowolnym z 1030 sklepów, takich jak: allegro.pl, booking.com, empik.com, pyszne.pl, LOT czy aliexpress.com, wspierasz naszą Fundację. Ty kupujesz wybraną rzecz u jednego z naszych partnerów, następnie sklep ten przekazuje część swojego zysku na rzecz NeuroN Foundation. Podczas zakupów nasza wtyczka przypomni Ci o nas. Pomaganie jeszcze nigdy nie było tak proste. Zerknij do zakładki POBIERZ w naszym menu."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Neuron Runs"
				text="W całej Polsce organizujemy biegi na 5 lub 10 km. Bieganie jest dobrym narzędziem zmniejszającym lęk. Projekt ten połączony jest z naszą aplikacją NeuroN Direction. Aplikacja pozwoli na rejestrację uczestników w biegach, a za każdy przebiegnięty przez Ciebie kilometr, nasi partnerzy wpłacą datek na rzecz Fundacji. Od teraz bieganie to pomaganie."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title={"NeuroN Sport & Learning"}
				text=""
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="NeuroN sCOOL"
				text="Według Światowej Organizacji Zdrowia tylko w Europie na autyzm choruje około 5 mln osób. W praktyce oznacza to, że jedna na 150 osób choruje na to zaburzenie. Pierwsze objawy autyzmu można zauważyć już nawet u kilkumiesięcznego dziecka. Od najmłodszych lat dziecka możemy dbać o jego rozwój, tworząc specjalne przedszkola – NeuroN sCOOL. Dzieci z autyzmem wymagają indywidualnego podejścia i intensywnego wsparcia, dlatego NeuroN Foundation stawia na wykwalifikowanych pracowników naszych przedszkoli oraz dodatkowe zajęcia w ramach innych projektów, a wszystko po to, byście mogli powiedzieć, że przedszkole dla Waszych dzieci może być cool, a właśnie takie mają być NeuroN sCOOL."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Hippocampus Festival"
				text="Hippocampus Festival to wynik połączenia nauki i rozrywki. Uczestnictwo w Festivalu będzie łączyło się z koncertem muzycznym oraz piknikiem naukowym, w skład którego będą wchodziły panele dyskusyjne, szkolenia oraz rozmowy z naukowcami. Ideą towarzyszącą festiwalowi jest promowanie nauki oraz postaw szacunku, tolerancji i akceptacji. Hippocampus Festival będzie też świetną okazją do propagowania różnych kampanii społecznych, a także innowacyjnych projektów w ramach NeuroN Direction Conference."
				fbPost={true}
				fbLink="https://www.facebook.com/neuronfoundation/"
			/>
			<ContentItem
				title="NeuroN Store"
				text="Fitoterapia i suplementacja na przestrzeni ostatnich kilku lat to jedne z najbardziej dynamicznie rozwijających się trendów. Fundacja stworzyła sklep internetowy z ziołami, suplementami i wieloma innymi produktami. W ofercie Neuron Shop, oprócz całej gamy produktów prozdrowotnych, znajdą się także naturalne świece zapachowe z wykorzystaniem olejków eterycznych, odżywki białkowe, nierafinowane oleje. Co ciekawe, w NeuroN Store będzie można zapłacić przy wykorzystaniu NeuroN Cash."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Wolontariackie Hakatony"
				text="Zjawisko prospołecznych hakatonów w Europie staje się coraz bardziej rozpoznawalne, dlatego staramy się wyjść naprzeciw oczekiwaniom programistów, którzy mają w sobie bakcyl pracy prospołecznej i to dla nich stworzyliśmy cykl Wolontariackich Hakatonów. Ideą Hakatonów NeuroN Fundation jest umożliwienie programistom wymiany własnych doświadczeń w celu rozbudowania o niekomercyjne funkcjonalności aplikacji NeuroN Direction."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="NeuroN Place"
				text="NeuroN Place zakłada utworzenie ośrodków stałego pobytu dla dorosłych z autyzmem. Cel to nie tylko 24-godzinna opieka, ale również dopasowane miejsca do potrzeb osób z tym zaburzeniem. Osoby autystyczne mogą pobierać naukę i uczestniczyć w Warsztatach Terapii Zajęciowej jedynie do określonego wieku. Później są pozostawiane same sobie, a ciężar opieki nad nimi spada na najbliższą rodzinę. NeuroN Place zamierza zmienić ten stan rzeczy."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Sklepy społeczne"
				text="Celem programu jest stworzenie sieci sklepów społecznych, w których osoby wskazane przez Miejskie Ośrodki Pomocy Społecznej otrzymają jedzenie za darmo. Każdej osobie ma przysługiwać kilka kilogramów żywności, dwa razy w tygodniu. Jedzenie będziemy otrzymywać od współpracujących z nami sklepów."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Artistic NeuroN Agency"
				text="To agencja artystyczna dla osób niepełnosprawnych, której celem jest uczestnictwo tychże osób w serialach, filmach i reklamach różnych produktów. Ma to wpłynąć na zmianę myślenia przyjętego w ramach stereotypu, według którego osoba niepełnosprawna kojarzyć się ma z litością, biedą czy słabością. Zachęcamy do kontaktu wszystkich zainteresowanych impresariatem."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Bal charytatywny i aukcje"
				text="Co roku w ramach NeuroN Foundation i NeuroN TV organizujemy bal charytatywny, na którym prowadzone są aukcje. Każdy zainteresowany ma możliwość licytacji przez Internet, z pozycji NeuroN Store. W każdej chwili można przekazać również przedmiot do licytowania."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="NeuroN Time"
				text="Marzeniem rodziców jest świadomość, że dzieci ze spektrum autyzmu, są zawsze mile widzianymi gośćmi w muzeum, kinie i kawiarni, dlatego pracujemy nad zwiększaniem liczby miejsc w przestrzeni publicznej, przyjaznych osobom z autyzmem. Jest to projekt cykliczny podejmowany co roku z początkiem czerwca."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="ECO kampanie"
				text="Kampanie uświadamiające destrukcyjny wpływ człowieka na środowisko naturalne, niebezpieczne oddziaływanie chemikaliów na ludzki organizm czy walka ze smogiem, to niektóre z poruszanych tematów. W szczególności zajmujemy się kwestią transdermalnego wchłaniania związków chemicznych. Akcje prowadzone są we współpracy z organizacjami ekologicznymi i prozdrowotnymi."
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Kampanie DNA"
				text={`Burzymy przekonania o monolityczności naszego pochodzenia. Często czujemy się w pełni przynależni danej grupie etnicznej i całkowicie jej pochodni. Nasza kampanie w prosty sposób pokazuje, że bez względu na to, kim jesteśmy mentalnie – kim innym jesteśmy biologicznie. Pojawia się zatem pytanie: kim w ogóle jesteśmy? "Jesteśmy chyba dokładne tacy sami jak inni, czyli ani lepsi ani gorsi, bo nikt nigdy nie jest i nie będzie dokładnie taki sam jak ja lub Ty".`}
				fbPost={false}
				fbLink=""
			/>
			<ContentItem
				title="Zajęcia relaksacyjne w szpitalach onkologicznych"
				text=""
				fbPost={false}
				fbLink=""
			/>
		</ContentElement>
	)
}
