import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import GlobalStyle from "./GlobalStyles/GlobalStyles"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import Footer from "./Footer/Footer"
import FloatBtn from "./FloatBtn"
import Cookie from "./Cookie"
import Cards from "./Cards"

const Layout = ({ children, intl, removeCards, darkFooter, removeFooter }) => {
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
            {removeCards ? null : <Cards />}
            {removeFooter ? null : <Footer darkFooter={darkFooter} />}

            <Cookie />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default injectIntl(Layout)
