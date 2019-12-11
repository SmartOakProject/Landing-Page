import React from "react"
import styled from "styled-components"
import {
    FaApple,
    FaGoogle,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaFacebookSquare,
} from "react-icons/fa"

const Container = styled.div`
    background-color: ${props => props.isHomepage ? '#000' : '#fff'};
    width: 100vw;
    color: var(--color-white);
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    flex-flow: column wrap;
`

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: ${props => (props.alignCenter ? "center" : "flex-start")};
    justify-content: ${props => (props.justifyEnd ? "flex-end" : "flex-start")};
    width: 100%;
    padding: ${props => (props.p0 ? `0` : `1.5rem`)};
    &.pb3 {
        padding-bottom: 3rem;
    }
    @media screen and (max-width: 900px) {
        justify-content: ${props =>
            props.justifyEnd ? "center" : "flex-start"};
        &.pb3 {
            padding-bottom: 1.5rem;
        }
    }
    @media screen and (max-width: 479px) {
        &.footerBottom {
            padding-top: 0;
        }
    }
`

const Col = styled.div`
    flex: 1 1 50%;
    width: 50%;
    &.marketPlaceCol {
        flex: 1 1 50%;
        width: 50%;
    }
    &.imageCol {
        flex: 1 1 25%;
        width: 25%;
    }
    svg {
        &.svgMarketPlace {
            color: var(--color-gray);
            font-size: 3.75rem;
            margin: 0 auto;
            display: block;
            &.white {
                color: var(--color-white);
            }
        }
    }
    @media screen and (max-width: 900px) {
        flex: 1 1 100%;
        width: 100%;
        &.footerBottomCol {
            flex: 1 1 50%;
            width: 50%;
        }
    }
    @media screen and (max-width: 479px) {
        &.imageCol {
            flex: 1 1 18%;
            width: 18%;
        }
        &.footerBottomCol {
            flex: 1 1 100%;
            width: 100%;
        }
        svg {
            &.svgMarketPlace {
                font-size: 3rem;
            }
        }
    }
`

const ListLink = styled.a`
    color: ${props => props.isHomepage ? 'var(--color-white)' : 'var(--color-black)'} ;
    text-decoration: none;
    padding: 0 0.5rem;
    cursor: pointer;
    &:first-of-type {
        padding-left: 0;
    }
    &:hover {
        color: ${props => props.isHomepage ? 'var(--color-white)' : 'var(--color-white)'} ;
        transition: 250ms all ease;
    }
`

const SocialMediaLink = styled.a`
    color: var(--color-black);
    font-size: 1rem;
`

const ListItem = styled.li`
    font-size: 1.25rem;
    padding: 0 1rem;
    &:first-of-type {
        padding-left: 0;
    }
`

const ListItemWrapper = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    white-space: pre;
    @media screen and (max-width: 900px) {
        padding-bottom: 3rem;
        justify-content: center;
        &.socialmedia {
            padding-bottom: 0rem;
            justify-content: flex-start;
        }
    }
    @media screen and (max-width: 479px) {
        &.socialmedia {
            justify-content: center;
            padding-bottom: 1.5rem;
        }
        &.mainFooterMenu {
            padding: 0;
            li {
                width: 25%;
                text-align: center;
                margin-bottom: 1.5rem;
            }
        }
        @media screen and (max-width: 440px) {
            &.mainFooterMenu {
                li {
                    width: 33.33%;
                }
            }
        }
    }
`

const DownloadFromMarketplace = styled.div`
    margin: 0 1rem;
    padding: 0.75rem;
    align-items: center;
    justify-content: flex-start;
    background-color: ${props => props.isHomepage ? '#000' : '#fff'};
    display: flex;
    flex-flow: row wrap;
    border: ${props => props.isHomepage ? null : '1px solid var(--color-black)'};
    width: 175px;
    &:last-of-type {
        margin-right: 0;
    }
    @media screen and (max-width: 900px) {
        &:first-of-type {
            margin-left: 0;
        }
    }
    @media screen and (max-width: 479px) {
        width: 125px;
        margin: 0.5rem;
        &:first-of-type {
            margin-left: 0;
        }
    }
`

const DownloadFromMarketplaceText = styled.p`
    font-size: ${props => (props.small ? "1.2rem" : "1.6rem")};
    color: ${props => props.isHomepage ? 'var(--color-white)' : 'var(--color-gray)'};
    font-weight: 500;
    text-align: center;
    &:first-of-type {
        margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 479px) {
        font-size: ${props => (props.small ? "0.95rem" : "1.15rem")};
    }
`

