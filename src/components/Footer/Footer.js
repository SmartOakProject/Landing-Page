import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: #ccc;
  height: 10rem;
  width: 100vw;
  color: var(--color-white);
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
`


export default function Footer() {
  return (
    <Container></Container>
  )
}