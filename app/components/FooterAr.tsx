import React, { Component } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/images/footer.png';
import {
  BsLinkedin,
} from 'react-icons/bs';
// footer Component design
const FooterAr = () => {
  return (
    <footer className="site-footer  mt-5" dir="rtl">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3 offset-md-2">
            <Image alt="casco logo" src={logo} width={200} height={100} />

          </div>
          <div className="col-md-4 ">
            <div className="heading">روابط سريعة</div>
            <ul id="menu-quick-links" className="quick-links">
              <li
                id="menu-item-2173"
                className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-88 current_page_item menu-item-2173">
                <Link href="/about/" aria-current="page">
                  عن كاسكو
                </Link>
              </li>
              <li
                id="menu-item-2172"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2172">
                <Link href="/news-insights/">الاخبار والرؤى</Link>
              </li>
              <li
                id="menu-item-2179"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2179">
                <Link href="/industries/services/">الخدمات</Link>
              </li>
              <li
                id="menu-item-2180"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2180">
                <Link href="/careers/">الوظائف</Link>
              </li>
              <li
                id="menu-item-2181"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2181">
                <Link href="/industries/">الصناعات</Link>
              </li>
              <li
                id="menu-item-2182"
                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2182">
                <Link href="/contact-us/">تواصل معنا</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <div className="heading">كن عن تواصل</div>
            <address>

              القاهرة مصر
              <br />
              <Link href="mailto:ahmedashrafhemdan74@gmail.com">ahmedashrafhemdan74@gmail.com</Link>
              <br />
              1121900466 02+
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
          <div className="col-md-7  from-sky-600">
            © كاسكو 2024
            <ul id="menu-privacy" className="m-1">
              <li
                id="menu-item-4272"
                className="menu-item menu-item-type-post_type menu-item-object-page">
                <Link href="/privacy-policy/" className="">
                  سياسة الخصوصية
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 text-left">
            <span className="text-white">
              تم التطوير بواسطة
            </span>
            <Link
              className="me-1"
              href="https://portoflio-drab.vercel.app/"
              target="_blank"
              rel="noreferrer">
              احمد حمدان
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterAr;
