import React from "react"
import styled from "styled-components"

import { Link, useIntl } from "gatsby-plugin-intl"
import { subpageLinks } from "../common/subpageLinks"

const Container = styled.div`
    height: 5rem;
    min-height: 5rem;
    background-color: #151515;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    /* -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0); */
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
    &:hover {
        border-bottom-color: #2a80f8;
    }
    @media screen and (max-width: 1050px) {
        padding: 1.2rem 0.6rem;
    }
`

const activeStyles = {
    borderBottomColor: "#2a80f8",
}

export default function NavSecondary() {
    const intl = useIntl()
    return (
        <Container>
            {subpageLinks.map((e, i) => {
                return (
                    <StyledLink key={i} to={e.path} activeStyle={activeStyles}>
                        {e.text}
                    </StyledLink>
                )
            })}
        </Container>
    )
}
