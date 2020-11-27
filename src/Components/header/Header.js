import React from "react";
import styles from "./Header.module.css";

// const styles = {
//   width: "100vw",
//   height: "50px",
//   backgroundColor: "black",
//   color: "white",
// };

export default function Header(props) {
  return (
    <div className={[`${styles.header}`, "container"].join(" ")}>
      <h2 className={props.isActive ? styles.activeColor : styles.colored}>
        {props.text}
      </h2>
    </div>
  );
}
