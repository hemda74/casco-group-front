// import Link from 'next/link';
// import React from 'react';
// import styles from '../../styles/Hero.module.css';
// const HeroEn = () => {
//   return (
//     <>
//       <div className={` ${styles.firstSection}`}>
//         <div
//           id="carouselExampleInterval"
//           className="carousel slide"
//           data-bs-ride="carousel">
//           <div className="carousel-inner">
//             <div className="carousel-item active" data-bs-interval="3000">
//               <video
//                 src="https://www.argonandco.com/wp-content/uploads/2022/05/Argon_V9-2.8mb.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 className={` w-100 `}></video>
//               <div
//                 className={`carousel-caption carousel-caption2 text-white d-md-block ${styles.carouselCaption}`}>
//                 <h1 data-trans="ServicesNav"></h1>
//                 <p
//                   className="fw-semibold text-white fs-4"
//                   data-trans="servicesbrief"></p>
//                 <Link href={'/services'}>
//                   <button
//                     className={`myInfo rounded ${styles.LinkButton}`}
//                     data-trans="ServicesNav"></button>
//                 </Link>
//               </div>
//             </div>
//             <div className="carousel-item" data-bs-interval="3000">
//               <video
//                 src="https://www.argonandco.com/wp-content/uploads/2022/05/Argon_V9-2.8mb.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 className={` w-100 `}></video>
//               <div className="carousel-caption carousel-caption2 text-white d-md-block">
//                 <h1 data-trans="AboutUsTitle"></h1>
//                 <p
//                   className="fw-semibold text-white fs-4"
//                   data-trans="OurobjectiveP"></p>
//                 <Link href={'/about'}>
//                   <button
//                     className={`myInfo rounded ${styles.LinkButton}`}
//                     data-trans="AboutUsTitle"></button>
//                 </Link>
//               </div>
//             </div>
//             <div className="carousel-item" data-bs-interval="3000">
//               <video
//                 src="https://www.argonandco.com/wp-content/uploads/2022/05/Argon_V9-2.8mb.mp4"
//                 autoPlay
//                 muted
//                 loop
//                 className={` w-100 `}></video>
//               <div className="carousel-caption carousel-caption2 text-white d-md-block">
//                 <h1 data-trans="Courses"></h1>
//                 <p
//                   className="fw-semibold text-white fs-4"
//                   data-trans="cousesParageph"></p>
//                 <Link href={'/courses'}>
//                   <button
//                     className={`myInfo d-inline rounded ${styles.LinkButton}`}
//                     data-trans="Courses"></button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleInterval"
//             data-bs-slide="prev">
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleInterval"
//             data-bs-slide="next">
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroEn;
import React from 'react';

const HeroEn = () => {
  return (
    <>
      {' '}
      <div>
        <section className="banner banner--full-height">
          <div className="banner__video">
            <video
              src="https://www.argonandco.com/wp-content/uploads/2022/05/Argon_V9-2.8mb.mp4"
              autoPlay
              muted
              loop></video>
          </div>
          <div className="changing-color"></div>

          <div className="banner__center white-color">
            <div className="container">
              <div className="row text-center">
                <div className="col-12">
                  <div className="slides slick-initialized slick-slider slick-dotted animate-in">
                    <div className="slick-list draggable">
                      <div
                        className="slick-track"
                        style={{ opacity: 1, width: '3750px' }}>
                        <div
                          className="slick-slide slick-current slick-active"
                          data-slick-index="0"
                          aria-hidden="false"
                          role="tabpanel"
                          id="slick-slide10"
                          style={{
                            width: '1250px',
                            position: 'relative',
                            left: '0px',
                            top: '0px',
                            zIndex: 999,
                            opacity: 1,
                          }}
                          aria-describedby="slick-slide-control10">
                          <div>
                            <div
                              className="slide"
                              style={{
                                width: '100%',
                                display: 'inline-block',
                              }}>
                              <div className="banner-title">
                                <span className="title title--2xl title--bold text-white">
                                  Transforming operations...
                                </span>
                              </div>
                              <div className="banner-text">
                                <p className="intro">
                                  We help clients achieve their strategic and
                                  operational objectives, working together to
                                  transform their businesses and generate real
                                  change.{' '}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index="1"
                          aria-hidden="true"
                          role="tabpanel"
                          id="slick-slide11"
                          style={{
                            width: '1250px',
                            position: 'relative',
                            left: '-1250px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                            transition: 'opacity 500ms linear 0s',
                          }}
                          aria-describedby="slick-slide-control11"
                          tabIndex={-1}>
                          <div>
                            <div
                              className="slide"
                              style={{
                                width: '100%',
                                display: 'inline-block',
                              }}>
                              <div className="banner-title">
                                <span className="title title--2xl title--bold">
                                  on a global scale...
                                </span>
                              </div>
                              <div className="banner-text">
                                <p className="intro">
                                  With over 500 consultants in 16 offices across
                                  Europe, Middle East, Asia, Australasia and
                                  America.{' '}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="slick-slide"
                          data-slick-index="2"
                          aria-hidden="true"
                          role="tabpanel"
                          id="slick-slide12"
                          style={{
                            width: '1250px',
                            position: 'relative',
                            left: '-2500px',
                            top: '0px',
                            zIndex: 998,
                            opacity: 0,
                            transition: 'opacity 500ms linear 0s',
                          }}
                          aria-describedby="slick-slide-control12"
                          tabIndex={-1}>
                          <div>
                            <div
                              className="slide"
                              style={{
                                width: '100%',
                                display: 'inline-block',
                              }}>
                              <div className="banner-title">
                                <span className="title title--2xl title--bold">
                                  with lasting results.
                                </span>
                              </div>
                              <div className="banner-text">
                                <p className="intro">
                                  We apply a combination of deep technical
                                  expertise, operational experience and broad
                                  business knowledge to deliver lasting results.{' '}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__bottom white-color">
            <div className="container-fluid">
              <div className="row">
                <div className="col slider-dots">
                  <ul className="slick-dots" role="tablist">
                    <li className="slick-active" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control10"
                        aria-controls="slick-slide10"
                        aria-label="1 of 3"
                        tabIndex={0}
                        aria-selected="true">
                        1
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control11"
                        aria-controls="slick-slide11"
                        aria-label="2 of 3"
                        tabIndex={-1}>
                        2
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control12"
                        aria-controls="slick-slide12"
                        aria-label="3 of 3"
                        tabIndex={-1}>
                        3
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="col-8 text-right">
                  {' '}
                  <a href="#content" className="anchor">
                    <div className="arrow">
                      <span className="title title--sm text-white">
                        Learn more
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroEn;
