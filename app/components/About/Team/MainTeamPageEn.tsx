import Link from 'next/link';
import React from 'react';
const MainTeamPageEn = () => {
  return (
    <>
      <div className="no-image-banner text-center">
        <h1 className="title title--bold title--2xl">
          <span className="gradient-text">About</span>
        </h1>
      </div>
      <section className="off-screen off-screen--fade-up">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="grid-3">
                <Link href="/about/what-we-do/">
                  <div className="card card--image red-3-background white-color card--large">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26-1024x732.jpg.webp"
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
                </Link>

                <Link href="/about/our-culture/">
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
                </Link>

                <Link href="/about/our-approach/">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="off-screen off-screen--hide off-screen--fade-up js-meet-the-team"
        id="meet-the-team">
        <div className="container card-grid">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="title title--lg red-1-color">Meet The Team</h2>
            </div>
          </div>
          <div className="row js-team-top-level">
            <div className="col-xl-4 col-md-6 order-1">
              <div className="">
                <a href="#person_0_london" className="magnific-inline">
                  <div className="card card--person">
                    <div className="card--person__image grayscale">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/10/190517_Crimson-Co-231560-e1571821250814-959x1024.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/10/190517_Crimson-Co-231560-e1571821250814-959x1024.jpg" />
                      </picture>
                    </div>
                    <strong className="notranslate">Ben Wright</strong>
                    Partner{' '}
                  </div>
                </a>
                <div className="casestudy-popup mfp-hide" id="person_0_london">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="data-label">Partner </div>
                      <h2 className="title title--lg notranslate">
                        Ben Wright{' '}
                      </h2>
                      <ul>
                        <li>
                          Board level operational experience in management
                          consultancy focusing on logistics and supply chain
                          functions within the retail and FMCG sectors
                        </li>
                        <li>
                          Particular expertise in automated warehouse design,
                          distribution network strategies, last mile logistics,
                          warehouse management systems (WMS) and multi-channel
                          logistics operations
                        </li>
                        <li>
                          With significant experience across the UK, Europe,
                          Asia, USA and Australia, previous projects include
                          design and tendering for the worlds largest automated
                          multi-channel grocery warehouse, global network
                          rationalisations, Brexit-driven European distribution
                          strategies and grocery home shopping operational
                          improvements
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <div className="card--person__image ">
                        <picture>
                          <source
                            type="image/webp"
                            srcSet="https://www.argonandco.com/wp-content/uploads/2019/10/190517_Crimson-Co-231560-e1571821250814-959x1024.jpg.webp"
                          />
                          <img src="https://www.argonandco.com/wp-content/uploads/2019/10/190517_Crimson-Co-231560-e1571821250814-959x1024.jpg" />
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 order-2">
              <div className="card card--split red-1-background">
                <div className="row no-gutters">
                  <div className="col-6">
                    <div className="card__content">
                      <div className="title title--sm">UAE</div>

                      <div className="card--split__hover title--medium-weight">
                        Meet the Team
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 card--split__image grayscale"
                    style={{
                      backgroundImage:
                        'url(https://www.argonandco.com/wp-content/uploads/2020/01/Picture1.png)',
                    }}></div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 order-4">
              <div className="card card--split red-1-background">
                <div className="row no-gutters">
                  <div className="col-6">
                    <div className="card__content">
                      <div className="title title--sm">KSA</div>

                      <div className="card--split__hover title--medium-weight">
                        Meet the team
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6 card--split__image grayscale"
                    style={{
                      backgroundImage:
                        'url(https://www.argonandco.com/wp-content/uploads/2021/07/IMG_0128-683x1024.jpg)',
                    }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainTeamPageEn;
