import React, { Component, useState } from "react"
import styled from "styled-components"
import Video from "./Video"
import TextHeader from "../TextHeader"
import Img from "gatsby-image"
import defaultImg from "../../images/videoImages/NCurrency.png"

const Container = styled.div`
    width: 100%;
    height: 95vh;
    position: relative;
    z-index: ${props => props.z};
`
const Heg = styled.div`
    height: 95vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    background-color: ${props => (props.isBlack ? "#fff" : "#000")};
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    will-change: transform;
    clip: ${props =>
        props.isSecond
            ? "rect(-175px, auto, auto, 0px)"
            : "rect(0px, auto, auto, 0px)"};
`

const Text = styled.div`
    width: 35vw;
    color: #000;
    position: absolute;
    z-index: 3;
    top: -400px;
    left: 0;
    @media screen and (max-width: 771px) {
        left: 0;
        width: 80vw;
    }
`

const Image = styled(props => <Img {...props} />)`
    width: 100vw;
    height: 95vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 73% 0;
`
const Image2 = styled.img`
    width: 100vw;
    height: 95vh;

    object-fit: cover;
    position: relative;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: 73% 0;
`
//todo
const Wrapper = props => {
    const windowGlobal =
        typeof window !== "undefined" &&
        window.matchMedia("(max-width: 900px)").matches

    const [matches, setMatches] = useState(windowGlobal)

    return (
        <Container z={props.z}>
            <Heg isBlack={props.isBlack} isSecond={props.isSecond}>
                <Text>
                    <TextHeader {...props} />
                </Text>
                {matches ? (
                    props.imgSrc ? (
                        <Image fluid={props.imgSrc} alt="home photo" />
                    ) : (
                        <Image2 src={defaultImg} alt="home photo" />
                    )
                ) : (
                    <Video {...props} />
                )}
            </Heg>
        </Container>
    )
}

export default Wrapper
