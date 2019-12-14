import React, { Component } from "react"
import styled from "styled-components"
import VisibilitySensor from "react-visibility-sensor"
import TextHeader from "../TextHeader"
const Container = styled.div`
    background: ${props => props.bgc};
    width: 100%;
    position: sticky;
    top: 4.3rem;
    @media screen and (max-width: 900px) {
        position: static;
    }
    z-index: ${props => props.z};
`

const Text = styled.div`
    width: 35vw;
    height: ${props => (props.isLast ? "150vh" : "200vh")};
    color: #000;
    /* display: inline-block; */
    position: absolute;
    z-index: 3;
    top: -400px;
    left: 0;
    @media screen and (max-width: 771px) {
        left: 0;
        width: 80vw;
        height: ${props => (props.isLast ? "120vh" : "250vh")};
    }
`
const StickyWrapper = styled.div`
    position: sticky;
    top: 13rem;

    color: #000;
`
const Video = styled.video`
    /* background-color: black; */
    /* object-fit: fill; */
    width: 100vw;
    height: 95vh;
    /* border: 2px solid #f00; */
    object-fit: cover;
    position: relative;
`

const Border = styled.div`
    background: black;
    height: 5vh;
    width: 100%;
    position: absolute;
    bottom: 0px;
`
const Heg = styled.div`
    height: 95vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: ${props => props.z};
`

export default class Sticky extends Component {
    constructor(props) {
        super(props)

        // this.vidRef = React.createRef()
        this.state = {
            height: 0,
            visiblitiy: false,
        }
    }
    componentDidMount() {
        const height = this.vidRef.clientHeight

        this.setState({ height: height - 60 })
        this.setState({ visiblitiy: true })
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
            <Heg>
                <Text isLast={this.props.isLast}>
                    <StickyWrapper
                        ref={testRef => (this.testRef = testRef)}
                        thirdText={this.props.thirdText}
                    >
                        <TextHeader
                            secondText={this.props.secondText}
                            logo={this.props.logo}
                            color={this.props.color}
                            text={this.props.text}
                            title={this.props.title}
                        />
                    </StickyWrapper>
                </Text>

                <VisibilitySensor
                    partialVisibility={this.state.visiblitiy}
                    minTopValue={this.state.height}
                    onChange={this.playVideo}
                >
                    {/* <Video
                        ref={vidRef => (this.vidRef = vidRef)}
                        muted
                        loop
                        playsinline
                        src={require(`../../video/${this.props.videoSrc}`)}
                    /> */}
                    <Video
                        ref={vidRef => (this.vidRef = vidRef)}
                        muted
                        loop
                        playsinline
                    >
                        {console.log(
                            require(`../../video/${this.props.videoSrc}`)
                        )}
                        <source
                            src={require(`../../video/${this.props.videoSrc}`)}
                            type="video/mp4"
                        />
                    </Video>
                </VisibilitySensor>
            </Heg>
        )
    }
}
