'use client';

import { useCallback, useEffect, useState } from 'react';
import './LanguageSwitcher.css';

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const changeLanguage = useCallback((langCode: string) => {
    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');

    if (select && select.value !== langCode) {
      select.value = langCode;
      select.dispatchEvent(new Event('change'));
      const lang = languages.find((l) => l.code === langCode);
      if (lang) setCurrentLanguage(lang);
    }

    setIsOpen(false);
  }, []);

  useEffect(() => {
    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: languages.map((l) => l.code).join(','),
          autoDisplay: true,
        },
        'google_translate_element'
      );
    };

    if (!document.querySelector('#google_translate_element')) {
      const div = document.createElement('div');
      div.id = 'google_translate_element';
      document.body.appendChild(div);
    }

    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, [changeLanguage]);

  return (
    <div className="language-switcher dark:bg-gray-900 dark:text-white border rounded-lg dark:border-white border-gray-600 z-10 notranslate">
      <button
        className="language-toggle"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="flag">{currentLanguage.flag}</span>
        <span className="language-name">{currentLanguage.code}</span>
      </button>

      {isOpen && (
        <div className="language-dropdown dark:bg-gray-950 dark:text-white border">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${currentLanguage.code === language.code ? 'active' : ''}`}
              onClick={() => changeLanguage(language.code)}
            >
              <span className="flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </button>
          ))}
        </div>
      )}

    
    </div>
  );
}

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: unknown, element: string): unknown;
        };
      };
    };
  }
}
