import React from "react"
import styled from "styled-components"

const Container = styled.div`
  height: 70rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0;
`
const Image = styled.div`
  background-color: orangered;
  height: 370px;
  width: 370px;
`
const Description = styled.p`
  font-size: 30px;
  width: 70rem;
`

export default function Content(props) {
  return (
    <Container>
      <Image />
      <Description>{props.text}</Description>
    </Container>
  )
}
