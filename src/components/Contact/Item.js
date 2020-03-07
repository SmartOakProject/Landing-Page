import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ItemText = styled.p`
    margin: 4px 0;
`;
const ItemMail = styled.a`
    color: #007bff;
    text-decoration: none;
    background-color: transparent;

    &:hover {
        color: #0056b3;
        text-decoration: underline;
    }
`;

const Item = ({ title, phoneNumber, email }) => {
    return (
        <div>
            <ItemText>{title}</ItemText>
            <ItemText>{phoneNumber}</ItemText>
            <ItemMail href={`mailto:${email}`}>{email}</ItemMail>
        </div>
    );
};
Item.propTypes = {
    title: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
};
export default Item;
