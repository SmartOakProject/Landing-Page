import React, { Component } from "react"
import styled from "styled-components"
import { FaFacebookF } from "react-icons/fa"
import VisibilitySensor from "react-visibility-sensor"

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 4.8rem 0;
    /* z-index: 1000000000000; */
    :nth-child(2n) {
        flex-direction: row-reverse;
    }
    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        :nth-child(2n) {
            flex-direction: column;
        }
        transform: translateX(0);
    }
`

const Image = styled.img`
    display: block;
    height: 41rem;
    /* width: 41rem; */
    border-radius: 3rem;
    box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.5);
    @media (max-width: 767px) {
        margin-bottom: 4.8rem;
        height: 15rem;
        width: 15rem;
    }
`

const ContentItemElement = styled.div`
    width: 50%;
    /* min-height: 30rem; */
    margin: ${props => (props.isRight ? "0 8rem 0 0" : "0 0 0 8rem")};
    padding: 0 4rem;
    line-height: 1.5;
    color: #393939;
    @media (max-width: 767px) {
        width: 100%;
        margin: 0;
        padding: 0 1.5rem;
        text-align: center;
    }
`

const Title = styled.h2`
    /* margin: 2.4rem 0 0.8rem; */
    font-size: 2.4rem;
    line-height: 1.2;
    color: #0e196e;
    font-weight: 300;
`

const Description = styled.p`
    margin: 1.6rem 0;
    font-size: 1.3rem;
`

const Link = styled.a`
    background-color: transparent;
    text-decoration: none;
    color: var(--color-black);
    border: solid 0.1rem var(--color-black);
    padding: 0.5rem;
    font-size: 1.3rem;
    font-family: "Muli", sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    padding-right: 0.4rem;
    transition: all 0.3s ease;
    :hover {
        background-color: lightgray;
    }
`

const FbIcon = styled(FaFacebookF)`
    margin-left: 0.5rem;
    margin-right: 1rem;
    font-size: 1.6rem;
    font-weight: 200;
    transform: translateY(0.3rem);
`

class Img extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rotate: -6,
        }
        this.rotate = React.createRef()
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    componentDidMount() {
        window.addEventListener("scroll", e => this.handleNavigation(e))
    }

    handleNavigation = e => {
        const window = e.currentTarget
        if (this.rotate.current) {
            let bodyBoundingClientRect = document.body.getBoundingClientRect()
            let elementBoundingClientRect = this.rotate.current.getBoundingClientRect()
            let top = parseInt(
                elementBoundingClientRect.top - bodyBoundingClientRect.top
            )
            let currentScrollTop = window.pageYOffset

            let currentAttitude = -1 * (currentScrollTop - (top + 350 / 2))
            let landingAttitude = Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
            )
            let maximumLandingAngle = 10
            let rotationFix = 0.5 * maximumLandingAngle
            let currentLandingAngle =
                -1 *
                    ((currentAttitude * maximumLandingAngle) /
                        landingAttitude) +
                rotationFix

            this.setState({ rotate: currentLandingAngle })
        }
    }

    render() {
        return (
            <Image
                src="https://picsum.photos/250"
                style={{
                    transform: `rotate(${
                        this.props.isRight
                            ? -1 * this.state.rotate
                            : this.state.rotate
                    }deg)`,
                }}
                ref={this.rotate}
            />
        )
    }
}

export default class Content extends Component {
    render() {
        return (
            <Container>
                <Img isRight={this.props.isRight} />
                <ContentItemElement isRight={this.props.isRight}>
                    <Title>{this.props.title}</Title>
                    <Description>{this.props.text}</Description>
                    {this.props.fbPost && (
                        <Link href={this.props.fbLink} target="_blank">
                            <FbIcon />
                            Zobacz projekt na facebooku
                        </Link>
                    )}
                </ContentItemElement>
            </Container>
        )
    }
}
