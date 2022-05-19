import React, { useEffect, useState } from "react";
import Logo from "../UI/SVG/Logo";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  let liStyle = styles.active;

  if (window.innerWidth > 768) {
    if (pathname !== "/" && pathname !== "/about") {
      liStyle = "";
    }
  }

  return (
    <header className={styles.header}>
      <Logo />
      <nav>
        <ul className={styles["nav-list"]}>
          <li className={isAboutPage ? "" : liStyle}>
            <Link to="/">Accueil</Link>
          </li>
          <li className={isAboutPage ? liStyle : ""}>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
