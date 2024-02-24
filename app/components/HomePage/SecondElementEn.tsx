import React from 'react';
import Image1 from '../../public/login-background-image.jpg';
import Image from 'next/image';
const SecondElementEn = () => {
  return (
    <>
      <section className="off-screen off-screen--fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="grid-5">
                <a href="https://www.argonandco.com/en/about/what-we-do/">
                  <div className="card card--image red-3-background white-color card--large">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-1024x683.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2023/12/Campaign-image-website-1024x683.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          News
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
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/IMG_8317-1024x995.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/IMG_8317-1024x995.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Article
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://www.argonandco.com/en/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <Image
                          src={Image1}
                          width={200}
                          height={100}
                          alt="hello"
                        />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Event
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
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          Article
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>

                <a href="https://www.argonandco.com/en/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm">
                    <div className="card__image object-fit">
                      <picture>
                        <Image
                          src={Image1}
                          width={200}
                          height={100}
                          alt="hello"
                        />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight">
                          White Papers
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

export default SecondElementEn;
