import React, { useState } from 'react';
import Slider from 'react-slick';
import BannerAr from './BannerAr';
import Sidebar from './Sidebar';
import ContentSectionAr from './ContentSectionAr';
import CaseStudiesSliderAr from './CaseStudiesSliderAr';
import CaseStudyModal from './CaseStudyModal';
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
    speed: 1500,
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
          autoplay: true,
          speed: 1500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          speed: 1500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: true,
          speed: 1500,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div dir='rtl'>
        <BannerAr industry={industry} />
        <ContentSectionAr industry={industry} services={services}
        />
        <CaseStudiesSliderAr settings={sliderSettings} caseStudies={caseStudies} />
      </div>
    </>
  );
};

export default SingleIndustryEn;
