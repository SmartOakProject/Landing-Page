import React, { Component } from "react"
import styled from "styled-components"

const MobileListWrapper = styled.ul`
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    flex-direction: column;
    background: #0e0e0e;
    color: var(--color-white);
    transition: all 0.45s ease;

    padding-top: 5rem;
    @media only screen and (orientation: landscape) {
        padding-top: 1.5rem;
    }
`

export default class MobileList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open ? this.props.open : false,
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open })
        }
    }

    render() {
        return (
            <MobileListWrapper style={{ height: this.state.open ? "100%" : 0 }}>
                {this.state.open ? this.props.children : null}
            </MobileListWrapper>
        )
    }
}