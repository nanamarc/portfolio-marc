"use client";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LanguageSelector = () => {
  const router = useRouter();
  
  // Pour synchroniser la langue actuelle avec l'URL
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Extraire la langue de l'URL pour initialiser l'état
    const currentLang = window.location.pathname.split('/')[1];
    setLanguage(currentLang || 'en');
  }, []);

  const changeLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    // Changer la route en fonction de la langue sélectionnée
    router.push(`/${selectedLanguage}`);
  };

  return (
    <select value={language} onChange={changeLanguage} className="outline-none rounded-lg bg-gray-200 text-black dark:text-white transition-all duration-700 dark:bg-gray-800 dark:border-gray-300 h-8 text-2xl">
      <option value="en" className="text-xl">
        🇬🇧&emsp;
      </option>
      <option value="fr" className="text-xl">
        🇫🇷&emsp;
      </option>
    </select>
  );
};

export default LanguageSelector;
