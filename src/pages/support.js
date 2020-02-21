import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Machine from "../components/Machine"
import styled from "styled-components"

import SupportItem from "../components/SupportItem"
import Footer from "../components/Footer/Footer"

const Title = styled.h2`
    font-size: 2.6rem;
    line-height: 1.1;
    color: rgb(14, 25, 110);
    font-weight: 300;
    margin: 0rem auto 4rem auto;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 1100px) {
        padding-top: 3rem;
    }
`
const SupportItemContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* grid-template-columns: repeat(4, 1fr); */
    padding-top: 0rem;
    padding-bottom: 2rem;

    /* @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    } */
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query support {
            allInternalPl {
                edges {
                    node {
                        support {
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
    const machineData = data.allInternalPl.edges[1].node.support.content.map(
        (e, i) => {
            return {
                id: e.alternative_id,
                title: intl.formatMessage({
                    id: `support.content.${i}.title`,
                }),
                desc: intl.formatMessage({
                    id: `support.content.${i}.desc`,
                }),
                img: intl.formatMessage({
                    id: `support.content.${i}.img`,
                }),
                btns: intl.formatMessage({
                    id: `support.content.${i}.btns`,
                }),
            }
        }
    )
    return (
        <>
            <Machine data={machineData} />
            <Title>
                {intl.formatMessage({
                    id: "general.allProjectList",
                })}
            </Title>
            <div></div>
            <SupportItemContainer>
                {data.allInternalPl.edges[1].node.support.content.map(
                    (e, i) => {
                        return (
                            <SupportItem
                                support
                                title={intl.formatMessage({
                                    id: `support.content.${i}.title`,
                                })}
                                desc={intl.formatMessage({
                                    id: `support.content.${i}.desc`,
                                })}
                                id={e.alternative_id}
                                first={i === 0}
                                isRight={i % 2 === 0}
                                btns={e.btns}
                                btnPath={`support.content.${i}.btns`}
                                isBlack={true}
                            />
                        )
                    }
                )}
            </SupportItemContainer>

            <Footer />
        </>
    )
}
export default IndexPage
