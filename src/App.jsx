import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreSupervisor from "./pages/StoreSupervisor";
import CircularImage from "./components/CircularImage";
import MensWear from "./pages/MensWear";
import CategoriesPage from "./pages/CategoriesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CircularImage />} />
        <Route path="/main" element={<CategoriesPage />} />
        <Route path="/clothing" element={<StoreSupervisor />} />
        <Route path="/clothing/menswear" element={<MensWear />} />
      </Routes>
    </Router>
  );
};

export default App;
