import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.div`
    height: 4.3rem;
    min-height: 4.3rem;
    background-color: #151515;
    line-height: 1.5;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    height: 100%;

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

    &:hover {
        border-bottom-color: #2a80f8;
    }
`

const projekctLinks = [
    {
        path: "",
        linkText: "New Neuropsychiatry",
    },
    {
        path: "",
        linkText: "NeuroN Direction",
    },
    {
        path: "",
        linkText: "Oakes Innovate",
    },
    {
        path: "",
        linkText: "NTV Channel",
    },
    {
        path: "",
        linkText: "Oakes Clinic",
    },
    {
        path: "",
        linkText: "Oak Atlantis",
    },
    {
        path: "",
        linkText: "NeuroN Currency",
    },
    {
        path: "",
        linkText: "O nas",
    },
]
export default function NavSecondary() {
    return (
        <Container>
            {projekctLinks.map(e => (
                <StyledLink to={e.path}>{e.linkText}</StyledLink>
            ))}
        </Container>
    )
}
