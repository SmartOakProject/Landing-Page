import React from "react"
import styled from "styled-components"

import Buttons from "./common/Buttons"

import logo from "../images/logo-biale.png"
import logoBlack from "../images/logo-czarne.png"

const TextWrapper = styled.div`
    height: ${props =>
        props.isSecond ? "300vh" : props.isLast ? "150vh" : "250vh"};
    color: #000;
    position: absolute;

    z-index: ${props => props.zIndex};
    top: ${props => (props.isSecond ? "-175px" : "0")};
    @media screen and (max-width: 1200px) {
        width: 100vw;
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        height: ${props =>
            props.isSecond ? "320vh" : props.isLast ? "175vh" : "270vh"};
    }
`
const HeaderElement = styled.header`
    position: sticky;
    top: 17vh;
    width: 50vw;
    padding: 0rem 3rem 0 4.9rem;
    color: ${props => (props.isBlack ? "#000" : "#fff")};
    font-weight: 400;
    @media screen and (max-width: 1100px) {
        width: 65vw;
    }
    @media screen and (max-width: 900px) {
        padding: 0 1.6rem 0 6.6rem;
        top: 14vh;
    }
    @media screen and (max-width: 767px) {
        padding: 0 2.6rem 0;
        width: 100%;
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        top: 22vh;
        width: 95%;
    }
`

const Logo = styled.div``

const Icon = styled.img`
    width: 13rem;
    height: 13rem;
    @media screen and (max-width: 1200px) {
        width: 10rem;
        height: 10rem;
    }

    @media screen and (max-width: 646px) {
        width: 9rem;
        height: 9rem;
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        display: none;
    }
`

const Name = styled.div`
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        display: none;
    }

    @media screen and (max-width: 636px) {
        display: none;
    }
`

const FirstLine = styled.div`
    margin: 1.2rem 0;
    font-size: 1.9rem;
    letter-spacing: 0.52rem;
    line-height: 0.5rem;
    padding-left: 0.6rem;
`

const SecondLine = styled.div`
    font-size: 10.5px;
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
    color: inherit;
    margin-bottom: 1rem;
    @media screen and (max-width: 991px) {
    }
`

const Text = ({ z, isSecond, isLast, isBlack, title, btns, desc, btnPath }) => {
    console.log(btns)

    return (
        <TextWrapper
            zIndex={z}
            isSecond={isSecond}
            isLast={isLast}
            isBlack={isBlack}
        >
            <HeaderElement isBlack={isBlack}>
                <Logo>
                    <Icon
                        src={isBlack ? logoBlack : logo}
                        alt="NeuroN Foundation Logo"
                    />
                    <Name>
                        <FirstLine>Smart Oak</FirstLine>
                        <SecondLine>Project</SecondLine>
                    </Name>
                </Logo>
                <Title>{title}</Title>
                <Description>{desc}</Description>
                {btns
                    ? btns.map((btn, i) => {
                          return (
                              <Buttons
                                  isBlack={isBlack}
                                  isMore={i !== 0}
                                  btnLink={`${btnPath}.${i}.btnLink`}
                                  btnType={`${btnPath}.${i}.btnType`}
                                  btnText={`${btnPath}.${i}.btnText`}
                              />
                          )
                      })
                    : null}
            </HeaderElement>
        </TextWrapper>
    )
}
export default Text
