import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import House from "./pages/House/House";
import { Routes, Route } from "react-router-dom";

/**
 * Main App with router
 * @returns {JSX.Element} Full React App code
 */
const App = () => {
  return (
    <>
      <Header />
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
