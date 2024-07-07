import React from 'react';
import { Industry } from '../../types';

type Props = {
    industry: Industry,
};
const CaseStudyModal: React.FC<Props> = ({ industry }) => {
    return (
        <div
            className="modal fade contact  w-screen fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8 "
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog bg-white">
                <div className="modal-content  relative m-auto z-50 | lg:p-8 lg:h-auto">
                    <div className="relative bg-white  min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg lg:mx-auto">
                        <div className="absolute top-0 right-0 text-lg  cursor-pointer">
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
                                            cold chain logistics
                                        </div>
                                        <h2 className="title title--lg">
                                            WMS recovery and implementation
                                        </h2>
                                    </div>
                                    <div className="col-md-2 col-xs-4 col-sm-6 col-8">
                                        <picture>
                                            <img src="https://www.argonandco.com/wp-content/uploads/2020/11/Swire-grey.png" />
                                        </picture>
                                    </div>
                                    <div className="col-md-10">
                                        <p>
                                            Swire Cold Storage is a leading Australian provider
                                            of cold chain logistics services and supply chain
                                            solutions, offering temperature-controlled
                                            warehousing, refrigerated transport and distribution
                                            services to a broad range of businesses.
                                        </p>
                                        <p>
                                            A previous in-house WMS implementation had not been
                                            completed. The impact of the part implementation was
                                            a deterioration of performance from the warehouse
                                            and cost impacts.
                                        </p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                                <div className="row columns">
                                    <div className="col-md-6">
                                        <ul>
                                            <li>
                                                Identify the key issues driving poor warehouse
                                                performance
                                            </li>
                                            <li>
                                                Work with the DC management team to prioritise and
                                                resolve issues whilst improving business as usual
                                            </li>
                                            <li>
                                                Project manage the re-implementation of the WMS
                                                with the IT systems supplier (in Canada)
                                            </li>
                                            <li>
                                                Change manage the implementation of the system,
                                                improve capability via training, reduce process
                                                blockages and improve performance to a developed
                                                schedule
                                            </li>
                                        </ul>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="col-md-6">
                                        <ul>
                                            <li>
                                                Full process re-write and all SCS employees
                                                trained
                                            </li>
                                            <li>
                                                Increased productivity from warehouse staff and
                                                increased space availability within the warehouse
                                            </li>
                                            <li>
                                                Improved relationship management with the software
                                                provider, allowing for further system enhancements
                                                moving forward
                                            </li>
                                            <li>Delivered a reduced cost base warehouse</li>
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
