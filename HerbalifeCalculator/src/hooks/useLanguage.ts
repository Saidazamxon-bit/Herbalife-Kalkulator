import { useEffect, useState } from 'react';

const LANGUAGE_KEY = 'selectedLanguage';

const languages = {
  en: { name: 'English' },
  es: { name: 'Spanish' },
  fr: { name: 'French' },
  // Add more languages as needed
};

export const useLanguage = () => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem(LANGUAGE_KEY) || 'en';
  });

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setLanguage(lang);
      localStorage.setItem(LANGUAGE_KEY, lang);
    }
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedLanguage && languages[savedLanguage]) {
      setLanguage(savedLanguage);
    }
  }, []);

  return { language, changeLanguage, languages };
};