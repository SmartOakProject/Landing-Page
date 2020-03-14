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
        query iMundus {
            allInternalPl {
                edges {
                    node {
                        iMundus {
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
                        id: 'iMundus.header.title',
                    })}
                    desc={intl.formatMessage({
                        id: 'iMundus.header.desc',
                    })}
                    btns={pageData(data.allInternalPl.edges, 'iMundus').header.btns}
                    btnPath="iMundus.header.btns"
                />
            </Header>
            {pageData(data.allInternalPl.edges, 'iMundus').content.map((e, i) => {
                if (e.type === 'item') {
                    return (
                        <ContentItem
                            title={intl.formatMessage({
                                id: `iMundus.content.${i}.title`,
                            })}
                            desc={intl.formatMessage({
                                id: `iMundus.content.${i}.desc`,
                            })}
                            id={e.alternative_id}
                            first={i === 0}
                            isRight={i % 2 === 0}
                            btns={e.btns}
                            btnPath={`iMundus.content.${i}.btns`}
                            isBlack
                        />
                    );
                }
                return (
                    <Wrapper
                        videoSrc={`NFoundation-${counter++}`}
                        videoImg="todo"
                        title={intl.formatMessage({
                            id: `iMundus.content.${i}.title`,
                        })}
                        desc={intl.formatMessage({
                            id: `iMundus.content.${i}.desc`,
                        })}
                        z={i + 1}
                        isSecond={i === 0}
                        btns={e.btns}
                        btnPath={`iMundus.content.${i}.btns`}
                    />
                );
            })}
            <Cards />
            <Footer />
        </>
    );
};
export default IndexPage;
