import React from 'react';
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.png';
import Link from 'next/link';
import LocalizationBtn from './LocalizationBtn';
import Navbar from './New/Navbar';
const NavBar = () => {
  return (
    //design nav
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top bg-white ${styles.navBar}`}>
        <div
          className={`container-fluid d-flex justify-content-between align-items-center ms-4 `}>
          <Link href={'/'} className="navbar-brand me-5 mb-0 mt-0 ms-5">
            <Image
              className="me-0 mb-0 mt-0 ms-1"
              alt="casco logo"
              src={logo}
              width={150}
              height={70}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav m-auto ">
              <li className={`nav-item ms-3 ${styles.navItem}`}>
              </li>
            </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav m-auto ">
              <li className=  {`nav-item ms-3 ${styles.navItem}`}>
                <Link href={'/courses'} className={`nav-link`} id="link">
                  <p className={`${styles.navLink} me-2 ms-2 fw-bold mt-1`}>
                    COURSES
                  </p>
                </Link> 
              </li>
              <li className=  {`nav-item ms-3 ${styles.navItem}`}>
                <Link href={'/about'} className={`nav-link`} id="link">
                  <p className={`${styles.navLink} me-2 ms-2 fw-bold mt-1`}>
                    ABOUT
                  </p>
                </Link> 
              </li>
              <li className=  {`nav-item ms-3 ${styles.navItem}`}>
                <Link href={'/services'} className={`nav-link`} id="link">
                  <p className={`${styles.navLink} me-2 ms-2 fw-bold mt-1`}>
                    SERVICES
                  </p>
                </Link> 
              </li>
              <li className=  {`nav-item ms-3 ${styles.navItem}`}>
                <Link href={'/industries'} className={`nav-link`} id="link">
                  <p className={`${styles.navLink} me-2 ms-2 fw-bold mt-1`}>
                  INDUSTRIES
                  </p>
                </Link> 
              </li>
              <li className=  {`nav-item ms-3 ${styles.navItem}`}>
                <Link href={'/news-insights'} className={`nav-link`} id="link">
                  <p className={`${styles.navLink} me-2 ms-lg-2 fw-bold mt-1`}>
                  NEWS&INSIGHTS
                  </p>
                </Link> 
              </li>
          </ul>
            </div>
            <div className={`d-flex me-4 mt-3 ms-4`}>
              <Navbar />
            </div>
          </div>
      </nav>
    </>
  );
};

export default NavBar;
