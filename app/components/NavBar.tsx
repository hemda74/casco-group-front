import React from 'react'
import styles from '../styles/NavBar.module.css';
import Image from 'next/image';
import logo from '../public/logo.png'
import Link from 'next/link';
import {AiOutlineSearch} from 'react-icons/ai'
import LocalizationBtn from './LocalizationBtn';
import LoginBtn from './LoginBtn';
import SearchModal from './SearchModal';
const NavBar = () => {
  return (
    //design nav
<>
  <nav className={`navbar navbar-expand-lg sticky-top bg-white ${styles.navBar}`}>
    <div className={`container-fluid d-flex justify-content-between align-items-center ms-4 `}>
        <Link href={'/'} className="navbar-brand me-5 mb-0 mt-0 ms-5">
            <a><Image
                className="me-0 mb-0 mt-0 ms-1"
                alt="casco logo"
                src={logo}
                width={150}
                height={70}
                />
            </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav m-auto ">
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/about'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink} fs-5 fw-semibold`} id="link"><a className={`${styles.navLink} fs-5 fw-semibold`}data-trans="AboutCascoNav"></a></Link>
                </li> 
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/services'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink} fs-5 fw-semibold`} id="link"><a className={`${styles.navLink} fs-5 fw-semibold`}data-trans="ServicesNav"></a></Link>
                </li>
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/our-clients'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink} fs-5 fw-semibold`} id="link"><a className={`${styles.navLink} fs-5 fw-semibold`}data-trans="INDUSTRIES"></a></Link>
                </li>
                 <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/courses'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink} fs-5 fw-semibold`} id="link"><a className={`${styles.navLink} fs-5 fw-semibold`}data-trans="newsinsights"></a></Link>
                </li> 
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                    <Link href={'/contact-us'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink} fs-5 fw-semibold`} id="link"><a className={`${styles.navLink} fs-5 fw-semibold`}data-trans="ContactUsNav">Contact Us</a></Link>
                </li> 
                <li className={`nav-item ms-3 ${styles.navItem}`}>
                        <Link href={'/careers'}  className={`nav-link text-black pb-0 mb-0 ${styles.navLink} fs-5 fw-semibold`} id="link"><a className={`${styles.navLink} fs-5 fw-semibold`} data-trans="CareersNav"></a></Link>
                </li>        
            </ul>
            <div className={`d-flex d-block me-4 ms-4`}>
                    <LocalizationBtn/>
            </div>
        </div>
    </div>
 </nav>
</>
  );
}

export default NavBar;