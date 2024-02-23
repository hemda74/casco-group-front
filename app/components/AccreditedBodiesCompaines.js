import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from '../styles/AccreditedBodiesCompaines.module.css';
import Image from 'next/image';
import image1 from '../public/images/clients/Picture1.jpg';
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
      <div className={`${styles.mainDiv}`}>
        <div className="fs-2 text-center fw-bold mb-4">
          <span className={`${styles.spanNumber}`}>Our Previous Clients</span>
        </div>
        <Slider {...settings}>
          <div className={`${styles.bigDiv}`}>
            <Image
              className={`${styles.imageDiv}`}
              src={image1}
              width={50}
              height={90}
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture2.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <picture>
              <source
                type="image/webp"
                srcSet="
																	https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png.webp
																"
              />
              <img
                className={`${styles.imageDiv}`}
                src="https://www.argonandco.com/wp-content/uploads/2019/11/Screen-Shot-2019-11-11-at-14.59.14.png"
              />
            </picture>
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture4.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture5.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture6.jpg"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture7.jpg"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture8.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture9.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture10.jpg"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture11.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture12.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture13.jpg"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture14.png"
              alt=" "
            />
          </div>
          <div className={`${styles.bigDiv}`}>
            <img
              className={`${styles.imageDiv}`}
              src="/images/clients/Picture15.png"
              alt=" "
            />
          </div>
        </Slider>
      </div>
    );
  }
}
