import React, { Component } from "react"
import styled from "styled-components"

const MobileBtn = styled.div`
    height: 32px;
    width: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 4px;
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
        const styles = {
            line: {
                height: "2px",
                width: "20px",
                background: this.state.color,
                transition: "all 0.2s ease",
            },
            lineTop: {
                transform: this.state.open ? "rotate(45deg)" : "none",
                transformOrigin: "top left",
                marginBottom: "5px",
            },
            lineMiddle: {
                opacity: this.state.open ? 0 : 1,
                transform: this.state.open ? "translateX(-16px)" : "none",
            },
            lineBottom: {
                transform: this.state.open
                    ? "translateX(-1px) rotate(-45deg)"
                    : "none",
                transformOrigin: "top left",
                marginTop: "5px",
            },
        }
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
                <div style={{ ...styles.line, ...styles.lineTop }} />
                <div style={{ ...styles.line, ...styles.lineMiddle }} />
                <div style={{ ...styles.line, ...styles.lineBottom }} />
            </MobileBtn>
        )
    }
}
