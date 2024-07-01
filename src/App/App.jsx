import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home"
import About from "../Components/About"
import Project from "../Components/Project";
import Stack from "../Components/Stack";
import Footer from "../Components/Footer";
const App = () => {
    return (
       <div className="">
      
         <Home/>
         <About/>
         <Project/>
         <Stack/>
         <Footer/>
       </div>
    )
};

export default App;
