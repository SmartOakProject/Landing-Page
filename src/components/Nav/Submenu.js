import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const SubmenuWrapper = styled.ul`
    width: ${props => (props.width ? "12vw" : "")};
    left: ${props => props.left};
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

export default function Submenu(props) {
    return (
        <SubmenuWrapper width={props.width} left={props.left}>
            {props.data.map((e, i) => {
                return (
                    <SubmenuListItem key={i}>
                        <StyledLink to={e.path}>{e.text}</StyledLink>
                    </SubmenuListItem>
                )
            })}
        </SubmenuWrapper>
    )
}
