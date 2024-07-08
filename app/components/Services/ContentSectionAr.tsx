import React from 'react';
import SidebarAr from './SidebarAr';
import { Service, ServiceShort } from '../../types';
type Props = {
    service: Service,
    services: ServiceShort[]
};

const ContentSectionAr: React.FC<Props> = ({ service, services }) => {
    return (
        <section className="main-page">
            <div className="container">
                <div className="row off-screen off-screen--fade-up justify-content-center">
                    <div className="col-lg-7">
                        <div className="the-content">
                            {service.serviceDescAr.map((detail, index) => (
                                <div key={index}>
                                    <h2>{detail.title_ar}</h2>
                                    <p className='font-semibold'>{detail.desc_1_ar}</p>
                                    <p className='font-semibold'>{detail.desc_2_ar}</p>

                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Sidebar */}
                    <SidebarAr service={service} services={services} />
                </div>
            </div>
        </section>
    );
};

export default ContentSectionAr;
