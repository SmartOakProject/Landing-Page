import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import TextHeader from '../components/TextHeader';
import ContentItem from '../components/ContentItem';
import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import { pageData } from '../components/common/pageData';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query neuronFoundation {
            allInternalPl {
                edges {
                    node {
                        neuronFoundation {
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
    `);
    const intl = useIntl();

    let counter = 1;
    return (
        <>
            <Header page="1">
                <TextHeader
                    link
                    title={intl.formatMessage({
                        id: 'neuronFoundation.header.title',
                    })}
                    desc={intl.formatMessage({
                        id: 'neuronFoundation.header.desc',
                    })}
                    btns={pageData(data.allInternalPl.edges, 'neuronFoundation').header.btns}
                    btnPath="neuronFoundation.header.btns"
                />
            </Header>
            {pageData(data.allInternalPl.edges, 'neuronFoundation').content.map((e, i) => {
                if (e.type === 'item') {
                    return (
                        <ContentItem
                            title={intl.formatMessage({
                                id: `neuronFoundation.content.${i}.title`,
                            })}
                            desc={intl.formatMessage({
                                id: `neuronFoundation.content.${i}.desc`,
                            })}
                            id={e.alternative_id}
                            first={i === 0}
                            isRight={i % 2 === 0}
                            btns={e.btns}
                            btnPath={`neuronFoundation.content.${i}.btns`}
                            isBlack
                        />
                    );
                }
                return (
                    <Wrapper
                        videoSrc={`NFoundation-${counter++}`}
                        videoImg="todo"
                        title={intl.formatMessage({
                            id: `neuronFoundation.content.${i}.title`,
                        })}
                        desc={intl.formatMessage({
                            id: `neuronFoundation.content.${i}.desc`,
                        })}
                        z={i + 1}
                        isSecond={i === 0}
                        btns={e.btns}
                        btnPath={`neuronFoundation.content.${i}.btns`}
                    />
                );
            })}
            <Cards />
            <Footer />
        </>
    );
};
export default IndexPage;
