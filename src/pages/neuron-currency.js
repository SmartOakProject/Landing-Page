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
        query neuronCurrency {
            allInternalPl {
                edges {
                    node {
                        neuronCurrency {
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
                        id: "neuronCurrency.header.title",
                    })}
                    desc={intl.formatMessage({
                        id: "neuronCurrency.header.desc",
                    })}
                    btns={
                        data.allInternalPl.edges[1].node.neuronCurrency.header
                            .btns
                    }
                    btnPath={`neuronCurrency.header.btns`}
                />
            </Header>
            {data.allInternalPl.edges[1].node.neuronCurrency.content.map(
                (e, i) => {
                    if (e.type === "item") {
                        return (
                            <ContentItem
                                title={intl.formatMessage({
                                    id: `neuronCurrency.content.${i}.title`,
                                })}
                                desc={intl.formatMessage({
                                    id: `neuronCurrency.content.${i}.desc`,
                                })}
                                id={e.alternative_id}
                                first={i === 0}
                                isRight={i % 2 === 0}
                                btns={e.btns}
                                btnPath={`neuronCurrency.content.${i}.btns`}
                                isBlack={true}
                            />
                        )
                    } else {
                        return (
                            <Wrapper
                                videoSrc={`NFoundation-${counter++}`}
                                videoImg={"todo"}
                                title={intl.formatMessage({
                                    id: `neuronCurrency.content.${i}.title`,
                                })}
                                desc={intl.formatMessage({
                                    id: `neuronCurrency.content.${i}.desc`,
                                })}
                                z={i + 1}
                                isSecond={i === 0}
                                btns={e.btns}
                                btnPath={`neuronCurrency.content.${i}.btns`}
                            />
                        )
                    }
                }
            )}
        </Layout>
    )
}
export default IndexPage
