import React, { Component } from "react"
import styled from "styled-components"

const MobileListWrapper = styled.ul`
    position: ${props => (props.dropdown ? "static" : "fixed")};
    top: 0;
    width: 100vw;
    max-width: 100%;
    display: none;
    background: #0e0e0e;
    color: var(--color-white);
    transition: all 0.45s ease;
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
            <MobileListWrapper
                dropdown={this.props.dropdown}
                style={{
                    height: this.state.open ? "110%" : 0,
                }}
            >
                <ListWrapper dropdown={this.props.dropdown}>
                    {this.state.open ? this.props.children : null}
                </ListWrapper>
            </MobileListWrapper>
        )
    }
}
