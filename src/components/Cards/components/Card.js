import React from "react"
import styled from "styled-components"

const CardElement = styled.div`
    margin: 0 1.5rem 3rem 1.5rem;
    overflow: hidden;
    border-radius: 3rem;
    box-shadow: 0 0.8rem 1.6rem rgba(214, 197, 246, 0.5);
`

const ImageWrapper = styled.div`
    background-color: var(--color-black);
    overflow: hidden;
    margin: 0;
    border: 0;
`

const Image = styled.img`
    display: block;
    transition: transform 0.5s ease, opacity 0.3s ease;
    :hover {
        transform: scale(1.2);
        opacity: 0.6;
    }
`

const Text = styled.div``

const Title = styled.h2`
    text-align: center;
    margin: 1.6rem 0;
    font-weight: normal;
    font-size: 1.6rem;
    color: #0e196e;
`

const Description = styled.p`
    padding: 0 1rem;
    margin-bottom: 1.2rem;
    font-size: 1.3rem;
    text-align: justify;
    line-height: 2rem;
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
