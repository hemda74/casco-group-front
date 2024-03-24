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
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroEn = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
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
            <Slider {...settings}>
              <div className="slide">
                <div className="banner-title">
                  <span className="title title--2xl title--bold text-white">
                    Transforming operations...
                  </span>
                </div>
                <div className="banner-text">
                  <p className="intro">
                    We help clients achieve their strategic and operational
                    objectives, working together to transform their businesses
                    and generate real change.{' '}
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="banner-title">
                  <span className="title title--2xl title--bold">
                    on a global scale...
                  </span>
                </div>
                <div className="banner-text">
                  <p className="intro">
                    With over 500 consultants in 16 offices across Europe,
                    Middle East, Asia, Australasia and America.{' '}
                  </p>
                </div>
              </div>
              <div className="slide">
                <div className="banner-title">
                  <span className="title title--2xl title--bold">
                    with lasting results.
                  </span>
                </div>
                <div className="banner-text">
                  <p className="intro">
                    We apply a combination of deep technical expertise,
                    operational experience and broad business knowledge to
                    deliver lasting results.{' '}
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="banner__bottom white-color">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-right">
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
  );
};

export default HeroEn;
