import React from "react"
import styled from "styled-components"

const ItemText = styled.p`
    margin: 4px 0;
`
const ItemMail = styled.a`
    color: #007bff;
    text-decoration: none;
    background-color: transparent;

    &:hover {
        color: #0056b3;
        text-decoration: underline;
    }
`

export default function Item({ title, phoneNumber, email }) {
    return (
        <div>
            <ItemText>{title}</ItemText>
            <ItemText>{phoneNumber}</ItemText>
            <ItemMail href={`mailto:${email}`}>{email}</ItemMail>
        </div>
    )
}
