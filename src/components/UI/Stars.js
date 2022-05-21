import React from "react";
import PropTypes from "prop-types";
import Star from "./SVG/Star";
import styles from "./Stars.module.css";

const Stars = ({ rating }) => {
  const starsContainer = [<Star />, <Star />, <Star />, <Star />, <Star />];
  return (
    <div className={styles.stars}>
      {starsContainer.map((star, index) => {
        if (index < rating + 1) {
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
  rating: PropTypes.number,
};

export default Stars;
