import React, { useState, useRef } from "react"
import styled, { keyframes } from "styled-components"

import MachineFooter from "./MachineFooter"
import WinList from "./WinList"
import WonSection from "./WonSection"
import Ad from "./Ad"
import SpinningHand from "./SpinningHand"
import bgcSupport from "../../images/bgcSupport.svg"
import "./test.css"

const Container = styled.div`
    width: 100vw;
    height: 110vh;
    background-image: url(${bgcSupport});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 1rem;
    position: relative;
    @media (max-width: 1100px) {
        display: none;
    }
`

const MachineContainer = styled.div`
    width: 1000px;
    border-radius: 2.5rem;
    margin-left: 19rem;
    height: 620px;
    background-color: #535c5f;
    background-image: linear-gradient(
        170deg,
        #464f53 7%,
        #979a9b 29%,
        #535c5f 53%,
        #979a9b 66%,
        #464f53 85%
    );

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

    padding: 1.5rem;
    position: relative;
    @media (min-width: 1590px) {
        margin: 0 auto;
    }
    @media (max-width: 1320px) {
        margin-left: 11rem;
    }
    @media (max-width: 1220px) {
        margin-left: 4rem;
    }
`

const MainContainer = styled.div`
    display: flex;
    margin-top: 1rem;
`

const PlayMachineBorder = styled.div`
    width: 75%;
    margin-left: 1rem;
    border-radius: 1.5rem;

    height: 470px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #97999b;
    background-image: linear-gradient(
        150deg,
        #97999b 0%,
        #e4e7e7 17%,
        #97999b 30%,
        #e4e7e7 46%,
        #97999b 61%,
        #e4e7e7 72%,
        #97999b 95%
    );
`
const PlayMachineContainer = styled.div`
    width: 97.5%;
    height: 96%;
    border-radius: 1rem;
    background-color: #f4f4f4;
    padding: 1rem;
`

const MachineSection = styled.div`
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    height: 73%;
    position: relative;
    background-color: #1e1e20;
    background-image: linear-gradient(
        0deg,
        #1e1e20 0%,
        #3f3e41 30%,
        #1e1e20 50%,
        #3f3e41 70%,
        #1e1e20 100%
    );
`

const MachineSectionShadow = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
    height: 100%;
    position: absolute;
    box-shadow: inset 0px 2px 30px -4px rgba(0, 0, 0, 0.8),
        inset 0px -2px 30px -4px rgba(0, 0, 0, 0.8);
    z-index: 1221312312;
`
const MachineSectionLine = styled.div`
    top: 30%;
    left: 1.6%;
    width: 96.8%;

    height: 140px;
    position: absolute;
    background-color: rgba(250, 250, 250, 0.3);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
    &::after {
        content: "";
        width: 100%;
        height: 2px;
        background-color: #7b7f81;

        background-image: linear-gradient(
            180deg,
            #9ea1a2 0%,
            #c1c7c7 18%,
            #9ea1a2 49%,
            #c1c7c7 83%,
            #9ea1a2 90%,
            #c1c7c7 100%
        );
        opacity: 0.5;
        top: 50%;
        left: 0;
        position: absolute;
    }
    z-index: 2312;
`

const MachineRing1 = styled.div`
    position: absolute;
    top: 30%;
    margin: 0 auto;
    height: 140px;
    width: 90px;
    float: left;
    transform: rotateX(11.25deg);
    transition: all 2.5s ease;
    transform-style: preserve-3d;
    will-change: transform;
`
const MachineRing2 = styled.div`
    position: absolute;
    top: 30%;
    margin: 0 auto;
    height: 140px;
    width: 90px;
    float: left;
    transform: rotateX(11.25deg);
    transition: all 3s ease;
    transform-style: preserve-3d;
    will-change: transform;
`
const MachineRing3 = styled.div`
    position: absolute;
    top: 30%;
    margin: 0 auto;
    height: 140px;
    width: 90px;
    float: left;
    transform: rotateX(11.25deg);
    transition: all 3.5s ease;
    transform-style: preserve-3d;
    will-change: transform;
`

const scroll = keyframes`
 0% {
        opacity: 0;
    }
    10% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(18px);
        opacity: 0.1;
    }
