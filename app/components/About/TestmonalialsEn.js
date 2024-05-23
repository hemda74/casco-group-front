import React from 'react';
import Slider from 'react-slick';

// Testimonial data
const testimonials = [
  {
    quote: `"The team of consultants have strongly supported us within a context of strong internal pressure. Their high level of mastery and technical expertise have allowed them to quickly generate real engagement within our very international organisation and bring about the required changes."`,
    name: 'Directeur du Contrôle Interne',
    company: 'Vallourec',
    imgSrc:
      'https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png',
    imgWebpSrc:
      'https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png.webp',
    bgColor: 'red-1-background',
  },
  {
    quote: `“A key success factor in the design of our solution was Argon & Co’s capability to rapidly understand our problems and the context in order to suggest a concrete and pragmatic approach. Program management and results were praised."`,
    name: 'Operations Director, Dermo Cosmétique',
    company: 'Pierre Fabre',
    imgSrc:
      'https://www.argonandco.com/wp-content/uploads/2020/01/pierre-fabre-2.png',
    imgWebpSrc:
      'https://www.argonandco.com/wp-content/uploads/2020/01/pierre-fabre-2.png.webp',
    bgColor: 'red-1-background',
  },
  {
    quote: `“I recommend them to anyone who wants a pragmatic approach and real results.”`,
    name: 'Vice President Procurement',
    company: 'Novartis',
    imgSrc:
      'https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png',
    imgWebpSrc:
      'https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png.webp',
    bgColor: 'red-1-background',
  },
  {
    quote: `“Rapid analysis of complex problems, and solutions we can actually implement.”`,
    name: 'Global Supply Chain Director',
    company: 'Avon Cosmetics',
    imgSrc:
      'https://www.argonandco.com/wp-content/uploads/2020/10/avon-300x60.png',
    imgWebpSrc:
      'https://www.argonandco.com/wp-content/uploads/2020/10/avon-300x60.png.webp',
    bgColor: 'red-1-background',
  },
  {
    quote: `"Argon’s consultants have a deep functional knowledge and real experience in transformation, especially digital transformation. Their approach was adaptable and efficient. It helped us assess our digital maturity and define our strategic priorities. They provided us with a good level of benchmarking and lessons learnt from other experiences."`,
    name: 'Head of Finance Transformation',
    company: 'TECHNICOLOR',
    imgSrc:
      'https://www.argonandco.com/wp-content/uploads/2020/01/Technicolor-Logo-300x138.png',
    imgWebpSrc:
      'https://www.argonandco.com/wp-content/uploads/2020/01/Technicolor-Logo-300x138.png.webp',
    bgColor: 'red-1-background',
  },
];

// Testimonial Card Component
const TestimonialCard = ({
  quote,
  name,
  company,
  imgSrc,
  imgWebpSrc,
  bgColor,
}) => (
  <div>
    <div
      className={`card card--quote ${bgColor}`}
      style={{ width: '100%', minHeight: '30rem', display: 'inline-block' }}>
      <div className="card__content">
        <p className="intro">{quote}</p>
        <div className="row align-items-center profile-block">
          <div className="col-auto">
            <picture className="grayscale circle-img--small circle-img--contain">
              <source type="image/webp" srcSet={imgWebpSrc} />
              <img src={imgSrc} alt={name} />
            </picture>
          </div>
          <div className="col">
            <div>
              <strong>{name}</strong>
            </div>
            {company}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// SwipeToSlide Component
const SwipeToSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section section--std section-divide off-screen off-screen--fade-up">
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
                {testimonials.map((testimonial, index) => (
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

export default SwipeToSlide;
