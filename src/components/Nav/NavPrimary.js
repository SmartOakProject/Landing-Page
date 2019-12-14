import React, { Component } from "react"
import styled, { keyframes, css } from "styled-components"
import { Link } from "gatsby"
import { unique } from "../../utils"
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaSearch,
    FaShoppingCart,
    FaDownload,
    FaTimes,
    FaHandHoldingHeart,
} from "react-icons/fa"
import { projekctLinks } from "../MobileNav/index"

import Submenu from "./Submenu"

const StyledLink = styled.a`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem ${props => (props.middleNavPadding ? "1.5rem" : "0.8rem")};
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin-left: 1rem;
    }
`

const StyledGatsbyLink = styled(props => <Link {...props} />)`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem ${props => (props.middleNavPadding ? "1.5rem" : "0.8rem")};
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        margin-left: 1rem;
    }
`
const Container = styled.div`
    height: 4.3rem;
    min-height: 5rem;
    background-color: #0e0e0e;
    line-height: 1.5;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 900px) {
        display: none;
    }
`

const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1.6rem;

    a > svg {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 1rem;
    }
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const animation = props =>
    css`
    1s ${fadeIn} ease-out;
  `

const PulseButton = styled.button`
    animation: ${animation};
`

const MiddleNav = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    animation: ${props => props.anim && animation};
`

const RightNav = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-right: 1.6rem;
`
const DropdownLink = styled.li`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    list-style-type: none;
    padding: 1.2rem 0.8rem;
    cursor: pointer;
    position: relative;
`

const DropDownWrapper = styled.ul`
    background-color: #000;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    z-index: 100001;
`

const SearchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: 1s ${fadeIn} ease-out;
    position: relative;

    svg {
        color: rgba(255, 255, 255, 0.85);
        margin-right: 0.8rem;
        margin-left: 0.8rem;
        cursor: pointer;
    }
`

const Input = styled.input`
    width: 39rem;
    background-color: inherit;
    border: none;
    border-radius: 14px;
    height: 2.2rem;
    color: rgba(255, 255, 255, 0.85);
    outline: none;
    padding: 1rem 3rem;
    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
        -webkit-appearance: none;
    }
`

export default class NavPrimary extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLangMenu: false,
            showProjectMenu: false,
            showSearch: false,
            searchAnimation: false,
            searchedPhrase: "",
            searchedLinks: [],
        }
    }

    onChangeLangButtonClick = () => {
        this.setState(prevState => ({
            showLangMenu: !prevState.showLangMenu,
        }))
    }

    handleSearchInputChange = event => {
        this.setState(
            {
                searchedPhrase: event.target.value,
            },
            this.searchInMenu
        )
    }

    clearIfEmpty = () => {
        if (this.state.searchedPhrase === "") {
            this.setState({
                searchedLinks: [],
            })
        }
    }

    searchInMenu = () => {
        let links = []
        projekctLinks.forEach(link => {
            if (link.linkText.includes(this.state.searchedPhrase)) {
                links.push(link)
                links = unique(links, "linkText")
                this.setState(prevState => ({
                    searchedLinks: links,
                }))
            }
        })
    }

    render() {
        const languages = [
            {
                path: "/",
                text: "ENG",
            },
            {
                path: "/",
                text: "DE",
            },
            {
                path: "/",
                text: "FR",
            },
            {
                path: "/",
                text: "ES",
            },
        ]
        const projekctLinks = [
            {
                path: "/",
                text: "Home",
            },
            {
                path: "/neuron-foundation",
                text: "NeuroN Foundation",
            },
            {
                path: "/new-neuropsychiatry",
                text: "New Neuropsychiatry",
            },
            {
                path: "/i-mundus",
                text: "iMundus",
            },
            {
                path: "/oakes-innovate",
                text: "Oakes Innovate",
            },
            {
                path: "/n-media",
                text: "N Media",
            },
            {
                path: "oakes-clinic",
                text: "Oakes Clinic",
            },
            {
                path: "oak-atlantis",
                text: "Oak Atlantis",
            },
            {
                path: "neuron-currency",
                text: "NeuroN Currency",
            },
            {
                path: "about-us",
                text: "O nas",
            },
        ]
        return (
            <Container>
                <SocialIcons>
                    <Link to="">
                        <FaFacebookF />
                    </Link>
                    <Link to="">
                        <FaInstagram />
                    </Link>
                    <Link to="">
                        <FaTwitter />
                    </Link>
                    <Link to="">
                        <FaYoutube />
                    </Link>
                    <Link to="">
                        <FaLinkedin />
                    </Link>
                </SocialIcons>
                {this.state.showSearch ? (
                    <SearchWrapper>
                        <FaSearch />
                        <Input
                            type="search"
                            placeholder="Szukaj w Smart Oak Project"
                            onChange={event => {
                                this.handleSearchInputChange(event)
                                this.clearIfEmpty()
                            }}
                            value={this.state.searchedPhrase}
                        />
                        <DropDownWrapper>
                            {this.state.searchedLinks.map((link, index) => {
                                return (
                                    <DropdownLink key={index} to={link.path}>
                                        {link.linkText}
                                    </DropdownLink>
                                )
                            })}
                        </DropDownWrapper>
                        <FaTimes
                            onClick={() =>
                                this.setState({
                                    showSearch: false,
                                    searchAnimation: true,
                                })
                            }
                        />
                    </SearchWrapper>
                ) : (
                    <MiddleNav anim={this.state.searchAnimation}>
                        <StyledLink
                            onClick={() => this.setState({ showSearch: true })}
                            middleNavPadding
                            to="/"
                        >
                            Szukaj
                            <FaSearch />
                        </StyledLink>
                        <StyledLink middleNavPadding to="/">
                            Sklep
                            <FaShoppingCart />
                        </StyledLink>
                        <StyledLink middleNavPadding to="/">
                            Wesprzyj
                            <FaHandHoldingHeart />
                        </StyledLink>
                        <StyledLink middleNavPadding to="/">
                            Pobierz
                            <FaDownload />
                        </StyledLink>
                    </MiddleNav>
                )}
                <RightNav>
                    <DropdownLink
                        onMouseLeave={() =>
                            this.setState({ showProjectMenu: false })
                        }
                        onClick={() => this.setState({ showProjectMenu: true })}
                    >
                        O projekcie
                        {this.state.showProjectMenu && (
                            <Submenu left="-41px" width data={projekctLinks} />
                        )}
                    </DropdownLink>
                    <StyledGatsbyLink to="/contact">Kontakt</StyledGatsbyLink>
                    <DropdownLink
                        onMouseLeave={() =>
                            this.setState({ showLangMenu: false })
                        }
                        onClick={() => this.setState({ showLangMenu: true })}
                    >
                        PL
                        {this.state.showLangMenu && (
                            <Submenu left="-6px" data={languages} />
                        )}
                    </DropdownLink>
                </RightNav>
            </Container>
        )
    }
}
