import React, { Component } from "react"
import styled from "styled-components"
import VisibilitySensor from "react-visibility-sensor"

const VideoWrapper = styled.video`
    width: 100vw;
    height: 95vh;
    object-fit: cover;
    position: relative;
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
            this.setState({ height: height - 60, visiblitiy: true })
        }
    }

    playVideo = isVisible => {
        if (isVisible) {
            const height = this.vidRef.clientHeight

            this.vidRef.play()
            this.setState({ height: height - height })
        } else {
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
