
import React from 'react';
import Link from 'next/link';
import { Service } from '../../types';

type Props = {
    service: Service,
};

const Banner: React.FC<Props> = ({ service }) => {
    return (
        <div className="banner banner--no-image banner--ar banner--full-overlay">
            {/* Banner content */}
            <div className="banner__background"></div>
            <div className="banner__center text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-11">
                            <h1 className="title title--xl title--bold off-screen off-screen--rotate-up">
                                {service.name}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb */}
            <div className="banner__bottom text-center banner__bottom--lower m-auto">
                <div className="m-auto text-white">
                    <span property="itemListElement" typeof="ListItem">
                        <Link href="/" className="home m-auto text-white">
                            <span className="me-2 ms-2 text-white">Home</span>
                        </Link>
                        <meta property="position" content="1" />
                    </span>
                    {' › '}
                    <span property="itemListElement" typeof="ListItem">
                        <Link href="/services/" className="post post-page">
                            <span className="me-2 ms-2 text-white">services</span>
                        </Link>
                        <meta property="position" content="2" />
                    </span>
                    {' › '}
                    <span className="post post-page current-item me-2 ms-2 text-white cursor-pointer">
                        {service.name}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Banner;
