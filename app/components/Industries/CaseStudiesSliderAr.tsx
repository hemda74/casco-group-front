import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { CaseStudy } from '../../types';
import CaseStudyModal from './CaseStudyModal';

type Props = {
    settings: any,
    caseStudies: CaseStudy[];
};

const CaseStudiesSliderAr: React.FC<Props> = ({ settings, caseStudies }) => {
    const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
    return (
        <>
            <section className="section section--std light-grey-background pad-80 section-divide off-screen off-screen--fade-up">
                <div className="row justify-content-center">
                    <div className="col-md-12">
                        <Slider {...settings}>
                            {caseStudies.map((caseStudy, index) => (
                                <div key={index}>
                                    <a data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setSelectedCaseStudy(caseStudy)}>
                                        <div className="me-xl-4">
                                            <div className="card me-1 ms-1 red-2-background card--fixed-sm">
                                                <div className="card__content">
                                                    <h3 className="title title--sm title--medium-weight">
                                                        {caseStudy.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <CaseStudyModal caseStudy={selectedCaseStudy} />
        </>
    );
};

export default CaseStudiesSliderAr;
