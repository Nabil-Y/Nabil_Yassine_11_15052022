import React, { useState, useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Thumb from "../../components/UI/Thumb";
import Loader from "../../components/Layout/Loader";
import styles from "./Home.module.css";

const Home = () => {
  const [houseData, setHouseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("logements.json")
      .then((res) => {
        console.log(res);
        return res.json();
      })
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
          <Thumb
            key={item.id}
            imgURL={item.cover}
            imgAlt={item.title}
            title={item.title}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
