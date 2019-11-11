import React, { Component } from "react"
import styled from "styled-components"
import Global from "../GlobalStyles/GlobalStyles"
import headerBg from "../../images/header-bg.jpeg"
import logo from "../../images/logo-biale.png"
import logoBlack from "../../images/logo-czarne.png"
import { FaFacebookF } from "react-icons/fa"

const Image = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${headerBg}) no-repeat center center / cover;

    @media screen and (max-width: 425px) {
        background-position: 73% 0;
        height: calc(56.5rem * 0.8);
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
        height: calc(56.5rem * 0.8);
    }
`

const HeaderElement = styled.header`
    /* position: fixed; */
    z-index: 2;
    /* width: 50%; */
    /* padding: 0.8rem 1.6rem 0 9.6rem; */
    color: white;
    font-weight: 400;
    @media screen and (max-width: 900px) {
        padding: 3.3rem 1.6rem 0 9.6rem;
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

const Name = styled.div``

const FirstLine = styled.div`
    margin: 1.2rem 0;
    font-size: 1.9rem;
    letter-spacing: 0.52rem;
    line-height: 0.5rem;
    padding-left: 0.6rem;
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
    font-size: 1.4rem;
    line-height: 1.5;
`

const Filler = styled.div`
    width: 100%;
    height: 56.5rem;
`

const Link = styled.a`
    background-color: transparent;
    text-decoration: none;
    color: var(--color-white);
    border: solid 0.1rem var(--color-white);
    padding: 0.5rem;
    font-size: 1.3rem;
    font-family: "Muli", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    padding-right: 0.4rem;
`

const FbIcon = styled(FaFacebookF)`
    margin-left: 0.5rem;
    margin-right: 1rem;
    font-size: 1.6rem;
    transform: translateY(0.3rem);
`

export default class Text extends Component {
    render() {
        return (
            <>
                <HeaderElement
                    style={{
                        color: this.props.color,
                        zIndex: this.props.zindex,
                    }}
                >
                    <Logo>
                        {this.props.logo ? (
                            <Icon src={logo} alt="NeuroN Foundation Logo" />
                        ) : (
                            <Icon
                                src={logoBlack}
                                alt="NeuroN Foundation Logo"
                            />
                        )}

                        <Name>
                            <FirstLine>Smart Oak</FirstLine>
                            <SecondLine>Project</SecondLine>
                        </Name>
                    </Logo>
                    <Title>{this.props.title}</Title>
                    <Description style={{ color: this.props.color }}>
                        {this.props.text}
                    </Description>
                    {/* <Link
                        href="https://www.facebook.com/neuronfoundation/"
                        target="_blank"
                    >
                        <FbIcon />
                        Zobacz projekt na facebooku
                    </Link> */}
                </HeaderElement>
            </>
        )
    }
}
