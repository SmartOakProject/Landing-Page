import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import ContentItem from "../components/ContentItem"
import Wrapper from "../components/Wrapper"

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query download {
            allInternalPl {
                edges {
                    node {
                        download {
                            content {
                                type
                                title
                                img
                                desc

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
        <Layout removeCards>
            {data.allInternalPl.edges[1].node.download.content.map((e, i) => {
                return (
                    <ContentItem
                        download
                        title={intl.formatMessage({
                            id: `download.content.${i}.title`,
                        })}
                        desc={intl.formatMessage({
                            id: `download.content.${i}.desc`,
                        })}
                        id={e.alternative_id}
                        first={i === 0}
                        // btns={e.btns}
                        // btnPath={`download.content.${i}.btns`}
                        isBlack={true}
                    />
                )
            })}
        </Layout>
    )
}
export default IndexPage
