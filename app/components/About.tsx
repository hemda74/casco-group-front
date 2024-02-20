import React from 'react';
// import '../styles/globals.css';
const About = () => {
  return (
    <>
      <section className="off-screen off-screen--fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="grid-3">
                <a href="https://www.argonandco.com/en/about/what-we-do/">
                  <div className="card card--image red-3-background white-color card--large">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="
															https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26-1024x732.jpg.webp
														"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26-1024x732.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          What we do
                        </h3>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://www.argonandco.com/en/about/our-culture/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="
															https://www.argonandco.com/wp-content/uploads/2019/12/IMG_8317-1024x995.jpg.webp
														"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/IMG_8317-1024x995.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Our culture
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://www.argonandco.com/en/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="
															https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg.webp
														"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Our approach
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
