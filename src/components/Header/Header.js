import React from "react"
import styled from "styled-components"
import headerBg from "../../images/header-bg.jpeg"
import logo from "../../images/logo-biale.png"

const Background = styled.div`
	position: absolute;
	width: 100%;
	height: 56.5rem;
`

const Image = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: url(${headerBg}) no-repeat center center / cover;
	/* filter: contrast(110%); */
	/* filter: brightness(110%); */
	@media screen and (max-width: 425px) {
		background-position: 73% 0;
		height: calc(56.5rem * 0.8)
	}
`

const Filter = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(100deg, black, transparent 70%, white);
	opacity: 0.4;
	@media screen and (max-width: 991px) {
		background: black;
	}
`

const HeaderElement = styled.header`
	position: absolute;
	width: 100%;
	height: 56.5rem;
`

const Logo = styled.div`

`

const Icon = styled.img`
	width: 15rem;
	height: 15rem;
	@media screen and (max-width: 1200px) {
		width: 12rem;
		height: 12rem;
	}
	@media screen and (max-width: 991px) {
		display: none;
	}
`

const Name = styled.div`

`

const FirstLine = styled.div`

`

const SecondLine = styled.div`

`

const Title = styled.h1`

`

const Description = styled.p`

`

const Button = styled.button`

`

export default function Header() {
	return (
		<>
			<Background>
				<Image />
				<Filter />
			</Background>
			<HeaderElement>
				<Logo>
					<Icon src={logo} alt="NeuroN Foundation Logo" />
					<Name>
						<FirstLine>Smart Oak</FirstLine>
						<SecondLine>Project</SecondLine>
					</Name>
				</Logo>
				<Title>NeuroN Foundation</Title>
				<Description>
					Fundacja skierowana jest dla osób z zaburzeniami funkcjonowania mózgu i osób uzależnionych. W niesieniu pomocy nie można się jednak ograniczać, dlatego dotykamy również wielu innych społecznych kwestii. Działamy w największych miastach, a także bez względu na miejsce zamieszkania, w ramach e-wolontariatu. O większości naszych projektów przeczytacie w tej i kolejnych zakładkach.
				</Description>
				<Button>
					{/* fb icon */}
					Zobacz projekt na facebooku
				</Button>
			</HeaderElement>
		</>
	)
}
