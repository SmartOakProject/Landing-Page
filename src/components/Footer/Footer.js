import React from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';

import {
    FaApple,
    FaGoogle,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaFacebookSquare,
} from 'react-icons/fa';

const Container = styled.div`
    background-color: ${({ darkFooter }) => (darkFooter ? '#000' : '#fff')};
    width: 100vw;
    max-width: 100%;

    top: 95vh;
    color: var(--color-white);
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.5rem;
    flex-flow: column wrap;
    @media screen and (max-width: 900px) {
        width: 100vw;
    }
`;

const FooterLink = styled.a`
    text-decoration: none;
    color: #0c6bf0;
    font-size: 1.1rem;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: ${({ alignCenter }) => (alignCenter ? 'center' : 'flex-start')};
    justify-content: ${({ justifyEnd }) => (justifyEnd ? 'flex-end' : 'flex-start')};
    width: 100%;
    padding: ${({ p0 }) => (p0 ? `0` : `1.5rem`)};
    &.pb3 {
        padding-bottom: 3rem;
    }
    @media screen and (max-width: 900px) {
        justify-content: ${({ justifyEnd }) => (justifyEnd ? 'center' : 'flex-start')};
        &.pb3 {
            padding-bottom: 1.5rem;
        }
    }
    @media screen and (max-width: 479px) {
        &.footerBottom {
            padding-top: 0;
        }
    }
`;

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
`;

const ListLink = styled.a`
    color: ${({ darkFooter }) => (darkFooter ? 'var(--color-white)' : 'var(--color-black)')};
    text-decoration: none;
    padding: 0 0.5rem;
    cursor: pointer;
    &:first-of-type {
        padding-left: 0;
    }
    &:hover {
        color: ${({ darkFooter }) => (darkFooter ? 'var(--color-white)' : 'var(--color-black)')};
        transition: 250ms all ease;
    }
    svg {
        font-size: 1.5rem;
    }
`;

// const SocialMediaLink = styled.a`
//     color: var(--color-black);
//     font-size: 1rem;
// `

const ListItem = styled.li`
    font-size: 1.25rem;
    padding: 0 1rem;
    &:first-of-type {
        padding-left: 0;
    }
`;

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
`;

const DownloadFromMarketplace = styled.div`
    margin: 0 1rem;
    padding: 0.75rem;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ darkFooter }) => (darkFooter ? '#000' : '#fff')};
    display: flex;
    flex-flow: row wrap;
    border: ${({ darkFooter }) => (darkFooter ? null : '1px solid var(--color-black)')};
    width: 175px;
    border-radius: 3px;
    transition: all 0.3s;
    &:last-of-type {
        margin-right: 0;
    }
    &:hover {
        transform: scale(1.04);
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
`;

const DownloadFromMarketplaceText = styled.p`
    font-size: ${({ small }) => (small ? '1.2rem' : '1.6rem')};
    color: ${({ darkFooter }) => (darkFooter ? 'var(--color-white)' : 'var(--color-gray)')};
    font-weight: 500;
    text-align: center;
    &:first-of-type {
        margin-bottom: 0.5rem;
    }
    @media screen and (max-width: 479px) {
        font-size: ${({ small }) => (small ? '0.95rem' : '1.15rem')};
    }
`;

const FooterSmallText = styled.p`
    font-size: 1.04rem;
    color: ${({ darkFooter }) => (darkFooter ? 'var(--color-white)' : 'var(--color-black)')};
    text-align: ${({ textAlignLeft }) => (textAlignLeft ? 'left' : 'right')};

    margin-bottom: 0.3rem;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media screen and (max-width: 479px) {
        text-align: ${({ textAlignLeft }) => (textAlignLeft ? 'left' : 'left')};
        text-align: center;
    }
`;

const menuItems = [
    {
        name: 'shop',
        path: '',
    },
    {
        name: 'download',
        path: '',
    },
    {
        name: 'support',
        path: '',
    },
    {
        name: 'contact',
        path: '',
    },
];

function FooterTopLeftMenu({ menuItems, darkFooter }) {
    const menuList = menuItems.map((menuItem, index) => {
        return (
            <ListItem key={index}>
                <ListLink darkFooter={darkFooter} href={menuItem.path}>
                    <FormattedMessage id={`general.${menuItem.name}`} />
                </ListLink>
            </ListItem>
        );
    });
    return <ListItemWrapper className="mainFooterMenu">{menuList}</ListItemWrapper>;
}

const DownloadFromMarketplaceWrapper = props => {
    const downloadFromMarketplaceContent = [
        {
            icon: FaApple,
            downloadText: 'Pobierz',
            marketName: 'App Store',
        },
        {
            icon: FaGoogle,
            downloadText: 'Pobierz',
            marketName: 'Google Play',
        },
    ];

    return downloadFromMarketplaceContent.map((singleDownload, index) => {
        return (
            <DownloadFromMarketplace darkFooter={props.darkFooter} key={index}>
                <Col className="imageCol">
                    <singleDownload.icon
                        className={`svgMarketPlace ${props.darkFooter ? 'white' : null}`}
                    />
                </Col>
                <Col className="marketPlaceCol">
                    <DownloadFromMarketplaceText darkFooter={props.darkFooter} small>
                        <FormattedMessage id="general.download" />
                    </DownloadFromMarketplaceText>
                    <DownloadFromMarketplaceText darkFooter={props.darkFooter}>
                        {singleDownload.marketName}
                    </DownloadFromMarketplaceText>
                </Col>
            </DownloadFromMarketplace>
        );
    });
};

const SocialmediaLinks = props => {
    const socialmediaMenu = [
        {
            path: '',
            icon: FaFacebookSquare,
        },
        {
            path: '',
            icon: FaTwitter,
        },
        {
            path: '',
            icon: FaInstagram,
        },
        {
            path: '',
            icon: FaYoutube,
        },
        {
            path: '',
            icon: FaLinkedin,
        },
    ];

    const menuItems = socialmediaMenu.map((menuItem, index) => {
        return (
            <ListItem key={index}>
                <ListLink darkFooter={props.darkFooter}>{<menuItem.icon />}</ListLink>
            </ListItem>
        );
    });
    return <ListItemWrapper className="socialmedia">{menuItems}</ListItemWrapper>;
};

const Footer = ({ darkFooter }) => {
    const intl = useIntl();
    return (
        <Container darkFooter={darkFooter}>
            <Row alignCenter className="pb3">
                <Col>
                    <FooterTopLeftMenu menuItems={menuItems} darkFooter={darkFooter} />
                </Col>
                <Col>
                    <Row p0 justifyEnd>
                        <DownloadFromMarketplaceWrapper darkFooter={darkFooter} />
                    </Row>
                </Col>
            </Row>
            <Row className="footerBottom" alignCenter>
                <Col className="footerBottomCol">
                    <SocialmediaLinks darkFooter={darkFooter} />
                </Col>
                <Col className="footerBottomCol">
                    <FooterSmallText darkFooter={darkFooter}>
                        &#9400; 2019 Smart Oak Project.
                        <FormattedMessage id="general.rights" />
                    </FooterSmallText>

                    <FooterSmallText darkFooter={darkFooter}>
                        <FormattedMessage id="general.websiteMadeBy" />{' '}
                        <FooterLink href="/">Progressio</FooterLink>
                    </FooterSmallText>

                    <FooterSmallText darkFooter={darkFooter}>
                        <FormattedMessage id="general.privacyPolicy" />
                    </FooterSmallText>
                </Col>
            </Row>
        </Container>
    );
};
export default Footer;
