import React from 'react';
import Slider from 'react-slick';

type Props = {
    settings: any,
};

const CaseStudiesSlider: React.FC<Props> = ({ settings }) => {
    return (
        <section className="section section--std light-grey-background pad-80 section-divide off-screen off-screen--fade-up">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <Slider {...settings}>
                        {/* Slide items */}
                        {[...Array(7)].map((_, index) => (
                            <div key={index}>
                                <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className="me-xl-4">
                                        <div className="card me-1 ms-1 red-2-background card--fixed-sm">
                                            <div className="card__content">
                                                <h3 className="title title--sm title--medium-weight">
                                                    Supply quality management
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
    );
};

export default CaseStudiesSlider;
