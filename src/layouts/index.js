import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import GlobalStyle from "../components/GlobalStyles/GlobalStyles"
import Nav from "../components/Nav"
import MobileNav from "../components/MobileNav"

import FloatBtn from "../components/FloatBtn"
import Cookie from "../components/Cookie"

const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Helmet>
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,maximum-scale=1, shrink-to-fit=no,user-scalable=no,minimal-ui,viewport-fit=cover"
                />
                <title>Home</title>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                document.addEventListener("touchmove",
                function(e) {
                  e.preventDefault();
                }, { passive: false }
              );
`,
                    }}
                />
            </Helmet>
            <FloatBtn />
            <Nav />
            <MobileNav />
            {children}

            <Cookie />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
