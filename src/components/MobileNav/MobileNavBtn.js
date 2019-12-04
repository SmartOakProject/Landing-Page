import React, { Component } from "react"
import styled, { keyframes } from "styled-components"

import { IoMdMenu, IoMdClose, IoMdHome } from "react-icons/io"

const MobileBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 4px;
    svg {
        fill: #fff;
        height: 32px;
        width: 32px;
        /* opacity: 0; */
        animation: 0.5s ${fadeInFromNone} forwards;
        animation-delay: 0.2s;
    }
    @media only screen and (orientation: landscape) {
        height: 2.5rem;
        width: 2.5rem;
    }
`
const fadeInFromNone = keyframes`
 0% {
        /* display: none; */
        opacity: 0;
    }

    1% {
        /* display: block; */
        opacity: 0;
    }

    100% {
        /* display: block; */
        opacity: 1;
    }
`

export default class MobileNavBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: this.props.open ? this.props.open : false,
            color: this.props.color ? this.props.color : "black",
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({ open: nextProps.open })
        }
    }

    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <MobileBtn
                onClick={
                    this.props.onClick
                        ? this.props.onClick
                        : () => {
                              this.handleClick()
                          }
                }
            >
                {this.props.open ? (
                    <IoMdClose />
                ) : this.props.icon ? (
                    <IoMdHome />
                ) : (
                    <IoMdMenu />
                )}
            </MobileBtn>
        )
    }
}
