import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Parameeter from "./Parameeter";
import Apikeys from "./Api-keys";
import "./omdb.css/omdbapp.css";
import Footer from "./Footer";
import Movies from "./Movies";
import Series from "./Series";

const OMDBapp = () => {
  return (
    <React.Fragment>
      <div className="omdbmainparent">
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Contact" Component={Contact} />
          <Route path="/About" Component={About} />
          <Route path="/Parameeter" Component={Parameeter} />
          <Route path="/Apikeys" Component={Apikeys} />
          <Route path="/Movies" Component={Movies}/>
          <Route path="/Series" Component={Series}/>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </React.Fragment>
  );
};
export default OMDBapp;
