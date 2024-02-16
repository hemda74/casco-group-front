import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styels from '../styles/Footer.module.css';
import logo from '../public/images/footer.png';
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsInstagram,
} from 'react-icons/bs';
// footer Component design
const Footer = () => {
  return (
    <footer>
      <div className={`container-fluied  ${styels.footerCont}`}>
      <div className={`container mt-3 pt-5 pb-5 ${styels.footerCont}`}>
        <div className="row d-flex justify-content-center ms-2 me-2">
          <div className="col-md-6 col-lg-3   ">
            <div className="info">
              <Image alt="casco logo" src={logo} width={200} height={100} />
              <small
                className={` d-inline-block ${styels.companybrief}`}
                data-trans="aboutCascoFooter"></small>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 pt-3">
            {/* handel links for other routes */}
            <div className="links">
              <span
                className={`fs-5 fw-bold ${styels.footerLink}`}
                data-trans="supportFooter">
              </span>
              <ul className="list-unstyled ln-lg p-0 mt-3">
                <li>
                  <Link
                    href="/contact-us"
                    className={`nav-link fs-6 ${styels.footerLink}`}
                    id="link"
                     >
                      <small  data-trans="ContactUsNav"></small>
                    
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className={`nav-link mt-2 fs-6 ${styels.footerLink}`}
                    id="link"
                     >
                      <small  data-trans="CareersNav"></small>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className={`nav-link ${styels.footerLink}`} href={'/news-insights'}>
                      <small data-trans="NewsNav"></small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pt-3">
            {/* handel links for other pages */}
            <div className="links ">
              <span
                className="fs-5 fw-bold p-0 text-white"
                data-trans="LinksFooter">
                Links
              </span>
              <ul className="list-unstyled ln-lg mt-3 p-0 ">
                <li>
                  <Link className={`nav-link mt-2 ${styels.footerLink}`} href={'/about'}
                      >
                        <small data-trans="AboutCascoNav"></small>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className={`nav-link ${styels.footerLink}`} href={'/industries'}>
                      <small data-trans="industriesNav"></small>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className={`nav-link ${styels.footerLink}`} href={'/courses'}
                      >
                      <small data-trans="CoursesNav"></small>
                  </Link>
                </li>
                <li className="mt-2">
                  <Link className={`nav-link ${styels.footerLink}`} href={'/services'} 
                      >
                      <small data-trans="ServicesNav"></small>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 pt-2">
            <div className="contact">
              <div className="">
                <small
                  className="text-white fw-bold fs-5"
                  data-trans="NewsletterSubscriptionFooter">
                </small>
                <small
                  className="ln-lg text-white mt-3 mb-2 fw-semibold d-inline-block"
                  data-trans="egyptadress">
                </small>
                <p className="mt-0 me-2 text-white">egy@casco.com.eg</p>
                <div className="form-group">
                  <div className="form-group">
                    <div className={` mt-2 ${styels.iconsSocial}`}>
                      <Link href={'/'} className={` me-2 ms-2 ${styels.footerA}`}>
                          {' '}
                          <BsTwitter size={15} />
                      </Link>
                      <Link href={'/'} className={` me-2 ms-2 ${styels.footerA}`}>
                        
                          {' '}
                          <BsFacebook size={15} />
                        
                      </Link>
                      <Link href={'/'} className={` me-2 ms-2 ${styels.footerA}`}>
                        
                          {' '}
                          <BsLinkedin size={14} />
                        
                      </Link>
                      <Link href={'/'} className={` me-2 ms-2 ${styels.footerA}`}>
                        
                          {' '}
                          <BsInstagram size={14} />
                        
                      </Link>
                      <Link href={'/'} className={` me-2 ms-2 ${styels.footerA}`}>
                        
                          <BsYoutube size={16} />
                      
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-3" />
          <div
            className={`mt-1 d-flex justify-content-between ${styels.footerAhmed1}`}>
            <p className={`${styels.copyRightsDiv}`}>
              <span data-trans="CascoCopyright" className="text-white">
                &copy; Copyright 2023
              </span>
              <span
                data-trans="CascoCopyrightAll"
                className="ms-1 text-white me-1">
                . All Rights Reserved
              </span>
              <span
                className={`${styels.footerAhmed} me-1 ms-1`}
                data-trans="Cascocopyright">
                CASCO
              </span>
            </p>
            <div className={`${styels.copyRightsDiv}`}>
              <span data-trans="CreatedByFooter" className="text-white">
                Developed By
              </span>
              <span className="me-1 ms-1">
                <a
                  href="https://portoflio-drab.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className={` ${styels.footerAhmed}`}
                  data-trans="AhmedHemdan">
                  <span>Ahmed Hemdan</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
