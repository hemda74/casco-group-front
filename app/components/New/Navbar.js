import React from 'react';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Localizationbtn.module.css';
const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      {language === 'en' ? (
        <button
          onClick={toggleLanguage}
          className={`btn ${styles.localizationBtn}`}>
          <span>ع</span>
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className={`btn ${styles.localizationBtn}`}>
          <span>E</span>
        </button>
      )}
    </div>
  );
};

export default Navbar;
