import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"

import Item from "../components/Contact/Item"
import Form from "../components/Contact/Form"
import styled from "styled-components"

const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10rem;
    margin: 8rem 10rem;
    /* max-width: 100%; */

    @media screen and (max-width: 950px) {
        grid-template-columns: 1fr;
        grid-auto-flow: dense;
        grid-gap: 5rem;
    }
    @media screen and (max-width: 600px) {
        margin: 5rem 2rem;
        margin-top: 3rem;
    }
`

const ContactItems = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 25px;
    /* max-width: 100%; */
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 25px;
        margin: 0 auto;

        /* margin: 0 auto; */
    }
    @media screen and (max-width: 790px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query contact {
            allInternalPl {
                edges {
                    node {
                        contact {
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
    console.log(data.allInternalPl.edges[1].node.contact.content)

    return (
        <Layout removeCards>
            <ContactWrapper>
                <ContactItems>
                    {data.allInternalPl.edges[1].node.contact.content.map(e => {
                        console.log(e)

                        return (
                            <Item
                                title={e.title}
                                phoneNumber={e.desc}
                                email={e.btns[0].btnText}
                            />
                        )
                    })}
                </ContactItems>
                <Form />
            </ContactWrapper>
        </Layout>
    )
}
export default IndexPage
