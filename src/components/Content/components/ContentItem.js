import React from "react"
import styled from "styled-components"
import { FaFacebookF } from 'react-icons/fa';

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
	padding: 4.8rem 0;
	:nth-child(2n) {
		flex-direction: row-reverse;
	}
	@media (max-width: 767px) {
		width: 100%;
		flex-direction: column;
		:nth-child(2n) {
			flex-direction: column;
		}
		transform: translateX(0);
	}
`

const Image = styled.img`
	display: block;
	background-color: orangered;
	height: 35rem;
	width: 35rem;
	border-radius: 10%;
	box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.5);
	@media (max-width: 767px) {
		margin-bottom: 4.8rem;
	}
`

const ContentItemElement = styled.div`
	width: 50%;
	min-height: 30rem;
	line-height: 1.5;
	color: #393939;
	@media (max-width: 767px) {
		width: 100%;
		padding: 0 1.5rem;
		text-align: center;
	}
`

const Title = styled.h2`
	margin: 2.4rem 0 0.8rem;
	font-size: 2.4rem;
	line-height: 1.2;
	color: #0e196e;
	font-weight: 300;
`

const Description = styled.p`
	margin: 1.6rem 0;
	font-size: 1.3rem;
`

const Link = styled.a`
	background-color: transparent;
	text-decoration: none;
	color: var(--color-black);
	border: solid 0.1rem var(--color-black);
	padding: 0.5rem;
	font-size: 1.3rem;
	font-family: 'Muli', sans-serif;
	text-transform: uppercase;
	cursor: pointer;
	padding-right: 0.4rem;
	transition: all 0.3s ease;
	:hover {
		background-color: lightgray;
	}
`

const FbIcon = styled(FaFacebookF)`
	margin-left: 0.5rem;
	margin-right: 1rem;
	font-size: 1.6rem;
	font-weight: 200;
	transform: translateY(0.3rem);
`

export default function Content(props) {
	return (
		<Container>
			<Image src="https://picsum.photos/250" />
			<ContentItemElement>
				<Title>{props.title}</Title>
				<Description>{props.text}</Description>
				{props.fbPost ? (
					<Link href={props.fbLink} target="_blank">
						<FbIcon />
						Zobacz projekt na facebooku
					</Link>
				) : (
					""
				)}
			</ContentItemElement>
		</Container>
	)
}
