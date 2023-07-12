import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StoreSupervisor from "./pages/StoreSupervisor";
import CircularImage from "./components/CircularImage";
import MensWear from "./pages/MensWear";
import MainDash from "./pages/MainDash";
import CategoriesPage from "./pages/CategoriesPage";
import ClothAccess from "./pages/ClothAccess";
import DashBoardNav from "./tcomp/dashbaordNav/DashBoardNav";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<CircularImage />} />
    //     <Route path="/main" element={<MainDash />} />
    //     <Route path="/categories" element={<CategoriesPage />} />
    //     <Route path="/clothing" element={<StoreSupervisor />} />
    //     <Route path="/clothing-accessories" element={<ClothAccess />} />
    //     <Route path="/clothing/menswear" element={<MensWear />}></Route>
    //   </Routes>
    // </Router>
    // <DashBoardNav/>
    // <CategoriesPage />
    <ClothAccess />

  );
};

export default App;
