import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import House from "./pages/House/House";
import { Routes, Route } from "react-router-dom";
// import Loader from "./components/Layout/Loader";

const App = () => {
  return (
    <>
      <Header />
      {/* <Loader /> */}
      <Routes>
        <Route path="/house/:id" element={<House />} />
        <Route path="/about" element={<About />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
