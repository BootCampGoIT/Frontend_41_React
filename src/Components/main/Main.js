import React from "react";
import styles from "./Main.module.css";
import styled from "styled-components";

const Container = styled.div`

  h2 {
    color: cornflowerblue;
  }

  h2.form {
    color: ${(props) => (props.isActive ? "red" : "green")};
    text-transform: uppercase;
  }
  div.box {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    width: 280px;
  }

  input.inputData {
    width: 100%;
    height: 30px;
    border: 1px solid black;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  /* input.inputData:last-of-type() {
    margin-bottom: 20px;
  } */
`;

export default function Main(props) {
  return (
    <Container isActive={props.isActive}>
      <div className={[`${styles.main}`, "container"].join(" ")}>
        <h2 className='title'>Main</h2>
        <h2 className='form'>Product form</h2>
        <div className='box'>
          <input type='text' className='inputData' />
          <input type='text' className='inputData' />
          <input type='text' className='inputData' />
          <button type='button'>Add product</button>
        </div>
      </div>
    </Container>
  );
}
