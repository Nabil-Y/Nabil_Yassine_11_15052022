import React, { useState } from "react";
import Chevron from "../SVG/Chevron";
import styles from "./DropdownLarge.module.css";

const DropdownLarge = (props) => {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible((prevState) => !prevState);
  };

  return (
    <section className={styles.dropdown}>
      <div className={styles.toggle} onClick={clickHandler}>
        <h2 className={styles.title}>{props.title}</h2>
        <Chevron className={isVisible ? styles.open : styles.closed} />
      </div>
      {isVisible && (
        <div className={styles["toggled__info"]}>
          <p className={styles.info}>{props.info}</p>
        </div>
      )}
    </section>
  );
};

export default DropdownLarge;
