import React, { Component } from "react"

import headerBg from "../../images/header-bg.jpeg"

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            scroll: 70,
            renderState: true,
        }
        this.image = React.createRef()
    }
    componentDidMount() {
        this.prev = window.scrollY
        window.addEventListener("scroll", e => this.handleNavigation(e))
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleNavigation = event => {
        const widowOfHeader = event.currentTarget

        window.requestAnimationFrame(() => {
            let max
            if (this.image.current) {
                max = this.image.current.offsetHeight
            }

            let scrollPercent = (widowOfHeader.pageYOffset / max) * 100
            let factor = 3
            let currentScroll = scrollPercent / factor + 70

            if (currentScroll <= 100) {
                this.setState({ scroll: currentScroll })
            }
        })
    }

    render() {
        return (
            <div
                style={{
                    clipPath: `polygon(0 0, 100% 0, 100% ${this.state.scroll}%, 32% 100%, 0 ${this.state.scroll}%)`,
                    WebkitClipPath: `polygon(0 0, 100% 0, 100% ${this.state.scroll}%, 32% 100%, 0 ${this.state.scroll}%)`,
                    width: "100%",
                    height: "85vh",
                    zIndex: "999",
                    position: "relative",
                    background: `url(${headerBg}) no-repeat center center / cover`,
                }}
                ref={this.image}
            >
                {this.props.children}
            </div>
        )
    }
}
