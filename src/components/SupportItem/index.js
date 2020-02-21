import React from "react"
import styled, { css } from "styled-components"
import Buttons from "../common/Buttons"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
    /* border: 1px solid red; */
`
const Img = styled.img`
    display: block;

    height: 27rem;
    margin-bottom: 2rem;
    border-radius: 2.5rem;

    will-change: transform;
`
const ContentItemText = styled.div`
    line-height: 1.5;
    color: #393939;
    width: 25rem;
    @media (max-width: 1100px) {
        margin: 0;
        padding: 0px 1rem;
    }
    @media (max-width: 644px) {
        margin: 0;
        padding: 0 1.5rem;
        text-align: center;
    }
    /* @media only screen and (max-width: 901px) and (orientation: landscape) {
        width: 55%;
        padding: 0 1rem;
        margin: 0;
    } */
`

const Title = styled.h2`
    font-size: 2.4rem;
    line-height: 1.2;
    color: #0e196e;
    font-weight: 300;

    /* @media only screen and (max-width: 767px) and (orientation: portrait) {
        margin-top: 3rem;
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        margin-top: 0;
    } */
`

const Description = styled.p`
    margin: 1.6rem 0;
    font-size: 1.3rem;
`

const Anchor = styled.div`
    display: block;
    height: 50vh; /*same height as header*/
    margin-top: -50vh; /*same height as header*/
    visibility: hidden;
`

const SupportItem = ({ title, desc, isBlack, id, btns, btnPath }) => {
    return (
        <Container>
            <Anchor id={id} />
            <Img src="https://picsum.photos/250" />
            <ContentItemText>
                <Title>{title}</Title>
                <Description>{desc}</Description>
                {btns
                    ? btns.map((btn, i) => {
                          return (
                              <Buttons
                                  isMore={i !== 0}
                                  btnLink={btn.link}
                                  isBlack={isBlack}
                                  btnLink={`${btnPath}.${i}.btnLink`}
                                  btnType={`${btnPath}.${i}.btnType`}
                                  btnText={`${btnPath}.${i}.btnText`}
                              />
                          )
                      })
                    : null}
            </ContentItemText>
        </Container>
    )
}
export default SupportItem
