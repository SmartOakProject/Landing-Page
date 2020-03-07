import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';

import Card from './components/Card';
import img1 from '../../images/news/1.jpeg';
import img2 from '../../images/news/2.jpeg';
import img3 from '../../images/news/3.jpeg';
import img4 from '../../images/news/4.jpeg';
import img5 from '../../images/news/5.jpeg';
import img6 from '../../images/news/6.jpeg';

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    padding-top: 5rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    /* @media screen and (max-width: 1560px) {
        grid-template-columns: repeat(3, 1fr);
    } */
    @media screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Section = () => {
    const intl = useIntl();

    return (
        <Container>
            <Card
                img={img1}
                title={intl.formatMessage({
                    id: 'cards.content.0.title',
                })}
                text={intl.formatMessage({
                    id: 'cards.content.0.desc',
                })}
            />
            <Card
                img={img2}
                title={intl.formatMessage({
                    id: 'cards.content.1.title',
                })}
                text={intl.formatMessage({
                    id: 'cards.content.1.desc',
                })}
            />
            <Card
                img={img3}
                title={intl.formatMessage({
                    id: 'cards.content.2.title',
                })}
                text={intl.formatMessage({
                    id: 'cards.content.2.desc',
                })}
            />
            <Card
                img={img4}
                title={intl.formatMessage({
                    id: 'cards.content.3.title',
                })}
                text={intl.formatMessage({
                    id: 'cards.content.3.desc',
                })}
            />
            <Card
                img={img5}
                title={intl.formatMessage({
                    id: 'cards.content.4.title',
                })}
                text={intl.formatMessage({
                    id: 'cards.content.4.desc',
                })}
            />
            <Card
                img={img6}
                title={intl.formatMessage({
                    id: 'cards.content.5.title',
                })}
                text={intl.formatMessage({
                    id: 'cards.content.5.desc',
                })}
            />
        </Container>
    );
};
export default Section;
