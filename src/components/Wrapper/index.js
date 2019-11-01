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
    width: 30vh;
`
const Photo = styled.div`
    background-color: black;
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
    z-index: ${props => props.z};
`

export default function Wrapper(props) {
    return (
        <Container bgc={props.bgc} z={props.z}>
            {props.children ? (
                props.children
            ) : (
                <Heg>
                    <Text>
                        <h2>Title</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Labore omnis libero ut at accusantium, nostrum
                            iste sunt! Atque, deleniti voluptatibus nihil cumque
                            totam rem qui veritatis quas, optio suscipit iusto?
                        </p>
                    </Text>
                    <Photo />
                </Heg>
            )}
        </Container>
    )
}
