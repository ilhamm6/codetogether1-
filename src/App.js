import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Search from "./Pages/search/search";
import RegisterClient from "./Components/RegisterClient/RegisterClient";
import RegisterWorker from "./Components/RegisterWorker/RegisterWorker";
function App() {
  return (
    <Router>

    <Header/>

    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/search" element={<Search />} />
    <Route path="/register-client" element={<RegisterClient />} />
    <Route path="/register-worker" element={<RegisterWorker />} />


    </Routes>


    <Footer/>

    </Router>
  );
}

export default App; 