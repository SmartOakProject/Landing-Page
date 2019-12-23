import React, { Component } from "react"
import styled from "styled-components"

const MobileListWrapper = styled.ul`
    position: fixed;
    top: 0;
    width: 100vw;
    display: none;

    background: #0e0e0e;
    color: var(--color-white);
    transition: all 0.45s ease;
    z-index: 999999999;
    padding-top: 5rem;

    /* padding-bottom: 5rem; */
    /* margin-bottom: 2rem; */
    @media only screen and (orientation: landscape) {
        padding-top: 2.5rem;
    }
    @media screen and (max-width: 900px) {
        display: block;
    }
`
const ListWrapper = styled.ul`
    flex-direction: column;
    display: flex;
    overflow: auto;
    height: 80%;
    position: relative;
`
// const Black = styled.div`
//     position: absolute;
//     bottom: -15vh;
//     background-color: #0e0e0e;
//     width: 100vw;
//     height: 15vh;
// `
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
            <MobileListWrapper style={{ height: this.state.open ? "110%" : 0 }}>
                <ListWrapper>
                    {this.state.open ? this.props.children : null}
                    {/* <Black /> */}
                </ListWrapper>
            </MobileListWrapper>
        )
    }
}
