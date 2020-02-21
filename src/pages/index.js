import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/Header"
import TextHeader from "../components/TextHeader"

import Wrapper from "../components/Wrapper"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query Home {
            allInternalPl {
                edges {
                    node {
                        home {
                            header {
                                alternative_id
                                title
                                desc
                                btns {
                                    btnType
                                    btnText
                                    btnLink
                                }
                            }
                            content {
                                alternative_id
                                type
                                title
                                desc
                                btns {
                                    btnType
                                    btnText
                                    btnLink
                                }
                            }
                        }
                    }
                }
            }
        }
    `)
    const intl = useIntl()

    return (
        <Layout removeCards darkFooter>
            <Header page="1">
                <TextHeader
                    link
                    title={intl.formatMessage({ id: "home.header.title" })}
                    desc={intl.formatMessage({ id: "home.header.desc" })}
                    btns={data.allInternalPl.edges[1].node.home.header.btns}
                    btnPath={`home.header.btns`}
                />
            </Header>
            {data.allInternalPl.edges[1].node.home.content.map((e, i) => {
                return (
                    <Wrapper
                        isBlack={i % 2 === 0}
                        videoSrc={`home-${i}`}
                        imgSrc={"dsadasd"}
                        title={intl.formatMessage({
                            id: `home.content.${i}.title`,
                        })}
                        desc={intl.formatMessage({
                            id: `home.content.${i}.desc`,
                        })}
                        z={i + 1}
                        isSecond={i === 0}
                        isLast={
                            i ===
                            data.allInternalPl.edges[1].node.home.content
                                .length -
                                1
                        }
                        btns={e.btns}
                        btnPath={`home.content.${i}.btns`}
                    />
                )
            })}
        </Layout>
    )
}
export default IndexPage
