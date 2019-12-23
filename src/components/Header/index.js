import React, { Component } from "react"

import headerBg from "../../images/header-bg.jpeg"

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.image = React.createRef()
    }
    componentDidMount() {
        window.addEventListener("scroll", this.handleNavigation)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleNavigation)
    }

    handleNavigation = () => {
        let ticking = false
        if (!ticking) {
            window.requestAnimationFrame(() => {
                let scrollPercent =
                    (window.pageYOffset / this.image.current.offsetHeight) * 100
                let factor = 3.6
                let currentScroll = scrollPercent / factor + 70

                if (
                    this.image.current.offsetHeight >=
                    window.pageYOffset - 50
                ) {
                    this.image.current.style.clipPath = `polygon(0 0, 100% 0, 100% ${currentScroll}%, 32% 100%, 0 ${currentScroll}%)`

                    this.image.current.style.WebkitClipPath = `polygon(0 0, 100% 0, 100% ${currentScroll}%, 32% 100%, 0 ${currentScroll}%)`
                }
                ticking = false
            })
            ticking = true
        }
    }

    render() {
        return (
            <div
                style={{
                    WebkitClipPath: `polygon(0 0, 100% 0, 100% 70%, 32% 100%, 0 70%)`,
                    clipPath: `polygon(0 0, 100% 0, 100% 70%, 32% 100%, 0 70%)`,
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

// import React, { Component } from "react"

// import headerBg from "../../images/header-bg.jpeg"
// let ticking = false
// export default class Header extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             scroll: 70,

//         }
//         this.image = React.createRef()
//     }
//     componentDidMount() {
//         window.addEventListener(
//             "wheel",
//             () => {
//                 if (!ticking) {
//                     window.requestAnimationFrame(() => {
//                         let scrollPercent =
//                             (window.pageYOffset /
//                                 this.image.current.offsetHeight) *
//                             100
//                         let factor = 3.6
//                         let currentScroll = scrollPercent / factor + 70
//                         if (
//                             this.image.current.offsetHeight >=
//                             window.pageYOffset - 50
//                         ) {
//                             this.setState({ scroll: currentScroll })
//                         }
//                         ticking = false
//                     })

//                     ticking = true
//                 }
//             },
//             { passive: true }
//         )
//     }

//     // componentWillUnmount() {
//     //     window.removeEventListener("scroll", this.handleNavigation)
//     // }

//     // handleNavigation = () => {
//     //     // window.requestAnimationFrame(() => {
//     //     // })
//     // }

//     render() {
//         return (
//             <div
//                 style={{
//                     WebkitClipPath: `polygon(0 0, 100% 0, 100% ${this.state.scroll}%, 32% 100%, 0 ${this.state.scroll}%)`,
//                     clipPath: `polygon(0 0, 100% 0, 100% ${this.state.scroll}%, 32% 100%, 0 ${this.state.scroll}%)`,
//                     width: "100%",
//                     height: "80vh",
//                     zIndex: "999",
//                     position: "relative",
//                     background: `url(${headerBg}) no-repeat center center / cover`,
//                 }}
//                 ref={this.image}
//             >
//                 {this.props.children}
//             </div>
//         )
//     }
// }
