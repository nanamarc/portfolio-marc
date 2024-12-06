import "./App.scss";
import React, { useEffect, useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet";
import{ lazy, Suspense } from "react";


const App = () => {
    const NavBar=lazy(()=>import("../Components/NavBar"));
    const Home=lazy(()=>import("../Components/Home"));
    const About=lazy(()=>import("../Components/About"));
    const Project=lazy(()=>import("../Components/Project"));
    const Stack=lazy(()=>import("../Components/Stack"));
    const Footer=lazy(()=>import("../Components/Footer")); 



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
      <Suspense>
                <div className={`transition-all duration-700 ${isDarkMode ? 'dark:bg-gray-900' : 'bg-white'} w-full`}>
                    <Helmet>
                    <meta charSet="utf-8" 
                        name="description"
                        content="Je suis Marc Herilala, un developpeur web , j'aime créer des sites web modernes et performants. Je suis à la recherche de nouvelles opportunités de travail."
                    />
                        <title>Marc Herilala | Developpeur web</title>
                        <link rel="canonical" href="https://herilala.vecel.app" />
                        <script type="application/ld+json">
                            {JSON.stringify({
                            "@context": "http://schema.org",
                            "@type": "Person",
                            "name": "Marc Herilala Razanajatovo",
                            "url": "https://herilala.vercel.app",
                            "sameAs": [
                                "https://linkedin.com/in/marc-razanajatovo",
                                "https://github.com/Marc985"
                            ],
                            "jobTitle": "Développeur Web",
                            "worksFor": {
                                "@type": "Organization",
                                "name": "Haute Ecole d'Informatique Madagascar"
                            }
                            })}
                        </script>
                    </Helmet>

                    <NavBar onClick={toggleDarkMode} icon={icon} />
                    <Home />
                    <About />
                    <Project />
                    <Stack />
                    <Footer />
                </div>
      </Suspense> 
    );
};

export default App;
