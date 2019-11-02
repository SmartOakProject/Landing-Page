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
    top: 0;
    z-index: 100000;

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
    padding: 9px 1.25rem 15px;
    border-bottom: solid 2px #151515;
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
        path: "/new-neuropsychiatry",
        linkText: "New Neuropsychiatry",
    },
    {
        path: "/neuron-direction",
        linkText: "NeuroN Direction",
    },
    {
        path: "oakes-innovate",
        linkText: "Oakes Innovate",
    },
    {
        path: "ntv-channel",
        linkText: "NTV Channel",
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
            {projekctLinks.map(e => (
                <StyledLink to={e.path} activeStyle={activeStyles}>
                    {e.linkText}
                </StyledLink>
            ))}
        </Container>
    )
}
