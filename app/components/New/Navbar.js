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
          ع
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className={`btn ${styles.localizationBtn}`}>
          E
        </button>
      )}
    </div>
  );
};

export default Navbar;
