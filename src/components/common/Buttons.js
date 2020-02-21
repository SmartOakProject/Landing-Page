import React from "react"
import styled from "styled-components"
import { useIntl, Link } from "gatsby-plugin-intl"

import { FaFacebookF, FaPager, FaHeart } from "react-icons/fa"
const ButtonNotExternal = styled(props => <Link {...props} />)`
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    margin-left: ${props => (props.isMore ? "1rem" : "0")};
    justify-content: space-around;
    text-decoration: none;
    color: ${props =>
        props.isBlack ? "var(--color-black)" : "var(--color-white)"};
    border: 0.1rem solid
        ${props =>
            props.isBlack ? "var(--color-black)" : "var(--color-white)"};
    padding: 0.7rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    cursor: pointer;

    transition: all 0.3s ease;
    :hover {
        background-color: ${props =>
            props.isBlack ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.3)"};
    }
    @media screen and (max-width: 700px) {
        margin-left: 0;
        margin-top: ${props => (props.isMore ? "1rem" : "0")};
    }
`

const Button = styled.a`
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    border-radius: 3px;
    margin-left: ${props => (props.isMore ? "1rem" : "0")};
    justify-content: space-around;
    text-decoration: none;
    color: ${props =>
        props.isBlack ? "var(--color-black)" : "var(--color-white)"};
    border: 0.1rem solid
        ${props =>
            props.isBlack ? "var(--color-black)" : "var(--color-white)"};
    padding: 0.7rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    cursor: pointer;

    transition: all 0.3s ease;
    :hover {
        background-color: ${props =>
            props.isBlack ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0.3)"};
    }
    @media screen and (max-width: 700px) {
        margin-left: 0;
        margin-top: ${props => (props.isMore ? "1rem" : "0")};
    }
`

const FbIcon = styled(FaFacebookF)`
    margin-left: 0.5rem;
    margin-right: 1rem;
    font-size: 1.6rem;
`
const NextPageBtn = styled(FaPager)`
    margin-left: 0.5rem;
    margin-right: 1rem;
    font-size: 1.6rem;
`
const HoldingHeart = styled(FaHeart)`
    margin-left: 0.5rem;
    margin-right: 1rem;
    font-size: 1.6rem;
`
const Buttons = ({
    isBlack,
    isMore,
    btnLink,
    btnType,
    btnText,
    isNotExternal,
}) => {
    const intl = useIntl()
    //add download btn
    function renderBtnIcon(btnType) {
        switch (btnType) {
            case "facebook":
                return <FbIcon isBlack={isBlack} />
                break
            case "pageLink":
                return <NextPageBtn isBlack={isBlack} />
                break
            case "support":
                return <HoldingHeart isBlack={isBlack} />
                break
            case "download":
                return <HoldingHeart isBlack={isBlack} />
                break
        }
    }
    return isNotExternal ? (
        <ButtonNotExternal isBlack={isBlack} isMore={isMore} href={btnLink}>
            {btnText}
        </ButtonNotExternal>
    ) : (
        <Button
            isBlack={isBlack}
            isMore={isMore}
            href={intl.formatMessage({ id: btnLink })}
            target="_blank"
        >
            {renderBtnIcon(intl.formatMessage({ id: btnType }))}
            {intl.formatMessage({ id: btnText })}
        </Button>
    )
}
export default Buttons
