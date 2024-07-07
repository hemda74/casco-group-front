import React from 'react';
import Sidebar from './Sidebar';
import { Industry, ServiceShort } from '../../types';
import HowToHelp from './HowToHelp';

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
                                    <h2>{detail.title}</h2>
                                    {detail.industryDetailesPoint.map((point, idx) => (
                                        <p key={idx}>{point.text}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                        <HowToHelp />
                    </div>

                    {/* Sidebar */}
                    <Sidebar industry={industry} services={services}
                    />
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
