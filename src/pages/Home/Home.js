import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/UI/Thumb";
import Loader from "../../components/Layout/Loader";
import styles from "./Home.module.css";

const Home = () => {
  const [houseData, setHouseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("logements.json")
      .then((res) => res.json())
      .then((data) => {
        setHouseData(data.response);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <main className={styles["home-page"]}>
      <Banner />
      <section className={styles.houses}>
        {houseData.map((item) => (
          <Link key={item.id} to={`house/${item.id}`}>
            <Thumb imgURL={item.cover} imgAlt={item.title} title={item.title} />
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Home;
