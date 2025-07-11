import Link from 'next/link';
import React from 'react';

const WhereIsNextAr = () => {
  return (
    <>
      <section className="pad-100-vert off-screen off-screen--fade-up">
        <h2 className="title title--lg red-1-color text-center color-red-1">
          مالتالي ؟
        </h2>
        <div className="container">
          <div className="row small-gutters pad-40-vert">
            <div className="col-md-4">
              <Link href="/news-insights/">
                <div className="card card--image red-3-background white-color card--fixed-sm ">
                  <div className="card__image object-fit">
                    <img src="https://www.argonandco.com/wp-content/uploads/2019/08/image_01-1024x584.jpg" />
                  </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--xs title--medium-weight ">
                        الاخبار والرؤى
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-md-4">
              <Link href="/services/">
                <div className="card card--image red-3-background white-color card--fixed-sm ">
                  <div className="card__image object-fit">
                    <picture>
                      <img src="https://www.argonandco.com/wp-content/uploads/2019/08/image_03.jpg" />
                    </picture>
                  </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--xs title--medium-weight ">
                        الخدمات
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div className="col-md-4">
              <Link href="/about/our-approach/">
                <div className="card card--image red-3-background white-color card--fixed-sm ">
                  <div className="card__image object-fit">
                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-15-1024x736.jpg" />
                  </div>
                  <div className="position-bottom">
                    <div className="card__content">
                      <h3 className="title title--xs title--medium-weight ">
                        نهجنا
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhereIsNextAr;
