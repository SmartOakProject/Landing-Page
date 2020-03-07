import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { useStaticQuery, graphql } from 'gatsby';
import ContentItem from '../components/ContentItem';
import Footer from '../components/Footer/Footer';
import { pageData } from '../components/common/pageData';

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
    `);
    const intl = useIntl();

    return (
        <>
            {pageData(data.allInternalPl.edges, 'download').content.map((e, i) => {
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
                        isBlack
                    />
                );
            })}
            <Footer />
        </>
    );
};
export default IndexPage;
