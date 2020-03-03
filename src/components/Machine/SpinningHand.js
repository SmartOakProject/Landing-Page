import React from "react"
import styled from "styled-components"

const SpinningHandContainer = styled.div`
    position: absolute;
    top: 60%;
    right: -4rem;
    background-color: #000;
`
const SpinningHandRectangle1 = styled.div`
    width: 4rem;
    height: 14rem;
    background-color: #3d4a4d;
    background-image: linear-gradient(
        0deg,
        #3d4a4d 0%,
        #7b8f90 24%,
        #cad4d5 45%,
        #f5fafa 74%,
        #cad4d5 97%
    );
    border: 1px solid #7b8f90;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
`
const SpinningHandRectangle2 = styled.div`
    width: 4.5rem;
    height: 11rem;

    background-color: #3d4a4d;
    background-image: linear-gradient(
        0deg,
        #3d4a4d 0%,
        #7b8f90 24%,
        #cad4d5 45%,
        #f5fafa 74%,
        #cad4d5 97%
    );
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    /* transform: translateZ(300px); */
    /* transform-style: preserve-3d; */
    position: absolute;
    top: 1rem;
    right: -4.4rem;
    border: 1px solid #7b8f90;
`
const SpinningHandHalfCircle = styled.div`
    position: absolute;
    top: 30%;
    right: -10%;
    background-color: #000;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
`

const SpinningHandLongRectangle = styled.div`
    position: absolute;
    overflow-y: hidden;
    /* transform: rotateX(300.25deg) translateZ(30px); */

    top: -22rem;
    right: 0.9rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    background-color: #778381;
    background-image: linear-gradient(
        90deg,
        #979a9b 0%,
        #e4e7e7 22%,
        #c6d1d2 49%,
        #e4e7e7 76%,
        #464f53 100%
    );

    height: 22rem;
    width: 2.5rem;
    transform-style: preserve-3d;
`
const SpinningHandUnderCircleSilver = styled.div`
    position: absolute;
    top: -23rem;
    right: 0.25rem;
    background-color: #778381;
    background-image: linear-gradient(
        90deg,
        #778381 0%,
        #dbe1de 14%,
        #dfe8e5 24%,
        #cad4d5 49%,
        #dfe8e5 80%,
        #3d4a4d 100%
    );
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    height: 1rem;
    width: 4rem;
`
const SpinningHandUnderCircle = styled.div`
    position: absolute;
    top: -24rem;
    right: -0.25rem;
    background: rgba(255, 20, 0, 1);
    height: 1rem;
    width: 5rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
    &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        height: 1rem;
        width: 4.45rem;
        background: rgb(255, 115, 31);
        background: radial-gradient(
            circle,
            rgba(255, 115, 31, 1) 0%,
            rgba(235, 1, 0, 1) 100%
        );
    }
    &::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        height: 1rem;
        width: 5rem;

        background: rgba(235, 1, 0, 0.3);
        background: radial-gradient(
            circle,
            rgba(235, 1, 0, 0.3) 71%,
            rgba(102, 0, 0, 0.7) 100%
        );
    }
`

const SpinningHandCircle = styled.div`
    position: absolute;
    top: -31.1rem;
    right: -1.75rem;
    background: rgba(255, 20, 0, 1);

    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);

    height: 8rem;
    width: 8rem;
    border-radius: 50%;
    /* border-bottom: 0.3rem solid #fff; */
    &::after {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        height: 8rem;
        width: 7.5rem;
        border-radius: 50%;
        background: rgb(255, 115, 31);
        background: radial-gradient(
            circle,
            rgba(255, 115, 31, 1) 0%,
            rgba(235, 1, 0, 1) 100%
        );
    }
    &::before {
        content: "";
        position: absolute;
        top: 0px;
        left: 0;
        height: 8rem;
        width: 8rem;
        border-radius: 50%;
        background: rgba(235, 1, 0, 0.3);
        background: radial-gradient(
            circle,
            rgba(235, 1, 0, 0.2) 57%,
            rgba(70, 0, 0, 0.9) 100%
        );
    }
`

const SpinningHand = () => {
    return (
        <SpinningHandContainer>
            <SpinningHandRectangle1 />
            <SpinningHandRectangle2>
                <SpinningHandCircle />
                <SpinningHandUnderCircle />
                <SpinningHandUnderCircleSilver />
                <SpinningHandLongRectangle />
            </SpinningHandRectangle2>
            <SpinningHandHalfCircle />
        </SpinningHandContainer>
    )
}
export default SpinningHand
