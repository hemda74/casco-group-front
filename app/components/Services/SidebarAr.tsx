import React from 'react';
import Link from 'next/link';
import { Service, ServiceShort } from '../../types';

type Props = {
    service: Service,
    services: ServiceShort[]
};

const SidebarAr: React.FC<Props> = ({ service, services }) => {
    return (
        <div className="col-lg-4 offset-lg-1 sidebar">
            {service.expertService.map((ex, index) => (
                <div key={index} className="pad-40 light-grey-background red-1-border-top contact-card2">
                    <div className="row align-items-start">
                        <div className="col-md-12">
                            <h4 className="title title--sm red-1-color">
                                Contact our {service.name_ar} experts
                            </h4>
                        </div>
                        <div className="col-md-12">
                            <p className="p--large">
                                <strong>{ex.expert_name_ar}</strong>
                            </p>
                            <p>{ex.expert_title} </p>
                        </div>
                        <div className="col-md-12 contact-details">
                            <p className="no-wrap">
                                <span className="data-label red-1-color">الهاتف</span>
                            </p>
                            <div>{ex.expert_phone}</div>
                            <p className="no-wrap">
                                <span className="data-label red-1-color">الايميل</span>
                                <a href={`mailto:${ex.expert_mail}`}>
                                    {ex.expert_mail}
                                </a>
                            </p>
                        </div>
                        <div className="contact-card__profile2">
                            <picture className="circle-img circle-img--small">
                                <img src={`${ex.imageUrl}`} alt={`${ex.expert_name_ar}`} />
                            </picture>
                        </div>
                    </div>
                </div>
            ))}
            <div className="sidebar-nav black-background red-4-border-top">
                <div className="title title--sm title--medium-weight">
                    تعرف على المزيد من خدمتنا  {service.name_ar}                </div>
                <ul>
                    {services.map((service, index) => (
                        <li className="" key={index}>
                            <Link href={`/services/${service.id}`}>
                                {service.name_ar}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SidebarAr;
