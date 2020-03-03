import React from "react"
import styled, { css } from "styled-components"
import Buttons from "../common/Buttons"
import Image from "./Image.js"
import PropTypes from "prop-types"
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: ${props => (props.support ? "1rem 0" : "4.8rem 0")};
    text-align: ${props => (props.isRight ? "right" : "left")};

    &:nth-child(2n) {
        flex-direction: ${props => (props.download ? "row" : "row-reverse")};
    }

    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        &:nth-child(2n) {
            flex-direction: column;
        }
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        flex-direction: row;
        &:nth-child(2n) {
            flex-direction: ${props =>
                props.download ? "row" : "row-reverse"};
        }
    }
`

const ContentItemText = styled.div`
    ${props =>
        props.support
            ? null
            : css`
                  width: 50%;
                  margin: ${props =>
                      props.isRight ? "0 8rem 0 0" : "0 0 0 8rem"};
                  padding: 0 4rem;
              `}

    line-height: 1.5;
    color: #393939;
    @media (max-width: 1100px) {
        margin: 0;
        padding: 0px 1rem;
    }
    @media (max-width: 767px) {
        width: 100%;
        margin: 0;
        padding: 0 1.5rem;
        text-align: center;
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        width: 55%;
        padding: 0 1rem;
        text-align: ${props => (props.isRight ? "right" : "left")};

        /* height: 22rem; */
        margin: ${props => (props.isRight ? "0 0rem 0 0" : "0 0 0 0rem")};
    }
`

const Title = styled.h2`
    font-size: 2.4rem;
    line-height: 1.2;
    color: #0e196e;
    font-weight: 300;

    @media only screen and (max-width: 767px) and (orientation: portrait) {
        margin-top: 3rem;
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        margin-top: 0;
    }
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

const ContentItem = ({
    isRight,
    title,
    desc,
    isBlack,
    download,
    first,
    id,
    btns,
    support,
    btnPath,
}) => {
    return (
        <Container isRight={isRight} support={support} download={download}>
            {support ? null : <Anchor id={id} />}
            <Image
                download={download}
                isRight={isRight}
                first={first}
                support={support}
            />
            <ContentItemText support={support} isRight={isRight}>
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

ContentItem.propTypes = {
    isRight: PropTypes.bool,
    title: PropTypes.string,
    desc: PropTypes.string,
    isBlack: PropTypes.bool,
    download: PropTypes.bool,
    first: PropTypes.bool,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    btns: PropTypes.array,
    support: PropTypes.bool,
    btnPath: PropTypes.string,
}

export default ContentItem
