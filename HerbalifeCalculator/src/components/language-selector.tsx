import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' },
    // Add more languages as needed
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select" className="sr-only">Select Language</label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={handleChange}
        className="border rounded p-2"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;