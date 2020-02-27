import React, { useState, useEffect } from "react"
import styled from "styled-components"

const MobileListWrapper = styled.ul`
    position: ${props => (props.dropdown ? "static" : "fixed")};
    transition: ${props => (props.dropdown ? "none" : "all 0.45s ease")};
    top: 0;
    width: 100vw;
    max-width: 100%;
    display: none;
    background: #0e0e0e;
    color: var(--color-white);
    z-index: 999999999;
    padding-top: ${props => (props.dropdown ? "0rem" : "5rem")};

    @media screen and (max-width: 900px) {
        display: block;
    }
`
const ListWrapper = styled.ul`
    flex-direction: column;
    display: flex;
    overflow: ${props => (props.dropdown ? "visible" : "auto")};

    position: relative;
`
const MobileList = ({ open, dropdown, children }) => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    return (
        <MobileListWrapper
            dropdown={dropdown}
            style={{
                height: isOpen ? "110%" : 0,
            }}
        >
            <ListWrapper dropdown={dropdown}>
                {isOpen ? children : null}
            </ListWrapper>
        </MobileListWrapper>
    )
}

export default MobileList
