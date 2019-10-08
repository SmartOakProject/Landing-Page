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
export default function Footer() {
  return <Container>Footer</Container>
}
