import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props { }

const SwipeToSlide: React.FC<Props> = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
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

  const testimonials = [
    {
      quote: "I recommend them to anyone who wants a pragmatic approach and real results.",
      role: "Vice President Procurement",
      company: "Novartis",
      img: "https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png",
    },
    {
      quote: "I recommend them to anyone who wants a pragmatic approach and real results.",
      role: "Vice President Procurement",
      company: "Novartis",
      img: "https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png",
    },
    {
      quote: "Rapid analysis of complex problems, and solutions we can actually implement.",
      role: "Global Supply Chain Director",
      company: "Avon Cosmetics",
      img: "https://www.argonandco.com/wp-content/uploads/2020/10/avon-300x60.png",
    },
    {
      quote: "The team of consultants have strongly supported us within a context of strong internal pressure. Their high level of mastery and technical expertise have allowed them to quickly generate real engagement within our very international organisation and bring about the required changes.",
      role: "Directeur du Contrôle Interne",
      company: "Vallourec",
      img: "https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png",
    },
    {
      quote: "Argon’s consultants have a deep functional knowledge and real experience in transformation, especially digital transformation. Their approach was adaptable and efficient. It helped us assess our digital maturity and define our strategic priorities. They provided us with a good level of benchmarking and lessons learnt from other experiences.",
      role: "Head of Finance Transformation",
      company: "TECHNICOLOR",
      img: "https://www.argonandco.com/wp-content/uploads/2020/01/Technicolor-Logo-300x138.png",
    },
  ];

  return (
    <section className="section section--std section-divide off-screen off-screen--fade-up pad-80">
      <div className="row justify-content-center">
        <div className="arrow-3-slider slick-slider">
          <div className="container">
            <div className="col-md-8 m-auto">
              <h2 className="title title--lg red-2-color text-center">
                وجهة نظر المطلعين
              </h2>
              <p className="title title--sm text-center">
                فيما يلي وجهة نظر من الداخل للأشخاص الذين يعملون في شركة CASCO وتجاربهم الشخصية.
              </p>
            </div>
            <div className="col-md-12">
              <Slider {...settings} className="mt-5">
                {testimonials.map((testimonial, index) => (
                  <div key={index}>
                    <div className="card card--quote red-2-background" style={{ width: '100%', minHeight: '30rem', display: 'inline-block' }}>
                      <div className="card__content">
                        <p className="intro">{testimonial.quote}</p>
                        <div className="row align-items-center profile-block">
                          <div className="col-auto">
                            <picture className="grayscale circle-img--small circle-img--contain">
                              <source type="image/webp" srcSet={testimonial.img} />
                              <img src={testimonial.img} alt={testimonial.company} />
                            </picture>
                          </div>
                          <div className="col">
                            <div>
                              <strong>{testimonial.role}</strong>
                            </div>
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
