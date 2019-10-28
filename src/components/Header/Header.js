import React from "react"
import styled from "styled-components"
import { library } from '@fortawesome/fontawesome-svg-core'
import Global from '../GlobalStyles/GlobalStyles'
import headerBg from "../../images/header-bg.jpeg"
import logo from "../../images/logo-biale.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF);

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
	@media screen and (max-width: 425px) {
		background-position: 73% 0;
		height: calc(56.5rem * 0.8)
	}
`

const Filter = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(100deg, black 20%, transparent 60%);
	opacity: 0.5;
	@media screen and (max-width: 991px) {
		background: black;
	}
	@media screen and (max-width: 425px) {
		height: calc(56.5rem * 0.8)
	}
`

const HeaderElement = styled.header`
	position: absolute;
	width: 71%;
	padding:  0.8rem 1.6rem 0 9.6rem;
	color: white;
	font-weight: 400;
	@media screen and (max-width: 900px) {
		padding:  3.3rem 1.6rem 0 9.6rem;
	}
	@media screen and (max-width: 767px) {
		padding: 3.3rem 1.6rem 0;
		width: 100%;
	}
`

const Logo = styled.div`
	@media screen and (max-width: 991px) {
		display: none;
	}
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
	margin: 1.2rem 0;
	font-size: 1.9rem;
	letter-spacing: 5.2px;
	line-height: 5px;
	padding-left: 6px;
`

const SecondLine = styled.div`
	font-size: 10.5px;
	margin-bottom: 15px;
	letter-spacing: 14.8px;
	margin-top: 0;
	padding-left: 7px;
	text-transform: uppercase;
`

const Title = styled.h1`
	font-size: 4.55rem;
	font-weight: 500;
	margin-bottom: 1.6rem;
`

const Description = styled.p`
	margin-bottom: 16px;
	line-height: 1.5;
`

const Button = styled.button`
	transition: all 0.5s;
	/* background-color: rgba(0, 0, 0, 0.2); */
	background-color: transparent;
	color: #fff;
	border: solid 1px var(--color-white);
	padding: 0.5rem;
	font-size: 13px;
	font-family: 'Muli', sans-serif;
	text-transform: uppercase;


    cursor: pointer;
    display: inline-block;
	padding-right: 0.4rem;
	@media (min-width: 576px) {
		margin-top: 0.8rem !important;
	}
`

const AwersomeIcon = styled(FontAwesomeIcon)`
	margin-left: 0.5rem;
	margin-right: 1rem;
	font-size: 16px;
`

export default function Header() {
	return (
		<>
			<Global />
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
					<AwersomeIcon icon={['fab', 'facebook-f']} />
					Zobacz projekt na facebooku
				</Button>
			</HeaderElement>
		</>
	)
}
