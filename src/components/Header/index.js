import React, { Component } from "react"
import styled from "styled-components"
import Global from "../GlobalStyles/GlobalStyles"
import headerBg from "../../images/header-bg.jpeg"
import logo from "../../images/logo-biale.png"
import { FaFacebookF } from "react-icons/fa"

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
        height: 56.5rem;
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
        height: 56.5rem;
    }
`

const HeaderElement = styled.header`
    position: fixed;
    z-index: 21231232132131;
    width: 71%;
    padding: 0.8rem 1.6rem 0 9.6rem;
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
    margin-bottom: 1.6rem;
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

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scroll: 70,
        }
        this.image = React.createRef()
    }
    componentDidMount() {
        this.prev = window.scrollY
        window.addEventListener("scroll", e => this.handleNavigation(e))
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleNavigation = e => {
        const window = e.currentTarget
        let max
        if (this.image.current) {
            max = this.image.current.offsetHeight
        }

        let scrollPercent = (window.pageYOffset / max) * 100
        let factor = 3.6
        let currentScroll = scrollPercent / factor + 70
        if (currentScroll <= 100) {
            requestAnimationFrame(() => {
                this.setState({ scroll: currentScroll })
            })
        }
        this.prev = window.scrollY
    }

    render() {
        return (
            <>
                <Global />
                <Background
                    style={{
                        clipPath: `polygon(0 0, 100% 0, 100% ${this.state.scroll}%, 32% 100%, 0 ${this.state.scroll}%)`,
                        WebkitClipPath: `polygon(0 0, 100% 0, 100% ${this.state.scroll}%, 32% 100%, 0 ${this.state.scroll}%)`,
                    }}
                    ref={this.image}
                >
                    <Image />
                    <Filter />
                    {this.props.children}
                </Background>
                <Filler />
            </>
        )
    }
}
