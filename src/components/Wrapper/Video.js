import React, { Component } from "react"
import styled from "styled-components"
import VisibilitySensor from "react-visibility-sensor"

const VideoWrapper = styled.video`
    width: 100vw;
    /* height: 95vh; */
    height: ${props => (props.isSecond ? "150vh" : "95vh")};
    object-fit: cover;
    position: relative;
    max-width: 100%;

    @media (max-width: 767px) {
        height: 95vh;
    }
`

export default class Video extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            visiblitiy: false,
        }
    }
    componentDidMount() {
        if (this.vidRef) {
            const height = this.vidRef.clientHeight
            this.props.isSecond
                ? this.setState({ height: height - 250, visiblitiy: true })
                : this.setState({ height: height - 60, visiblitiy: true })
        }
    }

    playVideo = isVisible => {
        let time = null
        if (isVisible) {
            const height = this.vidRef.clientHeight

            this.vidRef.play()
            this.setState({ height: height - height })
            time = setTimeout(() => {
                if (this.vidRef) {
                    this.vidRef.pause()
                }
            }, 10000)
        } else {
            clearTimeout(time)
            this.vidRef.pause()
        }
    }
    render() {
        return (
            <VisibilitySensor
                partialVisibility={this.state.visiblitiy}
                minTopValue={this.state.height}
                onChange={this.playVideo}
            >
                <VideoWrapper
                    isSecond={this.props.isSecond}
                    ref={vidRef => (this.vidRef = vidRef)}
                    muted
                    loop
                    preload="auto"
                    playsinline
                >
                    <source
                        src={require(`../../video/${this.props.videoSrc}.mp4`)}
                        type="video/mp4"
                    />
                </VideoWrapper>
            </VisibilitySensor>
        )
    }
}
