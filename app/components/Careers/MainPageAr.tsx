import React from 'react';
import Link from 'next/link';
const MainPageAr = () => {
  return (
    <>
      <div id="content-wrap" dir="rtl">
        <div className="banner  banner--full-height banner--overlay ">
          <div className="banner__background">
            <picture>
              <source
                type="image/webp"
                srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-17-1-scaled.jpg.webp"
              />
              <img src="https://www.argonandco.com/wp-content/uploads/2019/12/ARGON-17-1-scaled.jpg" />
            </picture>
          </div>
          <div className="banner__bottom text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    الوظائف
                  </h1>
                  <p className="intro off-screen off-screen--rotate-up">
                    {`We are always looking for inspirational, driven and expert
                    people to join our team.`}
                  </p>
                  <div className="down-arrow js-interact js-scroll-height ">
                    <Link href="#hiDiv">
                      <p>.</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="half-and-half" id="hiDiv">
          <div className="row no-gutters">
            <div
              className="col-md-6  half-and-half__image"
              style={{
                backgroundImage:
                  'url(https://www.argonandco.com/wp-content/uploads/2019/11/culture.jpg)',
              }}></div>
            <div className="col-md-6  red-1-background white-color">
              <div className="half-and-half__content">
                <h2>Culture</h2>
                <p>
                  <span className="intro">
                    {`Our clients and consultants say the same thing; we do things
                    differently to others. We work hard at this, recruiting the
                    best people and focusing on our culture and collaborative
                    approach, which is unique in the industry.`}
                  </span>
                </p>
                <p>
                  {`Our people are our business. We provide teams of highly
                  skilled consultants to apply a combination of technical
                  expertise, operational experience, business knowledge and
                  common sense to deliver real change.`}
                </p>
                <p>
                  {`Underpinning our approach is caring about each other and our
                  clients. We are real people dealing with real people, so we
                  need to understand what the issues and concerns are that
                  clients are facing, and also allow our colleagues to develop
                  their skills on a wide range of assignments whilst achieving a
                  sustainable work-life balance.`}
                </p>
              </div>
            </div>
          </div>

          <div className="row no-gutters">
            <div
              className="col-md-6 order-2 half-and-half__image"
              style={{
                backgroundImage:
                  'url(https://www.argonandco.com/wp-content/uploads/2019/11/prof_dev.jpg)',
              }}></div>
            <div className="col-md-6 order-1 red-2-background white-color">
              <div className="half-and-half__content">
                <h2>Professional development</h2>
                <p>
                  <span className="intro">
                    {`   We only recruit the best people; those who we believe will
                    fit with our supportive and collaborative approach, and who
                    will be able to constructively challenge our clients whilst
                    working alongside them to get the job done.`}
                  </span>
                </p>
                <p>
                  {`   Once someone joins us, we believe it is essential to provide
                  an environment in which they can continually develop and
                  expand their capabilities. Throughout your career with Argon
                  &amp; Co, our career development model will offer you the
                  opportunity to:`}
                </p>
                <ul>
                  <li>
                    {`Broaden your skills across a number of different business
                    disciplines`}
                  </li>
                  <li>
                    {`Develop deeper technical skills in your specialist areas`}
                  </li>
                  <li>{`Work in and learn about different industries`}</li>
                  <li>
                    {` Work with highly professional teams, consulting to all
                    levels of the client`}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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
                        width: '6435px',
                        transform: ' translate3d(-2574px, 0px, 0px)',
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
                            className="card card--quote red-4-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {` "Argon &amp; Co combines strong expertise with
                                an incredible atmosphere; all people matter.
                                It’s a great combination."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Marine-300x200.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Marine-300x200.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Marine</strong>
                                  </div>
                                  Paris office
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
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {`   "Learning is never ending in this firm, and the
                                variety of projects which we do is incredible."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Bijoy.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Bijoy.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Bijoy</strong>
                                  </div>
                                  Mumbai office
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
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {`  "As a graduate, I am new to the professional
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
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="0"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {`  "We are privileged at Argon &amp; Co to develop
                                our expertise by working with different kinds of
                                clients while growing professionally in a unique
                                environment."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Thibault-300x200.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Thibault-300x200.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Thibault</strong>
                                  </div>
                                  Paris office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="1"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {` "The culture is one which prides itself on
                                delivering the highest possible quality of work
                                and I feel that our professionalism stands out
                                as a result of this."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Nick.png.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Nick.png" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Nick</strong>
                                  </div>
                                  London office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide"
                        data-slick-index="2"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-3-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {`"Even as a relatively new Consultant, I’d worked
                                on some challenging and interesting projects.
                                The culture is one in which I am encouraged to
                                excel and the company has great people, a really
                                good team spirit."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Liz.png.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Liz.png" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Liz</strong>
                                  </div>
                                  Sydney office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-current slick-active"
                        data-slick-index="3"
                        aria-hidden="false"
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-4-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {` "Argon &amp; Co combines strong expertise with
                                an incredible atmosphere; all people matter.
                                It’s a great combination."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Marine-300x200.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Marine-300x200.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Marine</strong>
                                  </div>
                                  Paris office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index="4"
                        aria-hidden="false"
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {` "Learning is never ending in this firm, and the
                                variety of projects which we do is incredible."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Bijoy.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Bijoy.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Bijoy</strong>
                                  </div>
                                  Mumbai office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-active"
                        data-slick-index="5"
                        aria-hidden="false"
                        style={{ width: '394px' }}>
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
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="6"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-1-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {`  "We are privileged at Argon &amp; Co to develop
                                our expertise by working with different kinds of
                                clients while growing professionally in a unique
                                environment."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Thibault-300x200.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Thibault-300x200.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Thibault</strong>
                                  </div>
                                  Paris office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="7"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-2-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {` "The culture is one which prides itself on
                                delivering the highest possible quality of work
                                and I feel that our professionalism stands out
                                as a result of this."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Nick.png.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Nick.png" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Nick</strong>
                                  </div>
                                  London office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="8"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-3-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {`  "Even as a relatively new Consultant, I’d worked
                                on some challenging and interesting projects.
                                The culture is one in which I am encouraged to
                                excel and the company has great people, a really
                                good team spirit."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Liz.png.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Liz.png" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Liz</strong>
                                  </div>
                                  Sydney office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="9"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-4-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {` "Argon &amp; Co combines strong expertise with
                                an incredible atmosphere; all people matter.
                                It’s a great combination."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Marine-300x200.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Marine-300x200.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Marine</strong>
                                  </div>
                                  Paris office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="10"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
                        <div>
                          <div
                            className="card card--quote red-5-background "
                            style={{ width: '100%', display: 'inline-block' }}>
                            <div className="card__content">
                              <p className="intro">
                                {`"Learning is never ending in this firm, and the
                                variety of projects which we do is incredible."`}
                              </p>
                              <div className="row align-items-center profile-block">
                                <div className="col-auto">
                                  <div className="circle-img circle-img--small grayscale object-fit">
                                    <picture>
                                      <source
                                        type="image/webp"
                                        srcSet="https://www.argonandco.com/wp-content/uploads/2019/12/Bijoy.jpg.webp"
                                      />
                                      <img src="https://www.argonandco.com/wp-content/uploads/2019/12/Bijoy.jpg" />
                                    </picture>
                                  </div>
                                </div>
                                <div className="col">
                                  <div>
                                    <strong>Bijoy</strong>
                                  </div>
                                  Mumbai office
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="slick-slide slick-cloned"
                        data-slick-index="11"
                        id=""
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: '394px' }}>
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

        <div
          className="section section--std full-image-content off-screen off-screen--hide off-screen--fade-up join-us"
          style={{
            backgroundImage:
              'url(https://www.argonandco.com/wp-content/uploads/2019/11/grid-scaled.jpg)',
          }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h2 className="title title--lg red-2-color text-center">
                  Join us
                </h2>
                <p style={{ textAlign: 'center' }}>
                  <span className="intro">
                    {` Learn more about working at Argon &amp; Co, typical projects
                    we work on, regular events to get involved in, the exciting
                    career path ahead and how to apply for a position with us.`}
                  </span>
                </p>
                <p style={{ textAlign: 'center' }}>
                  <Link href="/careers/join-us/">Read more & apply</Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="pad-100-vert  off-screen off-screen--hide off-screen--fade-up ">
          <h2 className="title title--lg red-1-color text-center color-red-1">
            Where next?
          </h2>
          <div className="container">
            <div className="row small-gutters pad-40-vert">
              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/about/what-we-do/">
                  <div className="card card--image red-3-background white-color card--fixed-sm ">
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
                        <h3 className="title title--xs title--medium-weight ">
                          What we do
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

              <div className="col-md-4">
                <a href="https://www.argonandco.com/en/about/our-culture/">
                  <div className="card card--image red-3-background white-color card--fixed-sm ">
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
                        <h3 className="title title--xs title--medium-weight ">
                          Our culture
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

export default MainPageAr;
