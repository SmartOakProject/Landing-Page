import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Img = styled.img`
    display: block;
    height: ${({support}) => (support ? "22rem" : "32rem")};
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
const Image = ({ first, download, support, isRight }) => {
    const rotateRef = useRef()

    const handleNavigation = () => {
        window.requestAnimationFrame(() => {
            if (rotateRef.current) {
                let bodyBoundingClientRect = document.body.getBoundingClientRect()
                let elementBoundingClientRect = rotateRef.current.getBoundingClientRect()
                let top = parseInt(
                    elementBoundingClientRect.top - bodyBoundingClientRect.top
                )
                let currentScrollTop = window.pageYOffset

                let currentAttitude = -1 * (currentScrollTop - (top + 350 / 2))
                let landingAttitude = Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                )
                const maximumLandingAngle = 10
                let rotationFix = 0.5 * maximumLandingAngle
                let currentLandingAngle =
                    -1 *
                        ((currentAttitude * maximumLandingAngle) /
                            landingAttitude) +
                    rotationFix

                if (currentLandingAngle < 7 && currentLandingAngle > -7) {
                    // this.setState({ rotate: currentLandingAngle })

                    rotateRef.current.style.transform = `rotate(${
                        isRight ? -1 * currentLandingAngle : currentLandingAngle
                    }deg)`
                }
            }
        })
    }
    
    useEffect(() => {
        if ((first && download) || support) {
            rotateRef.current.style.transform = `rotate(0.8deg)`
        }

        window.addEventListener("scroll", handleNavigation)

        return () => {
            window.removeEventListener("scroll", handleNavigation)
        }
    }, [])

    
    return (
        <Img
            support={support}
            src="https://picsum.photos/250"
            style={{
                transform: `rotate(${isRight ? 7 : -7}deg)`,
            }}
            ref={rotateRef}
        />
    )
}

Image.propTypes = {
    isRight: PropTypes.bool,
    first: PropTypes.bool,
    download: PropTypes.bool,
    support: PropTypes.bool,
}

export default Image
