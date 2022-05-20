import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Banner from "./components/Banner/Banner";
import Error from "./pages/Error/Error";
import { Routes, Route } from "react-router-dom";
// import Loader from "./components/Layout/Loader";

const App = () => {
  return (
    <>
      <Header />
      {/* <Loader /> */}
      <Routes>
        <Route path="/about" element={<Banner />} />
        <Route path="/" exact element={<Banner />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
