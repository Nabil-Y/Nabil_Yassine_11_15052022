import React from "react";
import styles from "./Tag.module.css";

const Tag = (props) => {
  return <div className={styles.tag}>{props.text}</div>;
};

export default Tag;
