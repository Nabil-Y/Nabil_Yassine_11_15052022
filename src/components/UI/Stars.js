import React from "react";
import PropTypes from "prop-types";
import Star from "./SVG/Star";
import styles from "./Stars.module.css";

/**
 * @param {Object} props
 * @param {String} props.rating
 * @returns {JSX.Element} Stars Component JSX code
 */
const Stars = ({ rating }) => {
  const starsContainer = [<Star />, <Star />, <Star />, <Star />, <Star />];
  const numberRating = +rating;
  return (
    <div className={styles.stars}>
      {starsContainer.map((star, index) => {
        if (index < numberRating) {
          return (
            <div key={index + rating} className={styles.filled}>
              {star}
            </div>
          );
        } else {
          return <div key={index + rating}>{star}</div>;
        }
      })}
    </div>
  );
};

Stars.propTypes = {
  rating: PropTypes.string,
};

export default Stars;
