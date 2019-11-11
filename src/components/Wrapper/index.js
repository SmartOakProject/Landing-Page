import React from "react"
import styled from "styled-components"
import Test from "./Test"

const Container = styled.div`
    background: ${props => props.bgc};
    width: 100%;
    height: ${props => (props.isSticky ? "auto" : "100vh")};
    position: ${props => (props.isSticky ? "sticky" : "static")};
    top: 4.3rem;
    /* overflow-y: hidden; */
    -webkit-clip-path: inset(0);
    clip-path: inset(0, 0, 0, 0);
    clip: rect(0px, auto, auto, 0px);
    @media screen and (max-width: 900px) {
        position: static;
    }
    z-index: ${props => props.z};
`

const Text = styled.div`
    width: 50vh;
    color: ${props => props.color};
`
const Video = styled.video`
    /* background-color: black; */
    height: 50vh;
    width: 50vw;
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
    z-index: ${props => props.z};
`

export default function Wrapper(props) {
    return (
        <Container
            bgc={props.bgc}
            z={props.z}
            isSticky={props.isSticky}
            isLast={props.isLast}
        >
            {props.children ? (
                props.children
            ) : (
                <Test
                    logo={props.logo}
                    textColor={props.textColor}
                    text={props.text}
                    videoSrc={props.videoSrc}
                    title={props.title}
                    color={props.color}
                />
            )}
        </Container>
    )
}
