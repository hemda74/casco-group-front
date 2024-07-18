import React from 'react';
import Slider from 'react-slick';
import { Reco } from '../../types';

type Props = {
  reco: Reco[]
}

const Recogention: React.FC<Props> = ({ reco }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "50px",
    swipeToSlide: true,
    dots: false,
    slidesToShow: 8,
    speed: 10000,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false
        }
      }
    ]
  };

  return (
    <section className="pad-80 off-screen off-screen--hide off-screen--fade-up">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="title title--lg red-1-color color-red-1">
              Recognition
            </h2>
            <p className="intro pad-btm-mob text-black">
              We are proud to be recognised by some of the world's leading
              research companies, institutes and publications.
            </p>
          </div>
        </div>
      </div>
      <div className="arrow-6-slider slick-initialized slick-slider">
        <Slider {...settings} className="mt-5">
          {reco.map((slide) => (
            <div key={slide.id} className="slick-slide">
              <div
                style={{ width: '100%', display: 'inline-block' }}>
                <img
                  className='imageDiv' src={slide.imageUrl}
                  alt={slide.title}
                />
                <p className="fw-semibold arrow-6-slider-title">
                  {slide.title}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Recogention;
