import React from "react"
import styled, { keyframes, css } from "styled-components"

import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
} from "react-icons/fa"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding-left: 1.6rem;
    animation: ${props => (props.anim ? "0.6" : "0")}s ${fadeIn} ease-out;

    a > svg {
        color: rgba(255, 255, 255, 0.85);
        margin: 0 1rem;
    }
`
const SocialIcons = ({ anim }) => {
    return (
        <Container anim={anim}>
            <a href="/" target="_blank">
                <FaFacebookF />
            </a>
            <a href="/" target="_blank">
                <FaInstagram />
            </a>
            <a href="/" target="_blank">
                <FaTwitter />
            </a>
            <a href="/" target="_blank">
                <FaYoutube />
            </a>
            <a href="/" target="_blank">
                <FaLinkedin />
            </a>
        </Container>
    )
}
export default SocialIcons
