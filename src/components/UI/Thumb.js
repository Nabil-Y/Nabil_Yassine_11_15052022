import React from "react";
import styles from "./Thumb.module.css";

const Thumb = (props) => {
  return (
    <article className={styles.thumb}>
      <img src={props.imgURL} alt={props.imgALT} className={styles.img} />
      <h2 className={styles.title}>{props.title}</h2>
    </article>
  );
};

export default Thumb;
