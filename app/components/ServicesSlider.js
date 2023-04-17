import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../styles/Services.module.css'
import Image from 'next/image'
import image1 from '../public/images/home_page/sevices_section/image1.jpg';
import image2 from '../public/images/home_page/sevices_section/image2.jpg';
import image3 from '../public/images/home_page/sevices_section/image3.jpg';
import image4 from '../public/images/home_page/sevices_section/image4.jpg';
import image5 from '../public/images/home_page/sevices_section/image5.jpg';
import image6 from '../public/images/home_page/sevices_section/image6.jpg';
import image7 from '../public/images/home_page/sevices_section/image7.jpg';
export default class AsNavFor extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,

    };
  }
  
 
  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
   
    const settings_first_slider = {
      speed:0,
      slidesToScroll: 14,
    }
    const settings = {
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          initialSlide: 1,
          infinite: true,
          dots: true,
          speed:1000,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 22000,
          pauseOnHover: true,
          lazyLoad: true,
        
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
          speed:1000,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          lazyLoad: true,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: true,
          speed:1000,
          autoplay: true,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          lazyLoad: true,
         
        }
      }
    ]
  }
  return (
        <div className={`row ${styles.mainDiv} mt-3`}>
            <div className="col-sm-12">
                <div className={`${styles.ServiceSction}`}>
                    <div className="m-auto col-xl-8 col-lg-10 col-md-12">
                        <div className="text-center">
                            <div className={`${styles.sectionServicesHead}`}>
                                  <span className={`${styles.spanFeature}`} data-trans="servicesTitle"></span>
                                  <div className="row justify-content-center">
                                      <div className="">
                                          <small className={`${styles.headingFeature}`} data-trans="servicesSubTitle">{`Professionalism in providing technical consulting services for obtaining accreditations and upgrading quality infrastructure to comply with legislative, mandatory, and technical regulations is crucial.`}</small>
                                      </div>
                                  </div>
                                  <p className={`${styles.pargraphFeature}`} data-trans="servicesbrief">{`Our services aim to enhance mutual trust between conformity assessment providers and consumers, as well as raise awareness of the importance of accreditation in strengthening the quality infrastructure worldwide.`}</p>
                            </div>
                            <div>
                              <Slider
                              {...settings_first_slider}
                                asNavFor={this.state.nav2}
                                ref={slider => (this.slider1 = slider)}
                              >
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image1} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services1'>Laboratory Testing Consultation</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief1">{`At CASCO, we provide consultation services in the field of testing laboratories, in accordance with the international standard ISO/IEC 17025:2017.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image2} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services2'>Calibration Laboratory Consultation</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief2">{`At CASCO, we provide consultation services in the field of calibration laboratories, in accordance with the international standard ISO/IEC 17025:2017.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5 `}>
                                          <Image src={image3} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={`${styles.itemTitle} fs-3 fw-bold`} data-trans='Services3'>Inspection Certification Body Consultation</span> 
                                          <p className={`${styles.itemText}`} data-trans="ServicesBrief3">{`At CASCO, we provide consultation services in the field of inspection body accreditation, in accordance with the international standard ISO/IEC 17020:2012.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image4} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-6 col-sm-12 col-xs-12 p-5 ${styles.itemContent}`}>
                                          <span className={`${styles.itemTitle} fs-3 fw-bold`} data-trans='Services4'>Product Certification Body Consultation</span> 
                                          <p className={`${styles.itemText}`} data-trans="ServicesBrief4">{`At CASCO, we provide consultation services in the field of product certification body accreditation, in accordance with the international standard ISO/IEC 17065:2012.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image5} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`  col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services5'>Management System Certification Body Consultation</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief5">{`At CASCO, we provide consultation services in the field of management system certification body accreditation, in accordance with the international standard ISO/IEC 17021-1:2015.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image6} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12  ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold `} data-trans='Services6'>Medical Laboratory Consultation</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief6">{`At CASCO, we provide consultation services in the field of medical laboratories, in accordance with the international standard ISO 15189:2012.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5 `}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`  col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services7'>Halal Certification Consultation</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief7">{`At CASCO, we provide consultation services in the field of halal certification, in accordance with the international standard GSO 2055-2:2021.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5 `}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services8'>Personal Certification Consultation</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief8">{`At CASCO, we provide consultation services in the field of Personal certification, in accordance with the international standard ISO/IEC 17024:2012.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services9'>Consultation for Proficiency Testing Providers</span> 
                                          <p className={`${styles.itemText}`} data-trans="ServicesBrief9">{`At CASCO, we provide consulting services in the field of proficiency testing providers in accordance with the international standard ISO/IEC 17043:2010.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`  col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services10'>Technical Consultation for Notification Purposes</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief10">{`At CASCO, we offer technical consulting services for evaluation processes aimed at qualifying for notification by certifying authorities for products conformity certificates listed in the Gulf technical regulations GCC Standardization Organization "GSO", such as the regulations for children's toys (BD-131704-01) , low voltage electrical devices (BD-142004-01) , and more.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={`${styles.itemTitle} fs-3 fw-bold`} data-trans='Services11'>Consultation for Obtaining BRCGS Certification</span> 
                                          <p className={`${styles.itemText}`} data-trans="ServicesBrief11">{`At CASCO, we provide consultation services for qualification processes to obtain BRCGS Food Safety and BRCGS Packaging Material certifications.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services12'>Consultation for Obtaining Forest Stewardship Council (FSC) Certification</span> 
                                          <p className={`${styles.itemText}`} data-trans="ServicesBrief12">{`At CASCO, we offer consulting services in the field of responsible forest management to ensure that wood products originating from forests are managed in a responsible and sustainable manner, in accordance with the international standard of the Forest Stewardship Council (FSC), Programme for the Endorsement of Forest Certification (PEFC), Keurhout, and the European Union Timber Regulation (EU TR).`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`  col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={` ${styles.itemTitle} fs-3 fw-bold`} data-trans='Services13'>Consultation for Obtaining FSSC 22000 Scheme Certification</span> 
                                          <p className={` ${styles.itemText}`} data-trans="ServicesBrief13">{`At CASCO, we provide consulting services in the field of FSSC 22000 - Food and Feed Safety Management System and Quality Management System accreditation, in compliance with ISO 22000/9001 requirements, the Basic Requirements for Sector Program, and additional program requirements as applicable, according to the FSSC 22000 Version 6.0 international standard for obtaining GFSI (Global Food Safety Initiative) accreditation.`}</p>
                                      </div>
                                  </div>
                                  <div className={`d-flex ${styles.mainCard}`}>
                                      <div className={`col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 p-5`}>
                                          <Image src={image7} className={`${styles.objImage}`} width={550} height={450} alt=""/>
                                      </div>
                                      <div className={`col-lg-5 col-xl-5 col-md-5 col-sm-12 col-xs-12 ${styles.itemContent}`}>
                                          <span className={`${styles.itemTitle} fs-3 fw-bold`} data-trans='Services14'>ESG Report Service</span> 
                                          <p className={`${styles.itemText}`} data-trans="ServicesBrief14">{`CASCO offers a low-cost and credible ESG report service for businesses in the Gulf region, leveraging our team of highly experienced advisors with in-depth knowledge of ESG standards, regulations, and best practices across all major jurisdictions.`}</p>
                                      </div>
                                  </div>
                              </Slider>
                              {/* Second Slider */}
                              <Slider
                              {...settings}
                                asNavFor={this.state.nav1}
                                ref={slider => (this.slider2 = slider)}
                                slidesToShow={4}
                                swipeToSlide={true}
                                focusOnSelect={true}
                              >
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image1} className={`${styles.objImage} me-1 ms-1 `} width={170} height={210} alt=""/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services1'>Laboratory Testing Consultation</span>
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image2} className={`${styles.objImage} me-1 ms-1 `} width={170} height={210} alt=""/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services2'>Calibration Laboratory Consultation</span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image3} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services3'>Inspection Certification Body Consultation</span>
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image4} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services4'>Product Certification Body Consultation</span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image5} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services5'>Management System Certification Body Consultation</span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image6} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services6'>Medical Laboratory Consultation</span>
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image7} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services7'>Halal Certification Consultation</span> 
                                  </div>
                                  <div className={` ${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image1} className={`${styles.objImage} me-1 ms-1 `} width={170} height={210} alt=""/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services8'>Personal Certification Consultation</span> 
                                  </div>
                                  <div className={` ${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image2} className={`${styles.objImage} me-1 ms-1 `} width={170} height={210} alt=""/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services9'>Consultation for Proficiency Testing Providers</span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image3} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services10'>Technical Consultation for Notification Purposes</span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image4} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services11'>Consultation for Obtaining BRCGS Certification </span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image5} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services12'>Consultation for Obtaining Forest Stewardship Council (FSC) Certification </span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image6} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services13'>Consultation for Obtaining FSSC 22000 Scheme Certification</span> 
                                  </div>
                                  <div className={`${styles.secondContainer} d-flex flex-column`}>
                                      <Image src={image7} className={`${styles.objImage} me-1 ms-1`} width={170} height={210} alt="service_image"/>
                                      <span className="fw-bold mt-3 text-start" data-trans='Services14'>ESG Report Service</span> 
                                  </div>
                              </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   );
  }
}