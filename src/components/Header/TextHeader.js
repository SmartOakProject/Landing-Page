import React, { Component } from "react"
import styled from "styled-components"

import logo from "../../images/logo-biale.png"

import { FaFacebookF } from "react-icons/fa"

const HeaderElement = styled.header`
    position: sticky;
    z-index: 23453453453534;
    top: 17vh;

    padding: 0rem 14rem 0 4.9rem;
    color: white;
    font-weight: 400;
    @media screen and (max-width: 900px) {
        /* padding: 3.3rem 14rem 0 9.6rem; */
    }
    @media screen and (max-width: 767px) {
        padding: 0 0 0fahandshelping 3rem;
        width: 100%;
    }
`

const Logo = styled.div`
    @media screen and (max-width: 991px) {
        display: none;
    }
`

const Icon = styled.img`
    width: 13rem;
    height: 13rem;
    @media screen and (max-width: 1200px) {
        width: 10rem;
        height: 10rem;
    }
    @media screen and (max-width: 991px) {
        display: none;
    }
`
const TextWrapper = styled.div`
    width: 50%;
    height: 200vh;
    color: #000;
    /* display: inline-block; */
    position: absolute;
    z-index: 3;
    top: 0;

    @media screen and (max-width: 771px) {
        width: 80vw;
        height: 300vh;
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
    margin-bottom: 10px;
    letter-spacing: 14.8px;
    margin-top: 0;
    padding-left: 7px;
    text-transform: uppercase;
`

const Title = styled.h1`
    font-size: 3.7rem;
    font-weight: 500;
    margin-bottom: 1rem;
    @media screen and (max-width: 771px) {
        font-size: 2.4rem;
    }
`

const Description = styled.p`
    font-size: 1.4rem;
    line-height: 1.4;
    color: #fff;
    @media screen and (max-width: 991px) {
    }
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
                <TextWrapper>
                    <HeaderElement
                        style={{
                            zIndex: this.props.zindex,
                        }}
                    >
                        <Logo>
                            <Icon src={logo} alt="NeuroN Foundation Logo" />

                            <Name>
                                <FirstLine>Smart Oak</FirstLine>
                                <SecondLine>Project</SecondLine>
                            </Name>
                        </Logo>
                        <Title>{this.props.title}</Title>
                        <Description>{this.props.text}</Description>
                        {/* <Link
                        href="https://www.facebook.com/neuronfoundation/"
                        target="_blank"
                    >
                        <FbIcon />
                        Zobacz projekt na facebooku
                    </Link> */}
                    </HeaderElement>
                </TextWrapper>
            </>
        )
    }
}
