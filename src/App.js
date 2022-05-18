import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Dropdown from "./components/Dropdown/Dropdown";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Layout/Loader";

const App = () => {
  return (
    <>
      <Header />
      {/* <Loader /> */}
      <Routes>
        <Route
          path="/about"
          element={<Dropdown title="testTitle" info="testInfo" />}
        />
        <Route path="/" exact element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
