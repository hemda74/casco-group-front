import React from 'react';
import Sidebar from './Sidebar';
import { Industry, ServiceShort } from '../../types';
import { FaCircle } from 'react-icons/fa6';
import SidebarAr from './SidebarAr';

type Props = {
    industry: Industry,
    services: ServiceShort[]
};

const ContentSection: React.FC<Props> = ({ industry, services }) => {
    return (
        <section className="main-page">
            <div className="container">
                <div className="row off-screen off-screen--fade-up justify-content-center">
                    <div className="col-lg-7">
                        <div className="the-content">
                            {industry.industryDetailes.map((detail, index) => (
                                <div key={index}>
                                    <h2>{detail.title_ar}</h2>
                                    {detail.industryDetailesPointAr.map((point, idx) => (
                                        <p className='font-semibold' key={idx}>{point.text}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <div>
                            {industry.industryDetailes2.map((detail, index) => {
                                const accordionId = `accordionFlush-${index}`;
                                const collapseId = `flush-collapse-${index}`;

                                return (
                                    <div
                                        key={index}
                                        className="accordion accordion-flush "
                                        id={accordionId}>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button
                                                    className="accordion-button collapsed"
                                                    type="button"
                                                    data-bs-toggle="collapse"
                                                    data-bs-target={`#${collapseId}`}
                                                    aria-expanded="false"
                                                    aria-controls={collapseId}>
                                                    <h4 className="accordion__title fw-semibold text-primary-100">
                                                        {detail.title_ar}
                                                    </h4>
                                                </button>
                                            </h2>
                                            <div
                                                id={collapseId}
                                                className="accordion-collapse collapse"
                                                data-bs-parent={`#${accordionId}`}>
                                                <div className="accordion-body">
                                                    <ul className="list-unstyled">
                                                        {detail.industryDetailesPointAr2.map((point, idx) => (
                                                            <li className={`itemCheckTage mt-2 d-flex`} key={idx}>
                                                                <p className="text-primary-100">
                                                                    <FaCircle className="mt-2" size={8} />
                                                                </p>
                                                                <span className="me-2 ms-2">{point.text}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <SidebarAr industry={industry} services={services} />
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
