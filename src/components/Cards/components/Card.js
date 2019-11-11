import React from "react"
import styled from "styled-components"

const CardElement = styled.div`
    margin: 0 0.5rem 3rem 0.5rem;
    /* overflow: hidden; */
    border-radius: 2rem;
    box-shadow: 0 0.8rem 1.6rem rgba(214, 197, 246, 0.5);
    z-index: 12312312312;
`

const ImageWrapper = styled.div`
    overflow: hidden;
    border-radius: 2rem 2rem 0 0;
`

const Image = styled.img`
    display: block;
    border-radius: 2rem 2rem 0 0;
    transition: transform 0.5s ease, filter 0.5s ease;

    :hover {
        filter: brightness(70%);
        transform: scale(1.2);
    }
`

const Text = styled.div``

const Title = styled.h2`
    text-align: center;
    margin: 1rem 0;
    font-weight: normal;
    font-size: 1.5rem;
    color: #0e196e;
`

const Description = styled.p`
    padding: 0 0.5rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    text-align: justify;
`

export default function Card(props) {
    return (
        <CardElement>
            <ImageWrapper>
                <Image src={props.img} alt="" />
            </ImageWrapper>
            <Text>
                <Title>{props.title}</Title>
                <Description>{props.text}</Description>
            </Text>
        </CardElement>
    )
}
