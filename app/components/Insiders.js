import React from 'react';
import Slider from 'react-slick';
const Insiders = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div>
      <div className="section section--std pad-80 section-divide off-screen off-screen--hide off-screen--fade-up">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="title title--lg red-2-color text-center">
                {` Insider's view`}
              </h2>
              <p className="intro text-center">
                {` Here is an insider's view of people who work for Argon &amp;
                  Co and their personal experiences.`}
              </p>
            </div>
            <div className="col-md-12">
              <Slider {...settings}>
                <div>
                  <div className="me-xl-4">
                    <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    className="card card--quote red-1-background "
                    style={{ width: '100%', display: 'inline-block' }}>
                    <div className="card__content">
                      <p className="intro">
                        {` "As a graduate, I am new to the professional
                                world, but the company culture has ensured a
                                seamless and enjoyable transition. The graduate
                                program has allowed me to experience a variety
                                of industries and learn different skills on a
                                daily basis – no two days are the same."`}
                      </p>
                      <div className="row align-items-center profile-block">
                        <div className="col-auto">
                          <div className="circle-img circle-img--small grayscale object-fit">
                            <picture>
                              <source
                                type="image/webp"
                                srcSet="https://www.argonandco.com/wp-content/uploads/2021/12/Jennifer-2-300x300.jpg.webp"
                              />
                              <img src="https://www.argonandco.com/wp-content/uploads/2021/12/Jennifer-2-300x300.jpg" />
                            </picture>
                          </div>
                        </div>
                        <div className="col">
                          <div>
                            <strong>Jennifer</strong>
                          </div>
                          London office
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="me-xl-4">
                    <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div>
                  <div className="me-xl-4">
                    <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div>
                  <div className="me-xl-4">
                    <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div>
                  <div className="me-xl-4">
                    <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div>
                  <div className="me-xl-4">
                    <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>{' '}
                <div>
                  <div className="me-xl-4">
                    <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                      <div className="card__content">
                        <h3 className="title title--sm title--medium-weight">
                          Supply quality management
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insiders;
