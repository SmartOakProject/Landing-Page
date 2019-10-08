import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: var(--color-black);
  height: 80px;
  width: 100vw;
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function Nav() {
  return <Container>Nav</Container>
}
