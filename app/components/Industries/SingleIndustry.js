import React from 'react';
import Slider from 'react-slick';
const SingleIndustry = () => {
  var settings = {
    dots: true,
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
          dots: true,
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
    <>
      <div id="content-wrap">
        <div className="banner  banner--no-image  banner--ar banner--full-overlay ">
          <div className="banner__background"></div>
          <div className="banner__center text-center ">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-11">
                  <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                    Aerospace and defence
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__bottom banner__bottom--higher">
            <div className="container">
              <div className="row cycling-logos off-screen off-screen--link-list text-center">
                <div className="col">
                  <div className="cycling-logos__image object-fit object-fit--contain">
                    <picture className="banner-logo-0">
                      <source srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/airbu.png" />
                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/airbu.png" />
                    </picture>
                  </div>
                </div>
                <div className="col">
                  <div className="cycling-logos__image object-fit object-fit--contain">
                    <picture
                      className="banner-logo-1"
                      style={{ opacity: 0.254548 }}>
                      <source srcSet="https://www.argonandco.com/wp-content/uploads/2020/01/Naval.png" />
                      <img src="https://www.argonandco.com/wp-content/uploads/2020/01/Naval.png" />
                    </picture>
                  </div>
                </div>
                <div className="col">
                  <div className="cycling-logos__image object-fit object-fit--contain">
                    <picture className="banner-logo-2">
                      <source srcSet="https://www.argonandco.com/wp-content/uploads/2020/09/Manchester_Airports_Group_logo-white-e1599253167978.png" />
                      <img src="https://www.argonandco.com/wp-content/uploads/2020/09/Manchester_Airports_Group_logo-white-e1599253167978.png" />
                    </picture>
                  </div>
                </div>
                <div className="col">
                  <div className="cycling-logos__image object-fit object-fit--contain">
                    <img
                      src="https://www.argonandco.com/wp-content/uploads/2020/09/Logo-Nexter-Systems-white-e1599253550612.png"
                      className="banner-logo-3"
                    />
                  </div>
                </div>
                <div className="col">
                  <div className="cycling-logos__image object-fit object-fit--contain">
                    <picture className="banner-logo-4">
                      <source srcSet="https://www.argonandco.com/wp-content/uploads/2020/09/Latecoere-white.png" />
                      <img src="https://www.argonandco.com/wp-content/uploads/2020/09/Latecoere-white.png" />
                    </picture>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="banner__bottom text-center banner__bottom--lower m-auto text-white">
            <div className="breadcrumb m-auto text-white">
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to Home."
                  href="https://www.argonandco.com/en/"
                  className="home m-auto text-white">
                  <span property="name" className="m-auto text-white">
                    Home
                  </span>
                </a>
                <meta property="position" content="1" />
              </span>
              ›
              <span property="itemListElement" typeof="ListItem">
                <a
                  property="item"
                  typeof="WebPage"
                  title="Go to Industries."
                  href="https://www.argonandco.com/en/industries/"
                  className="post post-page">
                  <span property="name">Industries</span>
                </a>
                <meta property="position" content="2" />
              </span>
              ›
              <span className="post post-page current-item">
                Aerospace and defence
              </span>
            </div>
          </div>
        </div>
        <section className="main-page">
          <div className="container">
            <div className="row off-screen off-screen--fade-up justify-content-center">
              <div className="col-lg-7">
                <div className="the-content">
                  <h2>Aerospace and defence</h2>
                  <p>
                    {`             The defence and aerospace industries are currently going
                    through profound and longstanding transformations. The
                    aerospace industry is still in rapid growth mode driven by
                    the demand of emerging countries and new
                    low-consumption-aircrafts. The defence industry however, is
                    the victim of a decrease in state demand, linked in
                    particular to the reduction of European countries’ defence
                    budgets. This calls into question the global economic model
                    of big defence projects that drive research and innovation.`}
                  </p>
                  <h2>Challenges in the aerospace and defence industry</h2>
                  <p>
                    {`   In general, the competitive pressure, the arrival of new
                    entrants, the transfer of technologies and the importance of
                    local plants make it mandatory to enforce a globalised
                    supply chain, collaboration within the company and with
                    suppliers as well as end to end program management along the
                    product lifecycle.`}
                  </p>
                  <p>
                    {`  In the aerospace industry, the entire chain, from suppliers
                    to manufacturers, should not only guarantee the ramp-up of
                    the supply chain but also the conception of new models that
                    are cheaper to use.`}
                  </p>
                  <h2>How we can help with aerospace and defence</h2>
                  <p>
                    {` We assist our clients in their transformation programs, from
                    the identification of opportunities to the implementation of
                    all operational performance levers;`}
                  </p>

                  <div className="accordion" id="accordion">
                    <div className="accordion__item">
                      <div className="accordion__trigger js-accordion-trigger">
                        <h4 className="accordion__title">
                          Operational organisation
                        </h4>
                        <div className="accordion__plus js-accordion-plus"></div>
                      </div>
                      <div
                        className="accordion__content js-accordion-target"
                        style={{ display: 'none' }}>
                        <ul>
                          <li>
                            {`     Definition of plants and evolution of the
                            operational organisation to anticipate or face
                            business model issues, growth, PMI, and
                            harmonisation of functioning methods`}
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="accordion__item">
                      <div className="accordion__trigger js-accordion-trigger">
                        <h4 className="accordion__title">
                          Technology, design and collaboration
                        </h4>
                        <div className="accordion__plus js-accordion-plus"></div>
                      </div>
                      <div
                        className="accordion__content js-accordion-target"
                        style={{ display: 'none' }}>
                        <ul>
                          <li>
                            Structuration of technological roadmaps and
                            improving cooperative research and development
                            program management
                          </li>
                          <li>
                            Design-to-value on programmes between partners
                          </li>
                          <li>
                            Supply chain digitalisation and collaboration with
                            suppliers along the entire product life cycle
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="accordion__item">
                      <div className="accordion__trigger js-accordion-trigger">
                        <h4 className="accordion__title">
                          Supply chain optimisation
                        </h4>
                        <div className="accordion__plus js-accordion-plus"></div>
                      </div>
                      <div
                        className="accordion__content js-accordion-target"
                        style={{ display: 'none' }}>
                        <ul>
                          <li>
                            {`         Optimisation of the upstream supply chain: sourcing
                            and offset strategy, cycle reduction, inventory and
                            WIP reduction, master supplier economic performance,
                            adaptability to demand variations, global supply
                            chain control tower`}
                          </li>
                          <li>
                            {`     Maintain optimal operational conditions (reduction
                            of lead times, planning and forecasting of MRO
                            flows, stock optimisation etc.)`}
                          </li>
                          <li>
                            {`              Optimisation of spare parts distribution (forecasts,
                            sourcing and distribution networks, stock policies)`}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h2>Our approach</h2>
                  <p>
                    {`          We apply a combination of technical expertise, operational
                    experience and business knowledge to help our clients solve
                    aerospace and defence issues and deliver lasting results.
                    Our personal and pragmatic approach, with challenge where
                    needed, ensures buy-in at all levels of our clients’
                    businesses and a successful outcome. We have worked with a
                    wide range of organisations in the aerospace and defence
                    industry including Thales, Safran Electrical &amp; Power,
                    Nexter Systems, Naval Group, Manchester Airports Group Plc,
                    Airbus Helicopters, MBDA, Latécoère and Eutelsat.&nbsp;`}
                    <u>
                      <a href="https://www.argonandco.com/en/about/">
                        Learn more about us here.
                      </a>
                    </u>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 offset-lg-1 sidebar">
                <div className="pad-40 light-grey-background red-1-border-top contact-card">
                  <div className="row align-items-start">
                    <div className="col-md-12">
                      <h4 className="title title--sm red-1-color">
                        Contact our aerospace and defences experts
                      </h4>
                    </div>
                    <div className="col-md-12">
                      <p className="p--large">
                        <strong>Thierry Lucas</strong>
                      </p>
                      <p>Partner </p>
                    </div>
                    <div className="col-md-12 contact-details">
                      <p className="no-wrap">
                        <span className="data-label red-1-color">Phone</span>
                      </p>
                      <div>+33 (0)1 55 46 13 00</div>
                      <p></p>
                      {/* <!--            <p><span className="data-label red-1-color">Email</span>aerospace-and-defence@argonandco.com</p>--> */}

                      <p className="no-wrap">
                        <span className="data-label red-1-color">Email</span>
                        <a href="mailto: aerospace-and-defence.france@argonandco.com">
                          aerospace-and-defence.france@argonandco.com
                        </a>
                      </p>
                    </div>
                    <div className="contact-card__profile">
                      <picture className="circle-img circle-img--small">
                        <source srcSet="https://www.argonandco.com/wp-content/uploads/2019/10/Thierry-Lucas-300x300.jpg.webp" />
                        <img src="https://www.argonandco.com/wp-content/uploads/2019/10/Thierry-Lucas-300x300.jpg" />
                      </picture>
                    </div>
                  </div>
                </div>

                <div className="sidebar-nav red-4-background color-white">
                  <div className="title title--sm title--medium-weight">
                    Explore our services
                  </div>
                  <ul>
                    <li className="page_item page-item-42 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/operations-strategy/">
                        Operations strategy
                      </a>
                    </li>
                    <li className="page_item page-item-5111 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/sustainability/">
                        Sustainability
                      </a>
                    </li>
                    <li className="page_item page-item-16820 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/operational-performance/">
                        Operational performance
                      </a>
                    </li>
                    <li className="page_item page-item-43 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/new-products/">
                        New products
                      </a>
                    </li>
                    <li className="page_item page-item-44 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/procurement/">
                        Procurement
                      </a>
                    </li>
                    <li className="page_item page-item-45 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/supply-chain-planning/">
                        Supply chain planning
                      </a>
                    </li>
                    <li className="page_item page-item-46 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/manufacturing/">
                        Manufacturing
                      </a>
                    </li>
                    <li className="page_item page-item-47 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/logistics/">
                        Logistics
                      </a>
                    </li>
                    <li className="page_item page-item-48 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/channels-to-market/">
                        Channels to market
                      </a>
                    </li>
                    <li className="page_item page-item-49 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/maintenance-and-after-sales/">
                        Maintenance and <br />
                        after sales
                      </a>
                    </li>
                    <li className="page_item page-item-50 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/transformation-management/">
                        Transformation management
                      </a>
                    </li>
                    <li className="page_item page-item-51 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/digital-and-it/">
                        Digital and IT
                      </a>
                    </li>
                    <li className="page_item page-item-52 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/finance/">
                        Finance
                      </a>
                    </li>
                    <li className="page_item page-item-53 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/sga/">
                        SG&amp;A
                      </a>
                    </li>
                    <li className="page_item page-item-54 page_item_has_children">
                      <a href="https://www.argonandco.com/en/services/hr/">
                        HR
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section--std light-grey-background pad-80 section-divide off-screen off-screen--fade-up">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="title title--lg red-2-color text-center">
                Aerospace and defence case studies
              </h2>
            </div>
            <div className="col-md-12">
              <Slider {...settings}>
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>{' '}
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>{' '}
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>{' '}
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>{' '}
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>{' '}
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>{' '}
                <div>
                  <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div className="me-xl-4">
                      <div className="card me-1 ms-1 red-2-background card--fixed-sm ">
                        <div className="card__content">
                          <h3 className="title title--sm title--medium-weight">
                            Supply quality management
                          </h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </Slider>
            </div>
          </div>
        </section>
        <div className="">
          <div
            className="modal fade contact  w-screen fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8 "
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog bg-white">
              <div className="modal-content  relative m-auto z-50 | lg:p-8 lg:h-auto">
                <div className="relative bg-white  min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg lg:mx-auto">
                  <div className="absolute top-0 right-0 text-lg  cursor-pointer">
                    <button
                      type="button"
                      className="btn-close m-end p-3"
                      data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div className="mfp-content p-3 mt-5">
                    <div className="casestudy-popup" id="case_study_1">
                      <div className="row align-items-center">
                        <div className="col-md-10">
                          <div className="data-label">
                            cold chain logistics{' '}
                          </div>
                          <h2 className="title title--lg">
                            WMS recovery and implementation{' '}
                          </h2>
                        </div>
                        <div className="col-md-2 col-xs-4 col-sm-6 col-8">
                          <picture>
                            <source
                              type="image/webp"
                              srcset="https://www.argonandco.com/wp-content/uploads/2020/11/Swire-grey.png.webp"
                            />
                            <img src="https://www.argonandco.com/wp-content/uploads/2020/11/Swire-grey.png" />
                          </picture>
                        </div>
                        <div className="col-md-10">
                          <p>
                            Swire Cold Storage is a leading Australian provider
                            of cold chain logistics services and supply chain
                            solutions, offering temperature-controlled
                            warehousing, refrigerated transport and distribution
                            services to a broad range of businesses.
                          </p>
                          <p>
                            A previous in-house WMS implementation had not been
                            completed. The impact of the part implementation was
                            a deterioration of performance from the warehouse
                            and cost impacts.
                          </p>
                          <p>&nbsp;</p>
                        </div>
                      </div>
                      <div className="row columns">
                        <div className="col-md-6">
                          <ul>
                            <li>
                              Identify the key issues driving poor warehouse
                              performance
                            </li>
                            <li>
                              Work with the DC management team to prioritise and
                              resolve issues whilst improving business as usual
                            </li>
                            <li>
                              Project manage the re-implementation of the WMS
                              with the IT systems supplier (in Canada)
                            </li>
                            <li>
                              Change manage the implementation of the system,
                              improve capability via training, reduce process
                              blockages and improve performance to a developed
                              schedule
                            </li>
                          </ul>
                          <p>&nbsp;</p>
                        </div>
                        <div className="col-md-6">
                          <ul>
                            <li>
                              Full process re-write and all SCS employees
                              trained
                            </li>
                            <li>
                              Increased productivity from warehouse staff and
                              increased space availability within the warehouse
                            </li>
                            <li>
                              Improved relationship management with the software
                              provider, allowing for further system enhancements
                              moving forward
                            </li>
                            <li>Delivered a reduced cost base warehouse</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleIndustry;
