import React from 'react';
import styles from '../styles/GridSection.module.css';
import Hero from './Hero';
const GridSection = () => {
  return (
    <>
      <div className="row mt-5">
        <div className={`${styles.parent} col-lg-10 m-auto`}>
          <div className={`${styles.div1}`}>
            <Hero />
          </div>
          <div className={`${styles.div2}`}> </div>
          <div className={`${styles.div3}`}> </div>
          <div className={`${styles.div4}`}> </div>
          <div className={`${styles.div5}`}> </div>
        </div>
      </div>
    </>
  );
};

export default GridSection;
