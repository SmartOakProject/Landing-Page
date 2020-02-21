import React, { Component } from "react"
import styled from "styled-components"
import { animateScroll } from "react-scroll"
import { FaAngleUp } from "react-icons/fa"

const Container = styled.div`
    position: fixed;
    bottom: 6.5vh;
    right: 3vw;
    z-index: 99999;

    svg {
        fill: rgb(42, 128, 248);
        font-size: 2rem;
        cursor: pointer;
    }
`

export default class NavPrimary extends Component {
    onBtnClick = () => {
        animateScroll.scrollToTop()
    }

    render() {
        return (
            <Container>
                <FaAngleUp onClick={this.onBtnClick} />
            </Container>
        )
    }
}