const FooterSmallText = styled.p`
    font-size: 1.04rem;
    color: ${props => props.isHomepage ? 'var(--color-white)' : 'var(--color-black)' };
    text-align: ${props => (props.textAlignLeft ? "left" : "right")};

    margin-bottom: 0.3rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media screen and (max-width: 479px) {
        text-align: ${props => (props.textAlignLeft ? "left" : "left")};
        text-align: center;
    }
`

const menuItems = [
    {
        name: "Sklep",
        path: "",
    },
    {
        name: "Pobierz",
        path: "",
    },
    {
        name: "Wydarzenia",
        path: "",
    },
    {
        name: "Kontakt",
        path: "",
    },
    {
        name: "O projekcie",
        path: "",
    },
]

function FooterTopLeftMenu(props) {
    const menuList = props.menuItems.map((menuItem, index) => {
        return (
            <ListItem key={index}>
                <ListLink isHomepage={props.isHomepage} href={menuItem.path}>{menuItem.name}</ListLink>
            </ListItem>
        )
    })
    return (
        <ListItemWrapper className="mainFooterMenu">{menuList}</ListItemWrapper>
    )
}

class DownloadFromMarketplaceWrapper extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            downloadFromMarketplaceContent: [
                {
                    icon: FaApple,
                    downloadText: "Pobierz",
                    marketName: "App Store",
                },
                {
                    icon: FaGoogle,
                    downloadText: "Pobierz",
                    marketName: "Google Play",
                },
            ],
        }
    }

    render() {
        const singleDownload = this.state.downloadFromMarketplaceContent.map(
            (singleDownload, index) => {
                return (
                    <DownloadFromMarketplace isHomepage={this.props.isHomepage} key={index}>
                        <Col className="imageCol">
                            {<singleDownload.icon className={`svgMarketPlace ${this.props.isHomepage ? 'white' : null}`} />}
                        </Col>
                        <Col className="marketPlaceCol">
                            <DownloadFromMarketplaceText isHomepage={this.props.isHomepage} small>
                                {singleDownload.downloadText}
                            </DownloadFromMarketplaceText>
                            <DownloadFromMarketplaceText isHomepage={this.props.isHomepage}>
                                {singleDownload.marketName}
                            </DownloadFromMarketplaceText>
                        </Col>
                    </DownloadFromMarketplace>
                )
            }
        )
        return singleDownload
    }
}

class SocialmediaLinks extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            socialmediaMenu: [
                {
                    path: "",
                    icon: FaFacebookSquare,
                },
                {
                    path: "",
                    icon: FaTwitter,
                },
                {
                    path: "",
                    icon: FaInstagram,
                },
                {
                    path: "",
                    icon: FaYoutube,
                },
                {
                    path: "",
                    icon: FaLinkedin,
                },
            ],
        }
    }
    render() {
        const menuItems = this.state.socialmediaMenu.map((menuItem, index) => {
            return (
                <ListItem key={index}>
                    <ListLink isHomepage={this.props.isHomepage}>{<menuItem.icon />}</ListLink>
                </ListItem>
            )
        })
        return (
            <ListItemWrapper className="socialmedia">
                {menuItems}
            </ListItemWrapper>
        )
    }
}

export default function Footer(props) {
    return (
        <Container isHomepage={props.isHomepage}>
            <Row alignCenter className="pb3">
                <Col>
                    <FooterTopLeftMenu menuItems={menuItems} isHomepage={props.isHomepage} />
                </Col>
                <Col>
                    <Row p0 justifyEnd>
                        <DownloadFromMarketplaceWrapper isHomepage={props.isHomepage} />
                    </Row>
                </Col>
            </Row>
            <Row className="footerBottom" alignCenter>
                <Col className="footerBottomCol">
                    <SocialmediaLinks isHomepage={props.isHomepage} />
                </Col>
                <Col className="footerBottomCol">
                    <FooterSmallText isHomepage={props.isHomepage}>
                        &#9400; 2019 Smart Oak Project. Wszelkie prawa
                        zastrzeżone.
                    </FooterSmallText>
                    <FooterSmallText isHomepage={props.isHomepage}>
                        <a>Polityka prywatności</a>
                    </FooterSmallText>
                    <FooterSmallText isHomepage={props.isHomepage}>
                        Strona zrealizowana przez firmę Progressio
                    </FooterSmallText>
                </Col>
            </Row>
        </Container>
    )
}
