import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";
import Links from "./Pages/links";

const LeRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/portfolio' element={<Home />} />
        <Route path='/links' element={<Links />} />
      </Routes>
    </Router>
  );
};

export default LeRoutes;
