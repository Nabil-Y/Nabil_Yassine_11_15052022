import React from "react";
import PropTypes from "prop-types";
import Chevron from "../UI/SVG/Chevron";
import styles from "./Dropdown.module.css";
import { useLocation } from "react-router-dom";

/**
 * @param {Object} props
 * @param {String} props.title
 * @param {String} props.description
 * @returns {JSX.Element} Dropdown Component
 */
const Dropdown = ({ title, description }) => {
  const { pathname } = useLocation();
  const isAboutPage = pathname === "/about";
  const detailsStyles = isAboutPage
    ? styles.details
    : `${styles.details} ${styles["house-page-details"]}`;
  return (
    <details className={detailsStyles}>
      <summary>
        {title} <Chevron />
      </summary>
      <p>{description}</p>
    </details>
  );
};

Dropdown.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Dropdown;
