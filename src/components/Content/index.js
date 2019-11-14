import React from "react"
import styled from "styled-components"
import ContentItem from "./components/ContentItem"

const ContentElement = styled.div`
    margin-top: 15rem;
    background-color: #fff;
`

export default function Content(props) {
    const text = props.text
    const textList = text.map(e => (
        <ContentItem
            title={e.title}
            text={e.desc}
            fbPost={e.post}
            fbLink={e.link}
            isRight={e.isRight}
        />
    ))
    return <ContentElement>{textList}</ContentElement>
}
