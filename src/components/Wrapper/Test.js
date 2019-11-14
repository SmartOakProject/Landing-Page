import React, { Component } from "react"
import styled from "styled-components"
import VisibilitySensor from "react-visibility-sensor"
import Text31 from "../Header/Text"
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
    height: 200vh;
    color: #000;
    /* display: inline-block; */
    position: absolute;
    z-index: 3;
    top: -400px;
    left: 50px;
    @media screen and (max-width: 771px) {
        width: 80vw;
        height: 300vh;
    }
`
const Sticky = styled.div`
    position: sticky;
    top: 20rem;
    color: #000;
`
const Video = styled.video`
    /* background-color: black; */
    /* object-fit: fill; */
    width: 100vw;
    height: 100vh;
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
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
    z-index: ${props => props.z};
`

export default class Test extends Component {
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
        console.log(this.testRef)

        this.setState({ height: height - 60 })
        this.setState({ visiblitiy: true })
    }

    playVideo = isVisible => {
        // console.log("Element is now %s", isVisible ? "visible" : "hidden")
        // console.log(isVisible)
        if (isVisible) {
            this.vidRef.play()
        }
    }
    render() {
        console.log(this.state.height)
        return (
            <Heg>
                <Text>
                    <Sticky ref={testRef => (this.testRef = testRef)}>
                        <Text31
                            logo={this.props.logo}
                            color={this.props.color}
                            text={this.props.text}
                            title={this.props.title}
                        />
                    </Sticky>
                </Text>

                <VisibilitySensor
                    partialVisibility={this.state.visiblitiy}
                    minTopValue={this.state.height}
                    onChange={this.playVideo}
                >
                    <Video
                        ref={vidRef => (this.vidRef = vidRef)}
                        muted
                        loop
                        src={require(`../../video/${this.props.videoSrc}`)}
                    />
                </VisibilitySensor>
            </Heg>
        )
    }
}
