import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo-biale.png"
import styled, { keyframes } from "styled-components"

import MobileList from "./MobileList"
import MobileNavBtn from "./MobileNavBtn"

const appear = keyframes`
 0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const MobileNavMenu = styled.div`
    position: fixed;
    top: 0;
    z-index: 9323232;
    align-items: center;
    justify-content: space-between;
    background: black;
    width: 100%;
    display: none;
    padding: 0 2rem;
    height: 5rem;

    @media screen and (max-width: 900px) {
        display: flex;
    }

    @media only screen and (orientation: landscape) {
        img {
            height: 4.5rem;
        }
    }
`

const MobileNavItem = styled.li`
    padding: 1.7rem 1rem;
    margin-left: 2rem;
    list-style-type: none;
    width: 90%;
    border-bottom: 1px solid #393939;
    opacity: 0;
    animation: 0.5s ${appear} forwards;
    animation-delay: 0.2s;

    a {
        display: block;
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
    }

    @media only screen and (orientation: landscape) {
        font-size: 1.4rem;
        padding: 1rem;
    }
`

const Input = styled.input`
    width: 90%;
    background-color: inherit;
    border: none;
    border-radius: 14px;
    height: 3rem;
    color: rgba(255, 255, 255, 0.85);
    padding: 1rem 2rem;
    outline: none;
    background: #282828;
    margin: 3rem auto;
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        -webkit-appearance: none;
    }
`

const navigationLinks = [
    {
        path: "",
        linkText: "Sklep",
    },
    {
        path: "",
        linkText: "Pobierz",
    },
    {
        path: "",
        linkText: "O Projekcie",
    },
    {
        path: "",
        linkText: "Kontakt",
    },
    {
        path: "",
        linkText: "PL",
    },
]

export const projekctLinks = [
    {
        path: "/",
        linkText: "Home",
    },
    {
        path: "/neuron-foundation",
        linkText: "NeuroN Foundation",
    },
    {
        path: "/new-neuropsychiatry",
        linkText: "New Neuropsychiatry",
    },
    {
        path: "/i-mundus",
        linkText: "iMundus",
    },
    {
        path: "/oakes-innovate",
        linkText: "Oakes Innovate",
    },
    {
        path: "/n-media",
        linkText: "N Media",
    },
    {
        path: "oakes-clinic",
        linkText: "Oakes Clinic",
    },
    {
        path: "oak-atlantis",
        linkText: "Oak Atlantis",
    },
    {
        path: "neuron-currency",
        linkText: "NeuroN Currency",
    },
    {
        path: "about-us",
        linkText: "O nas",
    },
]

class MobileNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            menuOpen2: false,
        }
    }

    render() {
        const { menuOpen, menuOpen2 } = this.state
        return (
            <>
                <MobileNavMenu>
                    <MobileNavBtn
                        open={menuOpen}
                        icon
                        onClick={() =>
                            this.setState({
                                menuOpen2: false,
                                menuOpen: !this.state.menuOpen,
                            })
                        }
                        color="white"
                    />

                    <img
                        style={{ height: "4rem" }}
                        src={logo}
                        alt="Smart Oak Project"
                    />

                    <MobileNavBtn
                        open={menuOpen2}
                        onClick={() =>
                            this.setState({
                                menuOpen: false,
                                menuOpen2: !this.state.menuOpen2,
                            })
                        }
                        color="white"
                    />
                </MobileNavMenu>
                <MobileList open={menuOpen}>
                    <Input
                        type="search"
                        placeholder="Szukaj w Smart Oak Project"
                    />

                    {navigationLinks.map((e, i) => (
                        <MobileNavItem key={i}>
                            <a to={e.path}>{e.linkText}</a>
                        </MobileNavItem>
                    ))}
                </MobileList>
                <MobileList open={menuOpen2}>
                    <h3
                        style={{
                            padding: "1.7rem 1.4rem",
                            marginLeft: "2rem",
                        }}
                    >
                        NASZE PROJEKTY
                    </h3>
                    {projekctLinks.map((e, i) => (
                        <MobileNavItem key={i}>
                            <Link to={e.path}>{e.linkText}</Link>
                        </MobileNavItem>
                    ))}
                </MobileList>
            </>
        )
    }
}
export default MobileNav
