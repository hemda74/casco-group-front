import React from 'react';
import Slider from 'react-slick';
import { Test } from '../../types';

type Props = {
  test: Test[];
};

// Testimonial Card Component
const TestimonialCard: React.FC<Test> = ({ text, name, imageUrl, title }) => (
  <div dir='rtl'>
    <div
      className="card card--quote red-5-background"
      style={{ width: '100%', minHeight: '30rem', display: 'inline-block' }}>
      <div className="card__content">
        <p className="intro text-right">{text}</p>
        <div className="row align-items-center profile-block">
          <div className="col-auto">
            <picture className="grayscale circle-img--small circle-img--contain">
              <source type="image/webp" srcSet={imageUrl} />
              <img src={imageUrl} alt={name} />
            </picture>
          </div>
          <div className="col">
            <div>
              <strong>{name}</strong>
            </div>
            {title}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsEn: React.FC<Props> = ({ test }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 0,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section dir='rtl' className="section section--std section-divide off-screen off-screen--fade-up">
      <div className="row justify-content-center">
        <div className="arrow-3-slider slick-slider">
          <div className="container">
            <div className="col-md-8 m-auto">
              <h2 className="title title--lg red-1-color text-center">
                Client testimonials
              </h2>
            </div>
            <div className="col-md-12">
              <Slider {...settings} className="mt-5">
                {test.map((testimonial, index) => (
                  <TestimonialCard key={index} {...testimonial} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsEn;
