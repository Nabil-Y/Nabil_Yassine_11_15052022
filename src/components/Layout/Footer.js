import React from "react";
import Logo from "../UI/SVG/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <div className={styles["footer__info"]}>
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
