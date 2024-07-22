import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Course } from '../../types';
import { toast } from 'react-hot-toast';

type Props = {
    course: Course;
};

interface FormData {
    name: string;
    company: string;
    address: string;
    telephone: string;
    email: string;
    gdpr: boolean;
}

const RegistrationModalEn: React.FC<Props> = ({ course }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        company: '',
        address: '',
        telephone: '',
        email: '',
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const loadingToastId = toast.loading('جاري التسجيل...');

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ course, formData }),
            });

            if (response.ok) {
                toast.success('تم ارسال الطلب بنجاح', { id: loadingToastId });
                // Close the modal
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
            } else {
                toast.error('خطأ في التسجيل', { id: loadingToastId });
            }
        } catch (error) {
            console.error(error);
            toast.error('خطأ في التسجيل', { id: loadingToastId });
        }
    };

    return (
        <div className="w-full xl:w-10/12 mt-6 | lg:mt-8">
            <div className="w-full">
                <div
                    className="modal fade contact w-screen fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8"
                    id="exampleModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="" dir='rtl'>
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
                                                    لقد اخترت
                                                </h5>
                                                <span className="block mt-2">
                                                    {course.c_title_ar}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-span-10 xl:col-span-6">
                                            <form
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
                                                        اسم الشركة:
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
                                                        رقم الهاتف:
                                                    </label>
                                                    <input
                                                        id="tel-input"
                                                        name="telephone"
                                                        type="text"
                                                        placeholder="Telephone"
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
                                                        type="email"
                                                        placeholder="Your email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                                    />
                                                </div>

                                                <div className="xl:col-span-2">
                                                    <label className="inline-flex items-center mt-3">
                                                        <input
                                                            type="checkbox"
                                                            name="gdpr"
                                                            checked={formData.gdpr}
                                                            onChange={handleChange}
                                                            className="form-checkbox h-10  w-10 text-primary-100"
                                                        />
                                                        <span className="ml-2 text-gray-700">
                                                            اريد ع اخر الاخبار والفاعليات في كاسكو.
                                                        </span>
                                                    </label>
                                                </div>
                                                <div className="xl:col-span-2">
                                                    <button
                                                        type="submit"
                                                        className="w-50 bg-primary-100 text-white myPrimary rounded py-3 px-4"
                                                    >
                                                        تسجيل
                                                    </button>
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

export default RegistrationModalEn;
