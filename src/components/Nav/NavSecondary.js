import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
    height: 5rem;
    min-height: 5rem;
    background-color: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    top: 0;
    z-index: 100000;
    margin-top: -1px;

    @media screen and (max-width: 900px) {
        display: none;
    }
`

const StyledLink = styled(props => <Link {...props} />)`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem 0.8rem;
    display: flex;
    align-items: center;
    border: none;
    line-height: 1;

    border-bottom: solid 2px #151515;
    @media screen and (max-width: 1050px) {
        padding: 1.2rem 0.6rem;
    }
`

const activeStyles = {
    borderBottomColor: "#2a80f8",
}

const projekctLinks = [
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

export default function NavSecondary() {
    return (
        <Container>
            {projekctLinks.map((e, i) => (
                <StyledLink key={i} to={e.path} activeStyle={activeStyles}>
                    {e.linkText}
                </StyledLink>
            ))}
        </Container>
    )
}
