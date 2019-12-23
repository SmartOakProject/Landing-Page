import React, { Component } from "react"
import styled from "styled-components"
import Video from "./Video"
import TextHeader from "../TextHeader"

const Text = styled.div`
    width: 35vw;
    /* height: ${props => (props.isLast ? "150vh" : "200vh")}; */
    color: #000;
    /* display: inline-block; */
    position: absolute;
    z-index: 3;
    top: -400px;
    left: 0;
    @media screen and (max-width: 771px) {
        left: 0;
        width: 80vw;
        /* height: ${props => (props.isLast ? "120vh" : "250vh")}; */
    }
`

const Image = styled.div`
    /* background-color: black; */
    /* object-fit: fill; */
    width: 100vw;
    height: 95vh;
    /* border: 2px solid #f00; */
    /* object-fit: cover; */
    position: relative;

    background-image: url(${props => props.bgc && props.bgc});
    background-repeat: no-repeat;
    background-size: cover;

    background-position: 73% 0;
`

const Heg = styled.div`
    height: 95vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
`

const windowGlobal =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 900px)").matches

export default class Sticky extends Component {
    constructor(props) {
        super(props)
        this.state = {
            matches: windowGlobal,
        }
    }

    render() {
        return (
            <Heg>
                <Text>
                    <TextHeader
                        secondText={this.props.secondText}
                        logo={this.props.logo}
                        color={this.props.color}
                        text={this.props.text}
                        title={this.props.title}
                        isLast={this.props.isLast}
                    />
                </Text>
                {this.state.matches ? (
                    <Image
                        bgc={require(`../../images/videoImages/${this.props.videoSrc}.png`)}
                    />
                ) : (
                    <Video videoSrc={this.props.videoSrc} />
                )}
            </Heg>
        )
    }
}
