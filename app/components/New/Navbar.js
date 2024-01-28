import React from 'react';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Localizationbtn.module.css';

const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div>
      {language === 'en' ? (
        <div style={{ display: 'flex' }}>
          <a href="/page1">First Page</a>
          <h3>
            <a href="/page2">Products</a>
          </h3>
          <a href="/page3">Second Page</a>

          <p>Current Language: {language}</p>
          <button
            onClick={toggleLanguage}
            className={`btn ${styles.localizationBtn}`}>
            Toggle Language
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex' }}>
          <a href="/page1">الصفحة الاولي</a>
          <h3>
            <a href="/page2">المنتجات</a>
          </h3>
          <a href="/page3">الصفحة الثانية</a>

          <p> {language} : اللغة الحالية</p>
          <button onClick={toggleLanguage}>تغيير اللغة</button>
        </div>
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Navbar;
