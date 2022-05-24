import React from "react";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import aboutData from "../../data/about";
import styles from "./About.module.css";

/**
 * @returns {JSX.Element} About Page JSX
 */
const About = () => {
  return (
    <main className={styles["about-page"]}>
      <Banner />
      {aboutData.map((item, index) => (
        <Dropdown key={item[0] + index} title={item[0]} description={item[1]} />
      ))}
    </main>
  );
};

export default About;
