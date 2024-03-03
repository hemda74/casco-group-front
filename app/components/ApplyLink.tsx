import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import styles from '../styles/WhatsLink.module.css';
const ApplyLink = () => {
  return (
    <>
      <div className={`${styles.mainDiv}`}>
        <a href="/#applynow">Apply Now</a>
        <div
          className={`tooltip fade bs-tooltip-top show ${styles.secondDiv}`}></div>
      </div>
    </>
  );
};

export default ApplyLink;
