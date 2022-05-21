import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Banner from "./components/Banner/Banner";
import Error from "./pages/Error/Error";
import Profile from "./components/Profile/Profile";
import { Routes, Route } from "react-router-dom";
// import Loader from "./components/Layout/Loader";

const App = () => {
  const houseData = {
    id: "c67ab8a7",
    title: "Appartement cosy",
    cover:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-4.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-5.jpg",
    ],
    description:
      "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    host: {
      name: "Nathalie Jean",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
    },
    rating: "5",
    location: "Ile de France - Paris 17e",
    equipments: [
      "Équipements de base",
      "Micro-Ondes",
      "Douche italienne",
      "Frigo",
      "WIFI",
    ],
    tags: ["Batignolle", "Montmartre"],
  };
  return (
    <>
      <Header />
      {/* <Loader /> */}
      <Routes>
        <Route path="/about" element={<Profile houseData={houseData} />} />
        <Route path="/" exact element={<Banner />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
