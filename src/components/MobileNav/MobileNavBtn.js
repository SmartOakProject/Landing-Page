import React, { Component } from "react"
import styled, { keyframes } from "styled-components"

import { IoMdMenu, IoMdClose, IoMdHome } from "react-icons/io"
const fadeInFromNone = keyframes`
    0% {
       /* display: none; */
       opacity: 0;
   }
   100% {
       /* display: block; */
       opacity: 1;
   }
`
const MobileBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 4px;
    outline: none;
    transition: all 1s ease;
    svg {
        fill: #fff;
        height: 32px;
        width: 32px;
        /* opacity: 0; */
        animation: ${fadeInFromNone} 0.7s linear;
    }
    @media only screen and (orientation: landscape) {
        height: 2.5rem;
        width: 2.5rem;
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
