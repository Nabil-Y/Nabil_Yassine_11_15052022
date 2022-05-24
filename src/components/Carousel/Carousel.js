import React, { useState } from "react";
import PropTypes from "prop-types";
import Chevron from "../UI/SVG/Chevron";
import styles from "./Carousel.module.css";

/**
 * @param {Object} props
 * @param {String} props.title
 * @param {String | String[] | []} props.imgList
 * @returns {JSX.Element} Carousel Component
 */
const Carousel = ({ imgList, title }) => {
  const [counter, setCounter] = useState(1);
  if (imgList.length === 0) {
    return "";
  }

  if (imgList.length === 1) {
    return (
      <div className={styles.carousel}>
        <img src={imgList[0]} alt={title} />
      </div>
    );
  }

  /**
   * @returns {void} Decrements counter state
   */
  const handleClickLeft = () => {
    if (counter === 1) return setCounter(imgList.length);
    setCounter((prevCount) => prevCount - 1);
  };

  /**
   * @returns {void} Increments counter state
   */
  const handleClickRight = () => {
    if (counter === imgList.length) return setCounter(1);
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.carousel}>
      <button className={styles["chevron-left"]} onClick={handleClickLeft}>
        <Chevron />
      </button>

      <img src={imgList[counter - 1]} alt={title} />

      <div className={styles.counter}>
        {counter}/{imgList.length}
      </div>

      <button className={styles["chevron-right"]} onClick={handleClickRight}>
        <Chevron />
      </button>
    </div>
  );
};

Carousel.propTypes = {
  imgList: PropTypes.array,
  title: PropTypes.string,
};

export default Carousel;
