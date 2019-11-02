import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SubmenuWrapper = styled.ul`
    width: 4rem;
    right: -4px;
    position: absolute;
    background-color: #0e0e0e;
    z-index: 100000000000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const SubmenuListItem = styled.li`
    margin: 1.6rem 0;
    list-style-type: none;
    &:first-child {
        margin-top: 2.4rem;
    }
`

const StyledLink = styled(props => <Link {...props} />)`
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: 1.2rem 0.8rem;
    cursor: pointer;
`

const languages = [
    {
        path: "/",
        language: "ENG",
    },
    {
        path: "/",
        language: "DE",
    },
    {
        path: "/",
        language: "FR",
    },
    {
        path: "/",
        language: "ES",
    },
]

export default function Submenu() {
    return (
        <SubmenuWrapper>
            {languages.map((e, i) => {
                return (
                    <SubmenuListItem key={i}>
                        <StyledLink to={e.path}>{e.language}</StyledLink>
                    </SubmenuListItem>
                )
            })}
        </SubmenuWrapper>
    )
}