`

const ScrollContainer = styled.div`
    position: absolute;
    top: 25%;
    left: 3%;
    font-size: 1.6rem;
    width: 34px;
    height: 55px;
    @media (max-width: 1220px) {
        display: none;
    }
`

const ScrollMouseY = styled.div`
    margin-top: 10px;
    width: 3px;
    padding: 18px;
    height: 36px;
    border: 2px solid #151515;
    border-radius: 25px;
    opacity: 0.75;
    box-sizing: content-box;
`
const ScrollScroller = styled.div`
    width: 3px;
    height: 10px;
    border-radius: 25%;
    background-color: #151515;
    animation-name: ${scroll};
    animation-duration: 2.2s;
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
    animation-iteration-count: infinite;
    will-change: transform, opacity;
`

const Machine = ({ data }) => {
    const [ring, setRing] = useState("")
    const [isWon, setIsWon] = useState(false)
    const [checkIfItIsFirstBtnClick, setCheckIfItIsFirstBtnClick] = useState(
        true
    )
    
    const ring1 = useRef(null)
    const ring2 = useRef(null)
    const ring3 = useRef(null)

    function spin() {
        setIsWon(false)
        let seed = Math.floor(Math.random() * 32)
        let arrayOfProperties = []
        for (let i = 0; i <= 32; i += 1) {
            arrayOfProperties.push(
                `rotateX(${i === 0 ? "-3465" : `${-3465 + -11.25 * i}`}deg)`
            )
        }

        if (!checkIfItIsFirstBtnClick) {
            ring1.current.style.transform = "rotateX(11.25deg)"
            ring2.current.style.transform = "rotateX(11.25deg)"
            ring3.current.style.transform = "rotateX(11.25deg)"
        }

        setTimeout(() => {
            ring1.current.style.transform = arrayOfProperties[seed]
            ring2.current.style.transform = arrayOfProperties[seed]
            ring3.current.style.transform = arrayOfProperties[seed]
        }, 1000)
        setRing(`transform: ${arrayOfProperties[seed]}`)
        setCheckIfItIsFirstBtnClick(false)
    }

    const countSlots = data.length

    const slotsAngle = 360 / countSlots

    const slots1 = data.map((e, i) => {
        return (
            <div
                className="slot-border slot-1"
                style={{
                    transform: `rotateX(${slotsAngle *
                        i}deg) translateZ(711px)`,
                }}
            >
                <div className="slot1">
                    <img src={`https://picsum.photos/id/${i}/250`} />
                </div>
            </div>
        )
    })

    const slots2 = data.map((e, i) => {
        return (
            <div
                className="slot-border slot-2"
                style={{
                    transform: `rotateX(${slotsAngle *
                        i}deg) translateZ(711px)`,
                }}
            >
                <div className="slot2">
                    {/* add line height */}
                    <div className="test">{e.title}</div>
                </div>
            </div>
        )
    })

    const slots3 = data.map((e, i) => {
        return (
            <div
                className="slot-border slot-3"
                style={{
                    transform: `rotateX(${slotsAngle *
                        i}deg) translateZ(711px)`,
                }}
            >
                <div className="slot3">
                    <div>{e.desc}</div>
                </div>
            </div>
        )
    })

    return (
        <Container className="test">
            <MachineContainer>
                <Ad />
                <SpinningHand />
                <MainContainer>
                    <WinList />
                    <PlayMachineBorder>
                        <PlayMachineContainer>
                            <WonSection isWon={isWon} />
                            <MachineSection>
                                <MachineSectionShadow />
                                <MachineSectionLine />
                                <MachineRing1 id="ring1" css={ring} ref={ring1}>
                                    {slots1}
                                </MachineRing1>
                                <MachineRing2 id="ring2" css={ring} ref={ring2}>
                                    {slots2}
                                </MachineRing2>
                                <MachineRing3
                                    id="ring3"
                                    css={ring}
                                    ref={ring3}
                                    onTransitionEnd={() => setIsWon(true)}
                                >
                                    {slots3}
                                </MachineRing3>
                            </MachineSection>
                        </PlayMachineContainer>
                    </PlayMachineBorder>
                </MainContainer>
                <MachineFooter spin={spin} />
            </MachineContainer>
        </Container>
    )
}

export default Machine
