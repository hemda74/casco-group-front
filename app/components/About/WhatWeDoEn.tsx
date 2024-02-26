import React from 'react';

const WhatWeDoEn = () => {
  return (
    <>
      <div id="content-wrap">
        <div className="banner  banner--ar banner--full-overlay ">
          <div className="banner__background">
            <picture>
              <source
                type="image/webp"
                srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26.jpg.webp"
              />
              <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-26.jpg" />
            </picture>
          </div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    What we do
                  </h1>
                  <p className="intro off-screen off-screen--rotate-up">
                    A global management consultancy that specialises in
                    operations strategy and transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="half-and-half"></div>

        <div className="section section--std off-screen off-screen--fade-up">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2
                  className="title title--lg red-2-color text-center"
                  style={{ marginBottom: '40px' }}>
                  Transforming operations
                </h2>
              </div>

              <div className="col-md-5 " style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-1-color ">
                  Operations strategy and transformation
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`  With expertise spanning supply chain planning,
                    manufacturing, logistics, procurement, finance, and shared
                    services, we work together with clients to transform their
                    businesses and generate real change.`}
                  </span>
                </p>
                <p className="intro text-black-50">
                  {`A transformation involves making a step-change to the way a
                  company operates, allowing it to make better use of existing
                  competencies and infrastructure or to develop new ones. It
                  leads to a substantial improvement in performance.`}
                </p>
              </div>
              <div
                className="col-md-5 offset-md-1"
                style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-2-color ">
                  Technical expertise and operational experience
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {` We apply a combination of deep technical expertise,
                      operational experience and broad business knowledge to
                      deliver lasting results.`}
                  </span>
                </p>
                <p className="intro text-black-50">
                  {`  All our people come from operational backgrounds and have been
                  through rigorous training, so we really know what we’re
                  talking about.`}
                </p>
              </div>
              <div className="col-md-5 " style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-3-color ">
                  Personable with challenge where needed
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`Our positive, flexible and personal approach, with challenge
                    where needed, ensures buy-in at all levels of our clients’
                    businesses and a positive outcome.`}
                  </span>
                </p>
                <span className="intro text-black-50">
                  {`    We are engaging to work with and trusted by clients to get the
                  job done, and share a belief that the only thing that matters
                  is making a real difference for our clients.`}
                </span>
              </div>
              <div
                className="col-md-5 offset-md-1"
                style={{ marginBottom: '30px' }}>
                <h2 className="title title--md red-4-color ">
                  Global footprint with local expertise
                </h2>
                <p>
                  <span className="intro text-black-50">
                    {`      We have offices in Paris, London, Abu Dhabi, Amsterdam,
                    Atlanta, Auckland, Chicago, Dusseldorf, Hong Kong, Lausanne,
                    Melbourne, Mumbai, Riyadh, São Paulo, Singapore and Sydney.`}
                  </span>
                </p>
                <span className="intro text-black-50">
                  {`   With over 500 consultants worldwide in 16 offices, we have the
                  ability to provide our clients with local support coupled with
                  our renowned understanding of global best practice.`}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="section section--std pad-80 section-divide off-screen off-screen--fade-up">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h2 className="title title--lg red-2-color text-center">
                  Client testimonials
                </h2>
                <p className="intro text-center"></p>
              </div>
              <div className="col-md-12">
                <div className="arrow-3-slider slick-initialized slick-slider">
                  <button
                    className="slick-prev slick-arrow"
                    aria-label="Previous"
                    type="button">
                    Previous
                  </button>
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: '11583px',
                        transform: 'translate3d(-1287px, 0px, 0px)',
                      }}>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="-3"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
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
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Directeur du Contrôle Interne
                                    </strong>
                                  </div>
                                  Vallourec
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="-2"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
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
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Head of Finance Transformation
                                    </strong>
                                  </div>
                                  TECHNICOLOR
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="-1"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`  "I personally appreciate their ability to
                                challenge us. They take our specific context
                                into account and have a strong vision. Their
                                recommendations are pragmatic and help us
                                achieve our objectives."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/logo-imerys.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2020/01/logo-imerys.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      {`Shared Services & Continuous
                                      Improvement VP`}
                                    </strong>
                                  </div>
                                  IMERYS
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index="0"
                        aria-hidden="false"
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {` “Rapid analysis of complex problems, and
                                solutions we can actually implement.”`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Global Supply Chain Director
                                    </strong>
                                  </div>
                                  Avon Cosmetics
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index="1"
                        aria-hidden="false"
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`    “I recommend them to anyone who wants a
                                pragmatic approach and real results.”`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>Vice President Procurement</strong>
                                  </div>
                                  Novartis
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
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-4-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`    “A key success factor in the design of our
                                solution was Argon & Co’s capability to
                                rapidly understand our problems and the context
                                in order to suggest a concrete and pragmatic
                                approach. Program management and results were
                                praised."`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
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
                      <div
                        className="slick-slide"
                        data-slick-index="4"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                “The work you have done, and the way you have
                                fitted in with our team at our busiest time of
                                year has been first class.”
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.04.44.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.04.44.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Vice President Cheese UK</strong>
                                  </div>
                                  Arla foods
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="5"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {` "Argon & Co have been perfect partners in the
                                development of our strategic vision and
                                transformation roadmap. Their mix of experience,
                                expertise and visible commitment was key in
                                aligning our senior managers to achieve tangible
                                results. It was a pleasure working with them."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/schlumberger-1.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2020/01/schlumberger-1.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Head of Global Business Services
                                    </strong>
                                  </div>
                                  Schlumberger
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="6"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                "They work with us on every continent, but their
                                standards are always the same."
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.05.03.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.05.03.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Group Head of Supply Chain Planning
                                    </strong>
                                  </div>
                                  British American Tobacco
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="7"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-3-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                "Brilliant with our people, they challenge us
                                but are always great to work with."
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/tesco-300x300.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/tesco-300x300.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Supply Chain Director</strong>
                                  </div>
                                  Tesco
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="8"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-4-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`    "Argon accompanied our Supply Chain
                                transformation program, identifying key topics
                                at the initial phase of scoping. These were
                                further developed in a pragmatic and long-term
                                approach within our operational ways of working.
                                Those new processes were used as a sound base
                                for the implementation of the new ERP system.
                                Their expertise about the sector was a true
                                added bonus."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/latecoere-300x300.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/latecoere-300x300.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Organization & Improvement Director
                                    </strong>
                                  </div>
                                  Latecoere
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="9"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`     "The team of consultants have strongly supported
                                us within a context of strong internal pressure.
                                Their high level of mastery and technical
                                expertise have allowed them to quickly generate
                                real engagement within our very international
                                organisation and bring about the required
                                changes."`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Directeur du Contrôle Interne
                                    </strong>
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
                        data-slick-index="10"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
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
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Head of Finance Transformation
                                    </strong>
                                  </div>
                                  TECHNICOLOR
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="11"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`    "I personally appreciate their ability to
                                challenge us. They take our specific context
                                into account and have a strong vision. Their
                                recommendations are pragmatic and help us
                                achieve our objectives."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/logo-imerys.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2020/01/logo-imerys.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Shared Services & Continuous Improvement
                                      VP
                                    </strong>
                                  </div>
                                  IMERYS
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="12"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`      “Rapid analysis of complex problems, and
                                solutions we can actually implement.”`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Global Supply Chain Director
                                    </strong>
                                  </div>
                                  Avon Cosmetics
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="13"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`  “I recommend them to anyone who wants a
                                pragmatic approach and real results.”`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>Vice President Procurement</strong>
                                  </div>
                                  Novartis
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="14"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-3-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`   “Their unique capacity to guide change
                                management with our teams was a key success
                                factor. Expected results were exceeded and new
                                practices are now installed for the long term.”`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/cofel-300x300.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/cofel-300x300.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>CEO </strong>
                                  </div>
                                  Cofel
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="15"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-4-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`     “A key success factor in the design of our
                                solution was Argon & Co’s capability to rapidly
                                understand our problems and the context in order
                                to suggest a concrete and pragmatic approach.
                                Program management and results were praised."`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
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
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="16"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`  “The work you have done, and the way you have
                                fitted in with our team at our busiest time of
                                year has been first class.”`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.04.44.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.04.44.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Vice President Cheese UK</strong>
                                  </div>
                                  Arla foods
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="17"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`       "Argon & Co have been perfect partners in the
                                development of our strategic vision and
                                transformation roadmap. Their mix of experience,
                                expertise and visible commitment was key in
                                aligning our senior managers to achieve tangible
                                results. It was a pleasure working with them."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/schlumberger-1.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2020/01/schlumberger-1.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Head of Global Business Services
                                    </strong>
                                  </div>
                                  Schlumberger
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="18"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`  "They work with us on every continent, but their
                                standards are always the same."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.05.03.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Screen-Shot-2019-12-10-at-15.05.03.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Group Head of Supply Chain Planning
                                    </strong>
                                  </div>
                                  British American Tobacco
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="19"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-3-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`     "Brilliant with our people, they challenge us
                                but are always great to work with."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/tesco-300x300.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/tesco-300x300.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Supply Chain Director</strong>
                                  </div>
                                  Tesco
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="20"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-4-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`  "Argon accompanied our Supply Chain
                                transformation program, identifying key topics
                                at the initial phase of scoping. These were
                                further developed in a pragmatic and long-term
                                approach within our operational ways of working.
                                Those new processes were used as a sound base
                                for the implementation of the new ERP system.
                                Their expertise about the sector was a true
                                added bonus."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/latecoere-300x300.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2019/12/latecoere-300x300.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Organization & Improvement Director
                                    </strong>
                                  </div>
                                  Latecoere
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="21"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {` "The team of consultants have strongly supported
                                us within a context of strong internal pressure.
                                Their high level of mastery and technical
                                expertise have allowed them to quickly generate
                                real engagement within our very international
                                organisation and bring about the required
                                changes."`}
                              </p>
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Directeur du Contrôle Interne
                                    </strong>
                                  </div>
                                  Vallourec
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="22"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
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
                              <div className="row align-items-center profile-block">
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
                                  <div>
                                    <strong>
                                      Head of Finance Transformation
                                    </strong>
                                  </div>
                                  TECHNICOLOR
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="23"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro ">
                                {`  "I personally appreciate their ability to
                                challenge us. They take our specific context
                                into account and have a strong vision. Their
                                recommendations are pragmatic and help us
                                achieve our objectives."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <picture className="grayscale circle-img--small circle-img--contain">
                                    <source
                                      type="image/webp"
                                      srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/logo-imerys.png.webp"
                                    />
                                    <img src="https://www.argonandco.com/wp-content/uploads/2020/01/logo-imerys.png" />
                                  </picture>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>
                                      Shared Services & Continuous Improvement
                                      VP
                                    </strong>
                                  </div>
                                  IMERYS
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="slick-next slick-arrow"
                    aria-label="Next"
                    type="button">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="pad-100-vert off-screen off-screen--fade-up">
          <h2 className="title title--lg red-1-color text-center color-red-1">
            Where next?
          </h2>
          <div className="container">
            <div className="row small-gutters pad-40-vert">
              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/news-insights/">
                  <div className="card card--image red-3-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/08/image_01-1024x584.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/08/image_01-1024x584.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          News & insights
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/services/">
                  <div className="card card--image red-3-background white-color card--fixed-sm ">
                    <div className="card__image object-fit">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet="https://www.argonandco.com/wp-content/uploads/2019/08/image_03.jpg.webp"
                        />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/08/image_03.jpg" />
                      </picture>
                    </div>
                    <div className="position-bottom">
                      <div className="card__content">
                        <h3 className="title title--xs title--medium-weight ">
                          Services
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/about/our-approach/">
                  <div className="card card--image red-3-background white-color card--fixed-sm ">
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
                        <h3 className="title title--xs title--medium-weight ">
                          Our approach
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhatWeDoEn;
