import Link from 'next/link';
import React from 'react';
import { IndustryShort } from '../../types';

type Props = {
  industries: IndustryShort[];
};


const MainPageAr: React.FC<Props> = ({ industries }) => {
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
                {industries.map((industry) => (
                  <div className="col-md-6 col-lg-4" key={industry.id}>
                    <Link
                      href={`/industries/${industry.name}`}
                      className="d-flex align-items-center">
                      <div className="title title--sm title title--medium-weight">
                        {industry.name_ar}
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
