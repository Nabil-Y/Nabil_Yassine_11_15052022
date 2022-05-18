import React from "react";
import Chevron from "../UI/SVG/Chevron";
import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  return (
    <details className={styles.details}>
      <summary>
        {props.title} <Chevron />
      </summary>
      <p>{props.info}</p>
    </details>
  );
};

export default Dropdown;
