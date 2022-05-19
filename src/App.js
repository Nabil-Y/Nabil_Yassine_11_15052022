import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Dropdown from "./components/Dropdown/Dropdown";
import Error from "./pages/Error/Error";
import { Routes, Route } from "react-router-dom";
// import Loader from "./components/Layout/Loader";

const App = () => {
  return (
    <>
      <Header />
      {/* <Loader /> */}
      <Routes>
        <Route
          path="/about"
          element={<Dropdown title="testTitle" description="testInfo" />}
        />
        <Route
          path="/"
          exact
          element={<Dropdown title="testTitle" description="testInfo" />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
