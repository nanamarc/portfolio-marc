import "./App.scss";
import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Home from "../Components/Home";
import About from "../Components/About";
import Project from "../Components/Project";
import Stack from "../Components/Stack";
import Footer from "../Components/Footer";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import ReactGA from 'react-ga4';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('dark-mode');
        return savedMode ? JSON.parse(savedMode) : false;
    });

    const icon = isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />;

    useEffect(() => {
        ReactGA.initialize('G-9J2RY784RH');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });

        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('dark-mode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className={`transition-all duration-700 ${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'} w-full`}>
            <NavBar onClick={toggleDarkMode} icon={icon} />
            <Home />
            <About />
            <Project />
            <Stack />
            <Footer />
        </div>
    );
};

export default App;
