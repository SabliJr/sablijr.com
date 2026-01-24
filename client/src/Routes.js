import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";

const LeRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/portfolio' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default LeRoutes;
