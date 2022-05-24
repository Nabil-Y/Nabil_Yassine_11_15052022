import React from "react";
import Logo from "../UI/SVG/Logo";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

/**
 * @returns {JSX.Element} Header Component
 */
const Header = () => {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  const isHomePage = pathname === "/";

  const isHomeLinkActive = () => {
    if (!isAboutPage)
      return isHomePage ? styles.active : styles["active-not-home-page"];
  };

  return (
    <header className={styles.header}>
      <div className={styles["header-wrapper"]}>
        <Logo />
        <nav>
          <ul className={styles["nav-list"]}>
            <li className={isHomeLinkActive()}>
              <Link to="/">Accueil</Link>
            </li>
            <li className={isAboutPage ? styles.active : ""}>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
