import React from 'react';
import words from './words.js';

const LanguageSelector = props => {
  return Object.keys(words).map(lang => {
    return (
      <span
        key={lang}
        role="img"
        aria-label={words[lang].languageName}
        onClick={() => {
          props.changeLanguage(lang);
        }}
      >
        {words[lang].emoji}
      </span>
    );
  });
};

export default LanguageSelector;
