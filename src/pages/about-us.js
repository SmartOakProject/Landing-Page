import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from '../components/Header';
import TextHeader from '../components/TextHeader';
import AboutUsCard from '../components/AboutUsCard';
import Footer from '../components/Footer';
import { pageData } from '../components/common/pageData';

const Container = styled.div`
    display: block;
    max-width: 1100px;
    padding: 0px 1rem;
    margin: 10rem auto 0rem;
`;

const Row = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-items: flex-start;
    align-items: flex-start;
    width: 100%;
    margin: 2rem 0;
`;

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query aboutUs {
            allInternalPl {
                edges {
                    node {
                        aboutUs {
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
                                alternative_id
                            }
                        }
                    }
                }
            }
        }
    `);
    const intl = useIntl();

    return (
        <>
            <Header page="1">
                <TextHeader
                    link
                    title={intl.formatMessage({
                        id: 'aboutUs.header.title',
                    })}
                    desc={intl.formatMessage({
                        id: 'aboutUs.header.desc',
                    })}
                    btns={pageData(data.allInternalPl.edges, 'aboutUs').header.btns}
                    btnPath="aboutUs.header.btns"
                    isLast
                />
            </Header>
            <Container>
                <Row>
                    {pageData(data.allInternalPl.edges, 'aboutUs').content.map((e, i) => {
                        return (
                            <AboutUsCard
                                title={intl.formatMessage({
                                    id: `aboutUs.content.${i}.title`,
                                })}
                                desc={intl.formatMessage({
                                    id: `aboutUs.content.${i}.desc`,
                                })}
                                img={intl.formatMessage({
                                    id: `aboutUs.content.${i}.img`,
                                })}
                            />
                        );
                    })}
                </Row>
            </Container>
            <Footer />
        </>
    );
};
export default IndexPage;
