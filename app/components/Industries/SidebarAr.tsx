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
            {industry.expertIndustry.map((ex, index) => (
                <div key={index} className="pad-40 light-grey-background red-1-border-top contact-card2">
                    <div className="row align-items-start">
                        <div className="col-md-12">
                            <h4 className="title title--sm red-1-color">
                                Contact our {industry.name_ar} experts
                            </h4>
                        </div>
                        <div className="col-md-12">
                            <p className="p--large">
                                <strong>{ex.expert_name_ar}</strong>
                            </p>
                            <p>{ex.expert_title_ar} </p>
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
            <div className="sidebar-nav red-4-background color-white">
                <div className="title title--sm title--medium-weight">
                    تصفح خدماتنا
                </div>
                <ul>
                    {services.map((service, index) => (
                        <li className="page_item page-item-42 page_item_has_children" key={index}>
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

export default Sidebar;
