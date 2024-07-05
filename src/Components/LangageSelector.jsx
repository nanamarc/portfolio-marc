import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} className='outline-none rounded-sm bg-transparent border border-gray-400 text-black p-1
    dark:text-white dark:bg-gray-800 dark:border-gray-300 h-6
    '>
      <option value={"en"}>en</option>
      <option value={"fr"}>fr</option>
    </select>
  );
};

export default LanguageSelector;
