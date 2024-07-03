import Link from 'next/link';
import React from 'react';
import { IndustryShort } from '../../types';

type Props = {
  industries: IndustryShort[];
};
const MainPageEn: React.FC<Props> = ({ industries = [] }) => {
  return (
    <>
      <div id="content-wrap">
        <div className="strip-padding-lg white-color accent-background background">
          <section className="section section--page-intro">
            <div className="container">
              <div className="row off-screen off-screen--rotate-up">
                <div className="col-md-6">
                  <h1 className="title title--xl title--bold">Industries</h1>
                </div>
                <div className="col-md-5 the-content">
                  <p>
                    <span className="intro text-white mt-lg-5">
                      {`We work across multiple industries, with a range of organisations from local mid-market companies to some of the world’s biggest brands.`}
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
                      href={{
                        pathname: `/industries/${industry.name}`,
                        query: { id: industry.id }
                      }}
                      className="d-flex align-items-center" />
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
