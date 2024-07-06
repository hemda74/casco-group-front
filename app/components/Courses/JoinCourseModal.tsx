import React from 'react';

const JoinCourseModal: React.FC = () => {
    return (
        <div className="w-full">
            <div
                className="modal fade contact w-screen fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto lg:h-screen lg:px-8"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="">
                        <div className="modal-content w-full h-screen relative m-auto z-50 lg:p-8 lg:h-auto">
                            <div className="relative bg-white p-8 pb-32 lg:p-12 lg:max-w-content min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg ">
                                <div className="absolute top-0 right-0 m-4 mb-5 cursor-pointer">
                                    <button
                                        type="button"
                                        className="btn-close m-end"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="grid grid-cols-10 gap-8">
                                    <div className="block col-span-10 xl:col-span-4">
                                        <div className="pl-8 border-l-2 border-primary-100">
                                            <h5 className="text-xl text-primary-100 font-bold">
                                                You have selected:
                                            </h5>
                                            <span className="block mt-2">
                                                <strong>Course:</strong> ISO 9001:2015 Lead Auditor
                                            </span>
                                            <span className="block mt-2">
                                                <strong>Number of Candidates:</strong> 1
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-span-10 xl:col-span-6">
                                        <form
                                            action="https://iqmslearning.co.uk/form/enquire"
                                            method="post"
                                            className="grid grid-cols-1 gap-8 xl:grid-cols-2 lg:gap-4"
                                        >
                                            <input
                                                type="hidden"
                                                name="_token"
                                                value="ORYOVSqLIOqOb3enWTQC4Tqz423G1hV2fNqK61Qu"
                                            />
                                            <input
                                                type="hidden"
                                                name="Course"
                                                value="ISO 9001:2015 Lead Auditor"
                                            />
                                            <input
                                                type="hidden"
                                                name="Candidates"
                                                value="1"
                                            />
                                            <div>
                                                <label
                                                    htmlFor="name-input"
                                                    className="hidden lg:block text-sm mb-2 font-medium"
                                                >
                                                    Name:
                                                </label>
                                                <input
                                                    id="name-input"
                                                    name="name"
                                                    type="text"
                                                    placeholder="John Doe"
                                                    value=""
                                                    required
                                                    className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="company-input"
                                                    className="hidden lg:block text-sm mb-2 font-medium"
                                                >
                                                    Company Name:
                                                </label>
                                                <input
                                                    id="company-input"
                                                    name="company"
                                                    type="text"
                                                    placeholder="Your company (optional)"
                                                    value=""
                                                    className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                />
                                            </div>
                                            <div className="xl:col-span-2">
                                                <label
                                                    htmlFor="address-input"
                                                    className="hidden lg:block text-sm mb-2 font-medium"
                                                >
                                                    Address:
                                                </label>
                                                <input
                                                    id="address-input"
                                                    name="address"
                                                    type="text"
                                                    placeholder="Your address"
                                                    value=""
                                                    className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="tel-input"
                                                    className="hidden lg:block text-sm mb-2 font-medium"
                                                >
                                                    Tel Number:
                                                </label>
                                                <input
                                                    id="tel-input"
                                                    name="telephone"
                                                    type="text"
                                                    placeholder="Your telephone"
                                                    value=""
                                                    required
                                                    className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="email-input"
                                                    className="hidden lg:block text-sm mb-2 font-medium"
                                                >
                                                    Email Address:
                                                </label>
                                                <input
                                                    id="email-input"
                                                    name="email"
                                                    type="text"
                                                    placeholder="Your email"
                                                    value=""
                                                    required
                                                    className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                />
                                            </div>
                                            <div className="xl:col-span-2">
                                                <label
                                                    htmlFor="enquiry-input"
                                                    className="hidden lg:block text-sm mb-2 font-medium"
                                                >
                                                    Enquiry:
                                                </label>
                                                <input
                                                    id="enquiry-input"
                                                    name="enquiry"
                                                    type="text"
                                                    placeholder="Your enquiry"
                                                    value=""
                                                    required
                                                    className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                />
                                            </div>
                                            <div className="xl:col-span-2">
                                                <label
                                                    htmlFor="wheredidyou-input"
                                                    className="hidden lg:block text-sm mb-2 font-medium"
                                                >
                                                    Where did you hear about us?:
                                                </label>
                                                <select
                                                    id="wheredidyou-input"
                                                    name="Where_did_you_hear_about_us"
                                                    required
                                                    className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                >
                                                    <option value="">select an option</option>
                                                    <option value="I have used iqms Learning before">
                                                        I have used CASCO Learning before
                                                    </option>
                                                    <option value="Google Search">Google Search</option>
                                                    <option value="LinkedIn">LinkedIn</option>
                                                    <option value="Facebook">Facebook</option>
                                                    <option value="Twitter">Twitter</option>
                                                    <option value="Awarding Body">Awarding Body</option>
                                                    <option value="Colleague or Friend">
                                                        Colleague or Friend
                                                    </option>
                                                    <option value="Other">Other</option>
                                                </select>
                                            </div>
                                            <div className="xl:col-span-2">
                                                <div className="flex items-center">
                                                    <input
                                                        name="gdpr"
                                                        id="gdpr"
                                                        aria-label="Select all"
                                                        type="checkbox"
                                                        value="Yes"
                                                        className="h-6 w-6 border-gray-300 text-secondary focus:shadow-outline-blue focus:border-blue-300"
                                                    />
                                                    <label
                                                        htmlFor="documentation_checkbox"
                                                        className="ml-2"
                                                    >
                                                        <span className="block font-medium text-sm leading-5 text-gray-700">
                                                            {`Please keep me up to date with CASCO Learning’s news and special offers`}
                                                            (optional)
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <button
                                                    type="submit"
                                                    className="w-full block p-4 rounded-lg text-white fs-4 text-center myPrimary cursor-pointer text-lg"
                                                >
                                                    Submit Request
                                                </button>
                                            </div>
                                            <div className="xl:col-span-2">
                                                <span className="block w-full text-xs text-center mt-3">
                                                    {` *By submitting this form and clicking submit you are accepting CASCO Learning’s privacy policy`}
                                                </span>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fixed h-full w-full top-0 left-0 bg-black opacity-50 z-10"></div>
            </div>
        </div>
    );
};

export default JoinCourseModal;
