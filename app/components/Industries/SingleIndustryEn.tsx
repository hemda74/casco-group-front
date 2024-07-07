import React, { useState } from 'react';
import Slider from 'react-slick';
import Banner from './Banner';
import ContentSection from './ContentSection';
import CaseStudiesSlider from './CaseStudiesSlider';
import { Industry, ServiceShort, CaseStudy } from '../../types';

type Props = {
  industry: Industry;
  services: ServiceShort[];
  caseStudies: CaseStudy[];
};
const SingleIndustryEn: React.FC<Props> = ({ industry, services, caseStudies }) => {

  // Slider settings
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    <>
      <Banner industry={industry} />
      <ContentSection industry={industry} services={services}
      />
      <CaseStudiesSlider settings={sliderSettings} caseStudies={caseStudies} />
    </>
  );
};

export default SingleIndustryEn;
