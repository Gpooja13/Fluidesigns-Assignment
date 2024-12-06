import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./components/MainLayout";
import ComingSoon from "./pages/ComingSoon";

const App = () => {
  
  return (
    <Router>
      <Routes>
        {/* Wrap routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/attendence" element={<ComingSoon/>} />
          <Route path="/leaves" element={<ComingSoon/>} />
          <Route path="/company" element={<ComingSoon/>} />
          <Route path="/profile" element={<ComingSoon/>} />          
        </Route>    
      </Routes>
    </Router>
  );
};

export default App;
