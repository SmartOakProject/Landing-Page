import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const CardElement = styled.div`
    margin: 0 0.5rem 3rem 0.5rem;
    /* overflow: hidden; */
    border-radius: 2rem;
    box-shadow: 0 0.8rem 1.6rem rgba(192, 192, 192, 0.5);
    transform: scale(0.97);
`

const ImageWrapper = styled.div`
    overflow: hidden;
    border-radius: 2rem 2rem 0 0;
`

const Image = styled.img`
    display: block;
    border-radius: 2rem 2rem 0 0;
`

const Title = styled.h2`
    text-align: center;
    margin: 1rem 0;
    font-weight: normal;
    font-size: 1.5rem;
    color: #0e196e;
    @media screen and (max-width: 900px) {
        font-size: 2.1rem;
        margin: 2rem 0;
    }
`

const Description = styled.p`
    padding: 0 0.7rem;
    margin-bottom: 1rem;
    font-size: 1.3rem;
    text-align: justify;
    @media screen and (max-width: 900px) {
        font-size: 1.5rem;
        padding: 1rem 1.5rem;
        padding-top: 0;
    }
`

const Card = ({ text, title, img }) => {
    return (
        <CardElement>
            <ImageWrapper>
                <Image src={img} alt="" />
            </ImageWrapper>
            <div>
                <Title>{title}</Title>
                <Description>{text}</Description>
            </div>
        </CardElement>
    )
}

Card.propTypes = {
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}

export default Card
