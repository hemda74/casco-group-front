import React from 'react';
import { useLanguage } from '../Context/LanguageContext';
import styles from '../styles/Localizationbtn.module.css';

const LocalizationBtn: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      {language === 'en' ? (
        <button
          onClick={toggleLanguage}
          className={`${styles.localizationBtn} ${styles.arBtn}`}>
        </button>
      ) : (
        <button
          onClick={toggleLanguage}
          className={`${styles.localizationBtn} ${styles.usBtn}`}>
        </button>
      )}
    </div>
  );
};

export default LocalizationBtn;
