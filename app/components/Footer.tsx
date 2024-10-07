import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/footer.png';
import {
  BsLinkedin,
} from 'react-icons/bs';
// footer Component design
const Footer = () => {
  return (
    <footer className="site-footer mt-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <Image alt="casco logo" src={logo} width={200} height={100} />

          </div>
          <div className="col-md-4 offset-md-2">
            <div className="heading">Quick links</div>
            <ul id="menu-quick-links" className="quick-links">
              <li
                id="menu-item-2173"
                className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-88 current_page_item menu-item-2173">
                <Link href="/about/" aria-current="page">
                  About
                </Link>
              </li>
              <li
                id="menu-item-2172"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2172">
                <Link href="/news-insights/">News & insights</Link>
              </li>
              <li
                id="menu-item-2179"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2179">
                <Link href="/industries/services/">Services</Link>
              </li>
              <li
                id="menu-item-2180"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2180">
                <Link href="/careers/">Careers</Link>
              </li>
              <li
                id="menu-item-2181"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2181">
                <Link href="/industries/">Industries</Link>
              </li>
              <li
                id="menu-item-2182"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2182">
                <Link href="/contact-us/">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="heading">Get in touch</div>
            <address>

              Cairo Governorate 11513, Egypt
              <br />
              <Link href="mailto:ahmedashrafhemdan74@gmail.com">ahmedashrafhemdan74@gmail.com</Link>
              <br />
              +20 1121900466
            </address>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/company/cascogroup/"
                target="_blank"
                rel="noreferrer">
                <BsLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="row copyright-footer no-gutters">
          <div className="col-md-7 from-sky-600">
            <Link href="/"> © CASCO Co 2024</Link>

            <ul id="menu-privacy" className="m-0">
              <li id="" className="">
                <Link href="/privacy-policy/" className="">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-right">

            <span className="text-white">
              Web Development by
            </span>
            <Link
              className="ms-1"
              href="https://portoflio-drab.vercel.app/"
              target="_blank"
              rel="noreferrer">
              Ahmed Hemdan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
