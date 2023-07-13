import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreSupervisor from "./pages/StoreSupervisor";
import CircularImage from "./components/CircularImage";
import MensWear from "./pages/MensWear";
import CategoriesPage from "./pages/CategoriesPage";
import AbstractPage from "../src/tcomp/register/AbstractPage";
import ClothAccess from "./tcomp/clothaccess/ClothAccesst";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AbstractPage/>} />
        <Route path="/login" element={<CircularImage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/cloth-accessories" element={<ClothAccess />} />
        <Route path="/clothing" element={<StoreSupervisor />} />
        <Route path="/clothing/menswear" element={<MensWear />} />
      </Routes>
    </Router>
  );
};

export default App;
