import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Header from "../components/Header"
import TextHeader from "../components/TextHeader"
import ContentItem from "../components/ContentItem"
import Wrapper from "../components/Wrapper"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query oakesClinic {
            allInternalPl {
                edges {
                    node {
                        oakesClinic {
                            header {
                                alternative_id
                                btns {
                                    btnLink
                                    btnText
                                    btnType
                                }
                                desc
                                title
                            }
                            content {
                                type
                                title
                                img
                                desc
                                btns {
                                    btnLink
                                    btnText
                                    btnType
                                }
                                alternative_id
                            }
                        }
                    }
                }
            }
        }
    `)
    const intl = useIntl()

    let counter = 1
    return (
        <Layout>
            <Header page="1">
                <TextHeader
                    link
                    title={intl.formatMessage({
                        id: "oakesClinic.header.title",
                    })}
                    desc={intl.formatMessage({
                        id: "oakesClinic.header.desc",
                    })}
                    btns={
                        data.allInternalPl.edges[1].node.oakesClinic.header.btns
                    }
                    btnPath={`oakesClinic.header.btns`}
                />
            </Header>
            {data.allInternalPl.edges[1].node.oakesClinic.content.map(
                (e, i) => {
                    if (e.type === "item") {
                        return (
                            <ContentItem
                                title={intl.formatMessage({
                                    id: `oakesClinic.content.${i}.title`,
                                })}
                                desc={intl.formatMessage({
                                    id: `oakesClinic.content.${i}.desc`,
                                })}
                                id={e.alternative_id}
                                first={i === 0}
                                isRight={i % 2 === 0}
                                btns={e.btns}
                                btnPath={`oakesClinic.content.${i}.btns`}
                                isBlack={true}
                            />
                        )
                    } else {
                        return (
                            <Wrapper
                                videoSrc={`NFoundation-${counter++}`}
                                videoImg={"todo"}
                                title={intl.formatMessage({
                                    id: `oakesClinic.content.${i}.title`,
                                })}
                                desc={intl.formatMessage({
                                    id: `oakesClinic.content.${i}.desc`,
                                })}
                                z={i + 1}
                                isSecond={i === 0}
                                btns={e.btns}
                                btnPath={`oakesClinic.content.${i}.btns`}
                            />
                        )
                    }
                }
            )}
        </Layout>
    )
}
export default IndexPage
