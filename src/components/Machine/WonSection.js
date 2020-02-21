import React from "react"
import styled, { keyframes, css } from "styled-components"
import { IoMdStar } from "react-icons/io"

const winAnimation = keyframes`
 0% {
    transform: scale(1);
    }
    100% {
        transform: scale(1.07);
    }
`

const WonSectionContainer = styled.div`
    width: 100%;
    height: 23%;

    border-radius: 1rem;
    padding: 1rem;
    margin-bottom: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Star = styled(IoMdStar)`
    font-size: 6rem;
    will-change: transform;
    filter: ${props =>
        props.isWon ? "drop-shadow(0 0 15px rgba(255, 229, 90, 1))" : ""};
    animation: ${props =>
        props.isWon
            ? css`
                  ${winAnimation} 0.5s ease-in-out infinite alternate
              `
            : ""};
`
const WonText = styled.span`
    font-size: 6.5rem;
    will-change: transform;
    font-weight: bold;

    text-transform: uppercase;
    text-shadow: ${props =>
        props.isWon
            ? "0 0 6px rgba(255, 229, 90, 0.98), 0 0 30px rgba(255, 229, 90, 0.42), 0 0 12px rgba(255, 215, 0, 0.58), 0 0 22px rgba(255, 215, 0, 0.84), 0 0 38px rgba(255, 215, 0, 0.88), 0 0 60px rgba(255, 215, 0, 1)"
            : "none"};
    animation: ${props =>
        props.isWon
            ? css`
                  ${winAnimation} 0.5s ease-in-out infinite alternate
              `
            : ""};
`
const WonSection = ({ isWon }) => {
    return (
        <WonSectionContainer
            style={{
                background: `${isWon ? "#d42020" : "rgb(2, 2, 2)"}`,
                background: `${
                    isWon
                        ? "#d42020"
                        : "linear-gradient(0deg,rgba(2, 2, 2, 1) 0%,rgba(52, 52, 52, 1) 100%)"
                }`,

                boxShadow: `${isWon ? "0 0 8px 3px #ff2525" : "none"}`,
            }}
            isWon={isWon}
        >
            <Star
                style={{
                    color: `${isWon ? "#ffe55a" : "#363636"}`,
                }}
                isWon={isWon}
            />
            <Star
                style={{
                    color: `${isWon ? "#ffe55a" : "#363636"}`,
                }}
                isWon={isWon}
            />
            <WonText
                style={{
                    color: `${isWon ? "#ffe55a" : "#363636"}`,
                }}
                isWon={isWon}
            >
                WON!
            </WonText>
            <Star
                style={{
                    color: `${isWon ? "#ffe55a" : "#363636"}`,
                }}
                isWon={isWon}
            />
            <Star
                style={{
                    color: `${isWon ? "#ffe55a" : "#363636"}`,
                }}
                isWon={isWon}
            />
        </WonSectionContainer>
    )
}
export default WonSection
