import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useIntl } from 'gatsby-plugin-intl';
import { FaArrowDown } from 'react-icons/fa';
import icon2 from '../../images/gamble/icon-2.svg';
import icon4 from '../../images/gamble/icon-4.svg';
import icon5 from '../../images/gamble/icon-5.svg';
import icon6 from '../../images/gamble/icon-6.svg';
import icon7 from '../../images/gamble/icon-7.svg';

const textScroll = keyframes`
 0% {
    transform: translateX(100%);
    }
    100% {
        transform: translateX(-100%);
    }
`;
const arrow = keyframes`
 0% {
    transform: translateY(-15%);
    }
    50% {
        transform: translateY(15%);
    }
    100% {
        transform: translateY(-15%);
    }
`;

const AdContainer = styled.div`
    width: 100%;
    height: 34px;
    background-color: #f4f4f4;
    overflow: hidden;
    position: relative;
    border-radius: 5px;
`;

const AdMain = styled.div`
    width: 100%;
    height: 100%;
    transform: translateX(100%);
    position: absolute;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    will-change: transform;

    animation: ${textScroll} 8s linear infinite;

    ${({ secondary }) =>
        secondary &&
        css`
            animation-delay: 4s;
        `}
`;

const AdText = styled.p`
    color: red;
    letter-spacing: 2px;
    font-weight: 500;
    text-shadow: 1px 1px 1px #ff4600;
    font-size: 2.2rem;
    text-transform: uppercase;
    margin: 0 0rem;
`;
const IconDown = styled(FaArrowDown)`
    font-size: 2rem;
    margin: auto 1.9rem;
    color: red;
    will-change: transform;
    animation: ${arrow} 0.6s linear infinite;
`;
const Icon = styled.img`
    width: 2.5rem;
    margin: auto 2rem;
`;
const Ad = () => {
    const intl = useIntl();

    return (
        <AdContainer>
            <AdMain>
                <Icon src={icon4} />
                <Icon src={icon5} />
                <Icon src={icon2} />
                <AdText>
                    {intl.formatMessage({
                        id: 'general.getAddicted',
                    })}
                </AdText>
                <Icon src={icon6} />
                <Icon src={icon5} />
                <Icon src={icon7} />
            </AdMain>
            <AdMain secondary>
                <IconDown />
                <IconDown />
                <AdText>
                    {intl.formatMessage({
                        id: 'general.chooseProjekt',
                    })}
                </AdText>
                <IconDown />
                <IconDown />
            </AdMain>
        </AdContainer>
    );
};

export default Ad;
