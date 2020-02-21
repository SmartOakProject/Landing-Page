import React from "react"
import styled from "styled-components"

const Col = styled.div`
    flex: 1 1 16.6666666667%;
    max-width: 16.6666666667%;
    margin: 0 0 5rem;
    padding: 0 1.5rem;
    @media screen and (max-width: 900px) {
        flex: 1 1 20%;
        max-width: 20%;
    }
    @media screen and (max-width: 600px) {
        flex: 1 1 33.3333%;
        max-width: 33.3333%;
    }
    @media screen and (max-width: 479px) {
        flex: 1 1 50%;
        max-width: 50%;
        margin: 0 0 2.5rem;
    }
`

const Img = styled.img`
    border-radius: 50%;
    max-width: 70%;
    height: auto;
    margin: 0 auto 2rem;
    display: block;
`

const Fullname = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-black);
    text-align: center;
    margin-bottom: 2rem;
`

const Description = styled.p`
    font-size: 1.2rem;
    color: var(--color-black);
    text-align: center;
`

function AboutUsCard({ title, desc, img }) {
    return (
        <Col>
            <Img src={"https://via.placeholder.com/600/771796"}></Img>
            <Fullname>{title}</Fullname>
            <Description>{desc}</Description>
        </Col>
    )
}

export default AboutUsCard
