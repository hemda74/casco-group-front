import Link from 'next/link';
import React from 'react';
import { ServiceShort } from '../../types';
type Props = {
  services: ServiceShort[];
}
const MainPageEn: React.FC<Props> = ({ services }) => {
  return (
    <>
      <div id="content-wrap" dir='rtl'>
        <div className="strip-padding-lg accent-background background ">
          <section className="section section--page-intro">
            <div className="container">
              <div className="row off-screen off-screen--rotate-up">
                <div className="col-md-6">
                  <h1 className="title title--xl title--bold text-white">
                    الخدمات
                  </h1>
                </div>
                <div className="col-md-5 the-content">
                  <p>
                    <span className="intro text-white">
                      {`We help clients deliver operations driven transformations
                      in a single functional area or across multiple functions.`}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="section section--std">
            <div className="container">
              <div className="row link-list off-screen off-screen--link-list">
                {services.map((service) => (
                  <div className="col-md-6 col-lg-4" key={service.id}>
                    <Link
                      href=
                      {`/services/${service.id}`}

                      className="d-flex align-items-center" >
                      <div className="title title--sm title title--medium-weight">
                        {service.name_ar}
                      </div></Link>
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

export default MainPageEn;
