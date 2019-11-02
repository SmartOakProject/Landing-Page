import React from "react"
import styled from "styled-components"

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
        <Container bgc={props.bgc} z={props.z}>
            {props.children ? (
                props.children
            ) : (
                <Heg>
                    <Text color={props.textColor}>
                        <h2>{props.title}</h2>

                        <p>{props.text}</p>
                    </Text>
                    <Video
                        muted
                        autoPlay
                        loop
                        src={require(`../../video/${props.videoSrc}`)}
                    />
                </Heg>
            )}
        </Container>
    )
}
