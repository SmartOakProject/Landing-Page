import React from "react"
import styled from "styled-components"
import Sticky from "./Sticky"

const Container = styled.div`
    width: 100%;

    height: 95vh;

    /* top: 4.3rem; */
    -moz-clip-path: ${props =>
        props.secondText
            ? "inset(-175px 0 0 0)"
            : props.isLast
            ? "inset(0 0 -300px 0)"
            : "inset(0)"};
    -ms-clip-path: ${props =>
        props.secondText
            ? "inset(-175px 0 0 0)"
            : props.isLast
            ? "inset(0 0 -300px 0)"
            : "inset(0)"};

    -webkit-clip-path: ${props =>
        props.secondText
            ? "inset(-175px 0 0 0)"
            : props.isLast
            ? "inset(0 0 -300px 0)"
            : "inset(0)"};
    clip-path: ${props =>
        props.secondText
            ? "inset(-175px 0 0 0)"
            : props.isLast
            ? "inset(0 0 -300px 0)"
            : "inset(0)"};
    clip: rect(0px, auto, auto, 0px);
    @media screen and (max-width: 900px) {
        position: static;
    }
    z-index: ${props => props.z};
`

export default function Wrapper(props) {
    return (
        <Container
            z={props.z}
            isSticky={props.isSticky}
            isLast={props.isLast}
            secondText={props.secondText}
        >
            {props.children ? (
                props.children
            ) : (
                <Sticky
                    logo={props.logo}
                    textColor={props.textColor}
                    text={props.text}
                    videoSrc={props.videoSrc}
                    title={props.title}
                    color={props.color}
                    isLast={props.isLast}
                    secondText={props.secondText}
                    thirdText={props.thirdText}
                />
            )}
        </Container>
    )
}
