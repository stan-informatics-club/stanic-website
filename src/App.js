import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React from "react";
import "./App.css";
import Homepage from "./pages/HomePage/Homepage";
import TopRibbon from "./components/Ribbon/TopRibbon";
import BottomRibbon from "./components/BottomRibbon";
import About from "./pages/About/About";
import BPH from "./pages/BPH/BPH";
import Frontend from "./pages/Frontend/Frontend";
import Backend from "./pages/Backend/Backend";
import PR from "./pages/PR/PR";
import DS from "./pages/DS/DS";
import Design from "./pages/Design/Design";

function App() {
  return (
    <BrowserRouter>
      <TopRibbon />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/bph" element={<BPH />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/public-relation" element={<PR />} />
        <Route path="/data-science" element={<DS />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <BottomRibbon />
    </BrowserRouter>
  );
}

export default App;
