import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from '../../styles/AccreditedBodiesCompaines.module.css';
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '50px',
      swipeToSlide: true,
      dots: false,
      slidesToShow: 8,
      speed: 10000,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 0,
      pauseOnHover: true,
      lazyLoad: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            dots: false,
          },
        },
      ],
    };
    return (
      <section className="pad-100-vert off-screen off-screen--hide off-screen--fade-up">
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="title title--lg red-1-color color-red-1">
                Recognition
              </h2>
              <p className="intro pad-btm-mob text-black">
                {`
                We are proud to be recognised by some of the world's leading
                research companies, institutes and publications.`}
              </p>
            </div>
          </div>
        </div>
        <Slider {...settings} className="mt-5">
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.34.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2020/01/sig-custom-gartner-logo.jpg.imgo_.jpg"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/12/Great-places-to-work.png"
              alt=" "
            />
          </div>{' '}
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.34.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2020/01/sig-custom-gartner-logo.jpg.imgo_.jpg"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/12/Great-places-to-work.png"
              alt=" "
            />
          </div>{' '}
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.34.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2020/01/sig-custom-gartner-logo.jpg.imgo_.jpg"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="https://www.argonandco.com/wp-content/uploads/2019/12/Great-places-to-work.png"
              alt=" "
            />
          </div>
        </Slider>
      </section>
    );
  }
}
