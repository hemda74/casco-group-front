import React from 'react';
import Sidebar from './Sidebar';
import { Service, ServiceShort } from '../../types';
type Props = {
    service: Service,
    services: ServiceShort[]
};

const ContentSection: React.FC<Props> = ({ service, services }) => {
    return (
        <section className="main-page">
            <div className="container">
                <div className="row off-screen off-screen--fade-up justify-content-center">
                    <div className="col-lg-7">
                        <div className="the-content">
                            {service.serviceDesc.map((detail, index) => (
                                <div key={index}>
                                    <h2>{detail.title}</h2>
                                    <p className='font-semibold'>{detail.desc_1}</p>
                                    <p className='font-semibold'>{detail.desc_2}</p>

                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Sidebar */}
                    <Sidebar service={service} services={services} />
                </div>
            </div>
        </section>
    );
};

export default ContentSection;
