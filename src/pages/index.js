import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../components/Header';
import TextHeader from '../components/TextHeader';

import Wrapper from '../components/Wrapper';
import Footer from '../components/Footer';
import { pageData } from '../components/common/pageData';

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
    `);
    const intl = useIntl();

    return (
        <>
            <Header page="1">
                <TextHeader
                    link
                    title={intl.formatMessage({ id: 'home.header.title' })}
                    desc={intl.formatMessage({ id: 'home.header.desc' })}
                    btns={pageData(data.allInternalPl.edges, 'home').header.btns}
                    btnPath="home.header.btns"
                />
            </Header>
            {pageData(data.allInternalPl.edges, 'home').content.map((e, i) => {
                return (
                    <Wrapper
                        isBlack={i % 2 === 0}
                        videoSrc={`home-${i}`}
                        imgSrc="dsadasd"
                        title={intl.formatMessage({
                            id: `home.content.${i}.title`,
                        })}
                        desc={intl.formatMessage({
                            id: `home.content.${i}.desc`,
                        })}
                        z={i + 1}
                        isSecond={i === 0}
                        isLast={i === pageData(data.allInternalPl.edges, 'home').content.length - 1}
                        btns={e.btns}
                        btnPath={`home.content.${i}.btns`}
                    />
                );
            })}

            <Footer darkFooter />
        </>
    );
};
export default IndexPage;
