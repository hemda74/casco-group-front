import React from 'react';
import styles from '../styles/StategiChanlenges.module.css';
import Link from 'next/link';
const StrategiChallenges = () => {
  return (
    <>
      <section className={` ${styles.SectionBeCertified} ${styles.infoGraph}`}>
        <div className={`row container ${styles.innerContainer}`}>
          <div className="col-sm-12">
            <div className="row justify-content-center">
              <div
                className={`col-xl-9 col-lg-10 col-md-12 ${styles.innerContainer2}`}>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className={`${styles.sectionServicesHead} `}>
                      <span
                        className={`${styles.spanFeature}`}
                        data-trans="Helpingwithstrategicchallenges"></span>
                      <div className="row justify-content-center ">
                        <div className=" mt-4">
                          <p
                            className={`${styles.pargraphFeature}`}
                            data-trans="Helpingwithstrategicchallengesnew">{``}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row col-10 m-auto justify-content-center text-center">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4 ">
            <span className={`${styles.spanFeature2}`}>
              <Link href={'/services'} className={``} id="link">
                <p data-trans="Sustainabilityconsulting"></p>
              </Link>
            </span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <span className={`${styles.spanFeature2}`}>
              <Link href={'/services'} className={``} id="link">
                <p data-trans="Operationalperformanceconsulting"></p>
              </Link>
            </span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <span className={`${styles.spanFeature2}`}>
              <Link href={'/services'} className={``} id="link">
                <p data-trans="Newproductsconsulting"></p>
              </Link>
            </span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <span className={`${styles.spanFeature2}`}>
              <Link href={'/services'} className={``} id="link">
                <p data-trans="Procurementconsulting"></p>
              </Link>
            </span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <span className={`${styles.spanFeature2}`}>
              <Link href={'/services'} className={``} id="link">
                <p data-trans="Supplychainplanningconsulting"></p>
              </Link>
            </span>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <span className={`${styles.spanFeature2}`}>
              <Link href={'/services'} className={``} id="link">
                <p>Operations agility</p>
              </Link>
            </span>
          </div>
        </div>
        {/* ///// */}
      </section>
    </>
  );
};

export default StrategiChallenges;
