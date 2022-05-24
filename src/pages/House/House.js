import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error/Error";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import Profile from "../../components/Profile/Profile";
import Loader from "../../components/Layout/Loader";
import styles from "./House.module.css";

/**
 * @returns {JSX.Element} House Page JSX
 */
const House = () => {
  const [houseData, setHouseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // House id
  const { id } = useParams();

  useEffect(() => {
    fetch("../logements.json")
      .then((res) => res.json())
      .then((data) => {
        setHouseData(...data.response.filter((house) => house.id === id));
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  /**
   * @returns {JSX.Element} House page JSX JSX when house id exists
   */
  const displayHousePage = () => {
    const { title, pictures, description, equipments } = houseData;

    /**
     * Stores equipments array as a string with better formating
     * @type {String}
     */
    const equipmentsDescription = equipments
      .map((item) => item + "\n")
      .join("");

    return (
      <main className={styles["house-page"]}>
        <div className={styles["house-page-wrapper"]}>
          <Carousel title={title} imgList={pictures} />
          <Profile houseData={houseData} />
          <section className={styles.descriptions}>
            <Dropdown title={"Description"} description={description} />
            <Dropdown
              title={"Équipements"}
              description={equipmentsDescription}
            />
          </section>
        </div>
      </main>
    );
  };

  if (isLoading) {
    return <Loader />;
  } else if (houseData === undefined) {
    return <Error />;
  } else {
    return displayHousePage();
  }
};
export default House;
