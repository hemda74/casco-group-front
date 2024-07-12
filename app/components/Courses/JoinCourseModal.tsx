import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Course } from '../../types';
import { toast } from 'react-hot-toast';
import Modal from 'bootstrap/js/dist/modal'; // Corrected import
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    course: Course;
};

interface FormData {
    name: string;
    company: string;
    address: string;
    telephone: string;
    email: string;
    whereDidYouHear: string;
    gdpr: boolean;
}

const RegistrationModal: React.FC<Props> = ({ course }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        address: '',
        telephone: '',
        email: '',
        whereDidYouHear: '',
        gdpr: false,
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData((prev) => ({
                ...prev,
                [name]: checked,
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
        toast.success("Request Sent Successfully");

        // Close the modal using Bootstrap's data-bs-target and data-bs-toggle
        const modalElement = document.getElementById('exampleModal');
        if (modalElement) {
            modalElement.classList.remove('show'); // Manually remove 'show' class
            modalElement.setAttribute('aria-hidden', 'true');
            modalElement.setAttribute('style', 'display: none');
            document.body.classList.remove('modal-open');
            const modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
            if (modalBackdrop) {
                document.body.removeChild(modalBackdrop);
            }
        }
    };
    return (
        <div className="w-full xl:w-10/12 mt-6 | lg:mt-8">
            <div className="w-full">
                <div
                    className="modal fade contact w-screen fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8"
                    id="exampleModal"
                    dir="rtl"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="">
                            <div className="modal-content w-full h-screen relative m-auto z-50 | lg:p-8 lg:h-auto">
                                <div className="relative bg-white p-8 pb-32 lg:p-12 lg:max-w-content min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg">
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
                                                    لقد اخترت :
                                                </h5>
                                                <span className="block mt-2">
                                                    {course.c_title_ar}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-span-10 xl:col-span-6" dir="rtl">
                                            <form
                                                dir="rtl"
                                                className="grid grid-cols-1 gap-8 | xl:grid-cols-2 lg:gap-4"
                                                onSubmit={handleSubmit}
                                            >
                                                <div>
                                                    <label className="text-end">
                                                        الاسم:
                                                    </label>
                                                    <input
                                                        id=""
                                                        name="name"
                                                        type="text"
                                                        placeholder="Your Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="company-input" className="">
                                                        اسم الشركة :
                                                    </label>
                                                    <input
                                                        id="company-input"
                                                        name="company"
                                                        type="text"
                                                        placeholder="Your company (اختياري)"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                    />
                                                </div>
                                                <div className="xl:col-span-2">
                                                    <label htmlFor="address-input" className="">
                                                        العنوان:
                                                    </label>
                                                    <input
                                                        id="address-input"
                                                        name="address"
                                                        type="text"
                                                        placeholder="Your address"
                                                        value={formData.address}
                                                        onChange={handleChange}
                                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="tel-input" className="">
                                                        الهاتف:
                                                    </label>
                                                    <input
                                                        id="tel-input"
                                                        name="telephone"
                                                        type="text"
                                                        placeholder="Your telephone"
                                                        value={formData.telephone}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email-input" className="">
                                                        الايميل:
                                                    </label>
                                                    <input
                                                        id="email-input"
                                                        name="email"
                                                        type="text"
                                                        placeholder="Your email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                    />
                                                </div>
                                                <div className="xl:col-span-2">
                                                    <label htmlFor="wheredidyou-input" className="">
                                                        مين اين عرفت كاسكو؟
                                                    </label>
                                                    <select
                                                        id="wheredidyou-input"
                                                        name="whereDidYouHear"
                                                        value={formData.whereDidYouHear}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                    >
                                                        <option value="">
                                                            اختر من التالى
                                                        </option>
                                                        <option value="I have used iqms Learning before">
                                                            لقد استخدمت CASCO Learning من قبل
                                                        </option>
                                                        <option value="Google Search">
                                                            بحث جوجل
                                                        </option>
                                                        <option value="LinkedIn">
                                                            لينكدان
                                                        </option>
                                                        <option value="Facebook">
                                                            فيسبوك
                                                        </option>
                                                        <option value="Twitter">
                                                            تويتر
                                                        </option>
                                                        <option value="Awarding Body">
                                                            الهيئة المانحة
                                                        </option>
                                                        <option value="Colleague or Friend">
                                                            زميل او صديق
                                                        </option>
                                                        <option value="Other">
                                                            اخرى
                                                        </option>
                                                    </select>
                                                </div>
                                                <div className="xl:col-span-2">
                                                    <div className="flex items-center">
                                                        <input
                                                            name="gdpr"
                                                            id="gdpr"
                                                            aria-label="Select all"
                                                            type="checkbox"
                                                            checked={formData.gdpr}
                                                            onChange={handleChange}
                                                            className="h-6 w-6 border-gray-300 text-secondary focus:shadow-outline-blue focus:border-blue-300"
                                                        />
                                                        <label
                                                            htmlFor="documentation_checkbox"
                                                            className="ml-2"
                                                        >
                                                            <span className="block font-medium text-sm leading-5 text-gray-700">
                                                                {` يرجى إطلاعي على آخر المستجدات مع CASCO أخبار التعلم والعروض الخاصة`}
                                                                (اختياري)
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <button
                                                        type="submit"
                                                        className="w-full block p-4 rounded-lg text-white fs-4 text-center myPrimary cursor-pointer text-lg"
                                                    >
                                                        تسجيل الطلب
                                                    </button>
                                                </div>
                                                <div className="xl:col-span-2">
                                                    <span className="block w-full text-xs text-center mt-3">
                                                        {` * عن طريق إرسال هذا النموذج والنقر عليه أرسل أنك تقبل CASCO Learning سياسة الخصوصية`}
                                                    </span>
                                                </div>
                                            </form>
                                        </div>
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

export default RegistrationModal;
