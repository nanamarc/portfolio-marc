import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home"
const App = () => {
    return (
       <div className="">
         <NavBar/>
        <Home/>
       </div>
    )
};

export default App;
