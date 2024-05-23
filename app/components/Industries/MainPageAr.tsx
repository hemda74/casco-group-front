import Link from 'next/link';
import React from 'react';

// Industry data
const industries = [
  { name: 'Automotive', link: '/industries/automotive/' },
  { name: 'Aerospace and defence', link: '/industries/aerospace-and-defence/' },
  { name: 'Consumer goods', link: '/industries/consumer-goods/' },
  { name: 'Energy and utilities', link: '/industries/energy-and-utilities/' },
  { name: 'Fashion', link: '/industries/fashion/' },
  { name: 'Food and drink', link: '/industries/food-and-drink/' },
  {
    name: 'Industrial and chemicals',
    link: '/industries/industrial-and-chemicals/',
  },
  { name: 'Life sciences', link: '/industries/life-sciences/' },
  { name: 'Luxury goods', link: '/industries/luxury-goods/' },
  { name: 'Private equity', link: '/industries/private-equity/' },
  { name: 'Retail and e-commerce', link: '/industries/retail-and-e-commerce/' },
  { name: 'Services', link: '/industries/services/' },
  {
    name: 'Transport and logistics',
    link: '/industries/transport-and-logistics/',
  },
];

const MainPageAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="strip-padding-lg white-color accent-background background">
          <section className="section section--page-intro">
            <div className="container">
              <div className="row off-screen off-screen--rotate-up">
                <div className="col-md-6">
                  <h1 className="title title--xl title--bold">الصناعات</h1>
                </div>
                <div className="col-md-5 the-content">
                  <p>
                    <span className="intro text-white mt-lg-5">
                      نعمل عبر عدة صناعات مع مجموعة من الشركات المحلية من حجم
                      السوق المتوسط إلى بعض أكبر العلامات التجارية في العالم.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="section section--std">
            <div className="container">
              <div className="row link-list off-screen off-screen--link-list">
                {industries.map((industry, index) => (
                  <div className="col-md-6 col-lg-4" key={index}>
                    <Link
                      href={industry.link}
                      className="d-flex align-items-center">
                      <div className="title title--sm title title--medium-weight">
                        {industry.name}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default MainPageAr;
