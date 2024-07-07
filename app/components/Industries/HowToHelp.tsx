import React from 'react'
import { FaCircle } from 'react-icons/fa6';

const HowToHelp = () => {
    return (
        <>
            <div
                className="accordion accordion-flush"
                id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne">
                            <h4 className="accordion__title fw-semibold text-primary-100">
                                Supply chain optimisation
                            </h4>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="list-unstyled">
                                <li className={`itemCheckTage mt-2 d-flex`}>
                                    <p className="text-primary-100">
                                        <FaCircle className="mt-2" size={8} />
                                    </p>
                                    <span className="me-2 ms-2">{`Structuration of technological roadmaps and improving cooperative research and development program management`}</span>
                                </li>

                                <li className={`itemCheckTage mt-2 mb-0 d-flex`}>
                                    <p className="text-primary-100">
                                        <FaCircle className="mt-2" size={8} />
                                    </p>
                                    <span className="me-2 ms-2">{`Design-to-value on programmes between partners`}</span>
                                </li>
                                <li className={`itemCheckTage mt-2 d-flex`}>
                                    <p className="text-primary-100">
                                        <FaCircle className="mt-2" size={8} />
                                    </p>
                                    <span className="me-2 ms-2">{`Supply chain digitalisation and collaboration with suppliers along the entire product life cycle`}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo">
                            <h4 className="accordion__title fw-semibold text-primary-100">
                                Technology, design and collaboration
                            </h4>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body js-accordion-target">
                            <ul className="list-unstyled">
                                <li className={`itemCheckTage mt-2 d-flex`}>
                                    <p className="text-primary-100">
                                        <FaCircle className="mt-2" size={8} />
                                    </p>
                                    <span className="me-2 ms-2">
                                        {`Definition of plants and evolution of the
                            operational organisation to anticipate or face
                            business model issues, growth, PMI, and
                            harmonisation of functioning methods`}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            <h4 className="accordion__title fw-semibold text-primary-100">
                                Supply chain optimisation
                            </h4>
                        </button>
                    </h2>
                    <div
                        id="flush-collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className="list-unstyled">
                                <li className={`itemCheckTage mt-2 d-flex`}>
                                    <p className="text-primary-100">
                                        <FaCircle className="mt-2" size={8} />
                                    </p>
                                    <span className="me-2 ms-2">{`Structuration of technological roadmaps and improving cooperative research and development program management`}</span>
                                </li>

                                <li className={`itemCheckTage mt-2 mb-0 d-flex`}>
                                    <p className="text-primary-100">
                                        <FaCircle className="mt-2" size={8} />
                                    </p>
                                    <span className="me-2 ms-2">{`Design-to-value on programmes between partners`}</span>
                                </li>
                                <li className={`itemCheckTage mt-2 d-flex`}>
                                    <p className="text-primary-100">
                                        <FaCircle className="mt-2" size={8} />
                                    </p>
                                    <span className="me-2 ms-2">{`Supply chain digitalisation and collaboration with suppliers along the entire product life cycle`}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HowToHelp
