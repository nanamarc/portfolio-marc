import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home"
import About from "../Components/About"
import Project from "../Components/Project";
const App = () => {
    return (
       <div className="">
         <NavBar/>
         <Home/>
         <About/>
         <Project/>
       </div>
    )
};

export default App;
