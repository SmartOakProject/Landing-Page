import React, { Component } from "react"
import styled from "styled-components"

const Img = styled.img`
    display: block;

    height: ${props => (props.support ? "22rem" : "32rem")};
    border-radius: 2.5rem;
    box-shadow: 0 0.8rem 1.6rem rgba(0, 0, 0, 0.5);
    will-change: transform;

    @media (max-width: 1100px) {
        height: 25rem;
    }
    @media only screen and (max-width: 901px) and (orientation: landscape) {
        height: 22rem;
    }
`
class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rotate: -6,
        }
        this.rotate = React.createRef()
    }
    componentDidMount() {
        if ((this.props.first && this.props.download) || this.props.support) {
            this.rotate.current.style.transform = `rotate(0.8deg)`
        }
        window.addEventListener("scroll", this.handleNavigation)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleNavigation)
    }

    handleNavigation = () => {
        window.requestAnimationFrame(() => {
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

                if (currentLandingAngle < 7 && currentLandingAngle > -7) {
                    // this.setState({ rotate: currentLandingAngle })

                    this.rotate.current.style.transform = `rotate(${
                        this.props.isRight
                            ? -1 * currentLandingAngle
                            : currentLandingAngle
                    }deg)`
                }
            }
        })
    }

    render() {
        return (
            <Img
                support={this.props.support}
                imgHeight={this.props.imgHeight}
                src="https://picsum.photos/250"
                style={{
                    transform: `rotate(${this.props.isRight ? 7 : -7}deg)`,
                }}
                ref={this.rotate}
            />
        )
    }
}
export default Image
