import React, { Component } from "react"
import styled from "styled-components"

import ContentItem from "../Content/components/ContentItem"

const Container = styled.div`
    margin: 5rem 0;
`

export default class Support extends Component {
    render() {
        return (
            <Container>
                <ContentItem
                    support
                    imgHeight="15rem"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde quibusdam odit quia voluptatum quidem, voluptas magnam vero ducimus magni?"
                />
                <ContentItem
                    support
                    imgHeight="15rem"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde quibusdam odit quia voluptatum quidem, voluptas magnam vero ducimus magni?"
                />
                <ContentItem
                    support
                    imgHeight="15rem"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde quibusdam odit quia voluptatum quidem, voluptas magnam vero ducimus magni?"
                />
                <ContentItem
                    support
                    imgHeight="15rem"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde quibusdam odit quia voluptatum quidem, voluptas magnam vero ducimus magni?"
                />
                <ContentItem
                    support
                    imgHeight="15rem"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo unde quibusdam odit quia voluptatum quidem, voluptas magnam vero ducimus magni?"
                />
            </Container>
        )
    }
}
