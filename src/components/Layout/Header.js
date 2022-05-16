import React from "react";
import Logo from "../UI/SVG/Logo";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles["nav-list"]}>
          <li className={styles.active}>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
