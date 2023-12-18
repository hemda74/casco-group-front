import React from 'react';
import styles from '../../styles/about.module.css';
const MainAbout = () => {
  return (
    <div className="d-felx m-auto ">
      <span className={styles.mainSpan}> About </span>
      <div className="container d-flex align-items-center justify-content-center">
        <div className={`${styles.parent}`}>
          <div
            className={`${styles.div1} d-flex align-items-center justify-content-center`}>
            <h1>hello world</h1>{' '}
          </div>
          <div
            className={`${styles.div2} d-flex align-items-center justify-content-center`}>
            <h1>hello world</h1>{' '}
          </div>
          <div
            className={`${styles.div3} d-flex align-items-center justify-content-center`}>
            <h1>hello world</h1>{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainAbout;
