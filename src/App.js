import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Register from "./Pages/Register/Register";
import Search from "./Pages/search/search";
function App() {
  return (
    <Router>

    <Header/>

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/search" element={<Search />} />


    </Routes>


    <Footer/>

    </Router>
  );
}

export default App; 