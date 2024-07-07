import React from 'react';
import Link from 'next/link';
import { Industry, ServiceShort } from '../../types';
type Props = {
    industry: Industry,
    services: ServiceShort[]
};
const Sidebar: React.FC<Props> = ({ industry, services }) => {
    return (
        <div className="col-lg-4 offset-lg-1 sidebar">
            <div className="pad-40 light-grey-background red-1-border-top contact-card">
                {industry.expertIndustry.map((ex, index) => (
                    <div className="row align-items-start" key={index}>
                        <div className="col-md-12">
                            <h4 className="title title--sm red-1-color">
                                Contact our aerospace and defences experts
                            </h4>
                        </div>
                        <div className="col-md-12">
                            <p className="p--large">
                                <strong>{ex.expert_name}</strong>
                            </p>
                            <p>{ex.expert_title} </p>
                        </div>
                        <div className="col-md-12 contact-details">
                            <p className="no-wrap">
                                <span className="data-label red-1-color">Phone</span>
                            </p>
                            <div>{ex.expert_phone}</div>
                            <p className="no-wrap">
                                <span className="data-label red-1-color">Email</span>
                                <a href={`mailto: ${ex.expert_mail}`}>
                                    {ex.expert_mail}
                                </a>
                            </p>
                        </div>
                        <div className="contact-card__profile">
                            <picture className="circle-img circle-img--small">
                                <img src={`${ex.imageUrl}`} />
                            </picture>
                        </div>
                    </div>
                ))}
            </div>

            <div className="sidebar-nav red-4-background color-white">
                <div className="title title--sm title--medium-weight">
                    Explore our services
                </div>
                <ul>
                    {services.map((service, index) => (
                        <li className="page_item page-item-42 page_item_has_children" key={index}>
                            <Link href={`/services/${service.id}`}>
                                {service.name}
                            </Link>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
