import React from 'react';
import { CaseStudy } from '../../types';

type Props = {
    caseStudy: CaseStudy | null;
};

const CaseStudyModal: React.FC<Props> = ({ caseStudy }) => {
    if (!caseStudy) return null;
    const evenPoints = caseStudy.caseStudyPoint.filter((_, index) => index % 2 === 0);
    const oddPoints = caseStudy.caseStudyPoint.filter((_, index) => index % 2 !== 0);

    return (
        <div
            className="modal fade contact w-screen fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto lg:h-screen lg:px-8"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog bg-white">
                <div className="modal-content relative m-auto z-50 lg:p-8 lg:h-auto">
                    <div className="relative bg-white min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg lg:mx-auto">
                        <div className="absolute top-0 right-0 text-lg cursor-pointer">
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
                                            {caseStudy.industry.name}
                                        </div>
                                        <h2 className="title title--lg">
                                            {caseStudy.title}
                                        </h2>
                                    </div>
                                    <div className="col-md-2 col-xs-4 col-sm-6 col-8">
                                        <picture>
                                            <img src={caseStudy.imageUrl} alt={caseStudy.title} />
                                        </picture>
                                    </div>
                                    <div className="col-md-10">
                                        <p>{caseStudy.paragraph_1}</p>
                                        <p>{caseStudy.paragraph_2}</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <ul>
                                            {evenPoints.map((point) => (
                                                <li className='fw-semibold' key={point.id}> <span className='title'>●</span> {point.p1}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            {oddPoints.map((point) => (
                                                <li className='fw-semibold' key={point.id}> <span className='title'>●</span> {point.p1}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;
