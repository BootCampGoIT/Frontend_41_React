import React from "react";
import styles from "./Footer.module.css";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 50px;
  background-color: black;
  padding: 5px;
`;

const Title = styled.h2`
  color: ${(props) => (props.isActive ? "blue" : "pink")};
`;

export default function Footer(props) {
  return (
    <Container>
      <Title isActive={props.isActive}>Footer</Title>
    </Container>
  );
}
