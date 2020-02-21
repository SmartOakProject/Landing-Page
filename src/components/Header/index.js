import React, { Component } from "react"
import headerBg from "../../images/header-bg.jpeg"

import * as _ from "underscore"

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.image = React.createRef()
    }

    componentDidMount() {
        window.addEventListener("scroll", _.throttle(this.handleNavigation, 50))
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleNavigation)
    }

    handleNavigation = () => {
        window.requestAnimationFrame(() => {
            if (this.image.current) {
                let scrollPercent =
                    (window.pageYOffset / this.image.current.offsetHeight) * 100
                let factor = 3.4
                let currentScroll = scrollPercent / factor + 70

                if (
                    this.image.current.offsetHeight >=
                    window.pageYOffset - 50
                ) {
                    this.image.current.style.clipPath = `polygon(0 0, 100% 0, 100% ${currentScroll}%, 32% 100%, 0 ${currentScroll}%)`

                    this.image.current.style.WebkitClipPath = `polygon(0 0, 100% 0, 100% ${currentScroll}%, 32% 100%, 0 ${currentScroll}%)`
                }
            }
        })
    }

    render() {
        return (
            <div
                ref={this.image}
                style={{
                    WebkitClipPath: `polygon(0 0, 100% 0, 100% 70%, 32% 100%, 0 70%)`,
                    clipPath: `polygon(0 0, 100% 0, 100% 70%, 32% 100%, 0 70%)`,
                    width: "100%",
                    height: "86vh",
                    zIndex: "999",
                    position: "relative",
                    WebkitTransform: "translate3d(0, 0, 0)",
                    transform: "translate3d(0, 0, 0)",
                    // transition: "height 999999s",
                    willChange: "transform",
                    background: `url(${headerBg}) no-repeat center center / cover`,
                }}
            >
                {this.props.children}
            </div>
        )
    }
}
