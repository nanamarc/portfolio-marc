import React from 'react';
import { useTranslation } from 'react-i18next';


const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} className='outline-none rounded-lg bg-gray-200 text-black
    dark:text-white transition-all duration-700 dark:bg-gray-800 dark:border-gray-300 h-8 text-2xl
    '>
      <option value={"en"} className='text-xl'>
          🇬🇧&emsp;
      </option>
      <option value={"fr"} className='text-xl'>
          🇫🇷&emsp;
      </option>
    </select>
  );
};

export default LanguageSelector;
