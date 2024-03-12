import React, { Component } from 'react';
import Slider from 'react-slick';
export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '50px',
      swipeToSlide: true,
      dots: false,
      slidesToShow: 4,
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
      <section className="section section--std section-divide off-screen off-screen--fade-up">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="title title--lg red-2-color text-center">
              شهادات العملاء{' '}
            </h2>
          </div>
          <div className="col-md-12">
            <Slider {...settings} className="mt-5">
              <div>
                <div className="me-4">
                  <div
                    className="card card--quote red-5-background "
                    style={{
                      width: '100%',
                      minHeight: '30rem',
                      display: 'inline-block',
                    }}>
                    <div className="card__content">
                      <p className="intro ">
                        {`"The team of consultants have strongly supported
                                us within a context of strong internal pressure.
                                Their high level of mastery and technical
                                expertise have allowed them to quickly generate
                                real engagement within our very international
                                organisation and bring about the required
                                changes."`}
                      </p>
                      <div className="row align-items-center profile-block ">
                        <div className="col-auto">
                          <picture className="grayscale circle-img--small circle-img--contain">
                            <source
                              type="image/webp"
                              srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png.webp"
                            />
                            <img src="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png" />
                          </picture>
                        </div>
                        <div className="col">
                          <div className="me-4">
                            <strong>Directeur du Contrôle Interne</strong>
                          </div>
                          Vallourec
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="slick-slide"
                data-slick-index="3"
                aria-hidden="true"
                tabIndex={-1}
                style={{ margin: '3rem' }}>
                <div className="me-4">
                  <div
                    className="card card--quote red-4-background "
                    style={{
                      width: '100%',
                      minHeight: '30rem',
                      display: 'inline-block',
                    }}>
                    <div className="card__content">
                      <p className="intro ">
                        {`    “A key success factor in the design of our
                                solution was Argon & Co’s capability to
                                rapidly understand our problems and the context
                                in order to suggest a concrete and pragmatic
                                approach. Program management and results were
                                praised."`}
                      </p>
                      <div className="row align-items-center profile-block ">
                        <div className="col-auto">
                          <picture className="grayscale circle-img--small circle-img--contain">
                            <source
                              type="image/webp"
                              srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/pierre-fabre-2.png.webp"
                            />
                            <img src="https://www.argonandco.com/wp-content/uploads/2020/01/pierre-fabre-2.png" />
                          </picture>
                        </div>
                        <div className="col">
                          <div className="me-4">
                            <strong>
                              Operations Director, Dermo Cosmétique
                            </strong>
                          </div>
                          Pierre Fabre
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="me-4">
                  <div
                    className="card card--quote red-2-background "
                    style={{
                      width: '100%',
                      minHeight: '30rem',
                      display: 'inline-block',
                    }}>
                    <div className="card__content">
                      <p className="intro ">
                        {`    “I recommend them to anyone who wants a
                                pragmatic approach and real results.”`}
                      </p>
                      <div className="row align-items-center profile-block ">
                        <div className="col-auto">
                          <picture className="grayscale circle-img--small circle-img--contain">
                            <source
                              type="image/webp"
                              srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png.webp"
                            />
                            <img src="https://www.argonandco.com/wp-content/uploads/2019/12/novartis-300x300.png" />
                          </picture>
                        </div>
                        <div className="col">
                          <div className="me-4">
                            <strong>Vice President Procurement</strong>
                          </div>
                          Novartis
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="me-4">
                  <div
                    className="card card--quote red-1-background "
                    style={{
                      minWidth: '10rem',
                      minHeight: '30rem',
                      display: 'inline-block',
                    }}>
                    <div className="card__content">
                      <p className="intro ">
                        {` “Rapid analysis of complex problems, and
                                solutions we can actually implement.”`}
                      </p>
                      <div className="row align-items-center profile-block ">
                        <div className="col-auto">
                          <picture className="grayscale circle-img--small circle-img--contain">
                            <source
                              type="image/webp"
                              srcSet="https://www.argonandco.com/wp-content/uploads/2020/10/avon-300x60.png.webp"
                            />
                            <img src="https://www.argonandco.com/wp-content/uploads/2020/10/avon-300x60.png" />
                          </picture>
                        </div>
                        <div className="col">
                          <div className="me-4">
                            <strong>Global Supply Chain Director</strong>
                          </div>
                          Avon Cosmetics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="me-4">
                  <div
                    className="card card--quote red-5-background "
                    style={{
                      width: '100%',
                      minHeight: '30rem',
                      display: 'inline-block',
                    }}>
                    <div className="card__content">
                      <p className="intro ">
                        {`    "The team of consultants have strongly supported
                                us within a context of strong internal pressure.
                                Their high level of mastery and technical
                                expertise have allowed them to quickly generate
                                real engagement within our very international
                                organisation and bring about the required
                                changes."`}
                      </p>
                      <div className="row align-items-center profile-block ">
                        <div className="col-auto">
                          <picture className="grayscale circle-img--small circle-img--contain">
                            <source
                              type="image/webp"
                              srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png.webp"
                            />
                            <img src="https://www.argonandco.com/wp-content/uploads/2019/12/vallourec-300x300.png" />
                          </picture>
                        </div>
                        <div className="col">
                          <div className="me-4">
                            <strong>Directeur du Contrôle Interne</strong>
                          </div>
                          Vallourec
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="me-4">
                  <div
                    className="card card--quote red-1-background "
                    style={{
                      width: '100%',
                      minHeight: '30rem',
                      display: 'inline-block',
                    }}>
                    <div className="card__content">
                      <p className="intro ">
                        {`  "Argon’s consultants have a deep functional
                                knowledge and real experience in transformation,
                                especially digital transformation. Their
                                approach was adaptable and efficient. It helped
                                us assess our digital maturity and define our
                                strategic priorities. They provided us with a
                                good level of benchmarking and lessons learnt
                                from other experiences."`}
                      </p>
                      <div className="row align-items-center profile-block ">
                        <div className="col-auto">
                          <picture className="grayscale circle-img--small circle-img--contain">
                            <source
                              type="image/webp"
                              srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Technicolor-Logo-300x138.png.webp"
                            />
                            <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Technicolor-Logo-300x138.png" />
                          </picture>
                        </div>
                        <div className="col">
                          <div className="me-4">
                            <strong>Head of Finance Transformation</strong>
                          </div>
                          TECHNICOLOR
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}
