import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import DropdownLarge from "./components/UI/Stateful/DropdownLarge";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/about"
          element={<DropdownLarge title="testTitle" info="testInfo" />}
        />
        <Route path="/" exact element={<Footer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
