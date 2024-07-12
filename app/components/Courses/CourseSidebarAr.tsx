import React from 'react';
import { Course, CourseShort } from '../../types';
import Link from 'next/link';
import RegistrationModalAr from './JoinCourseModalAr';
type Props = {
    course: Course;
    courses: CourseShort[];
};

const CourseSidebarAr: React.FC<Props> = ({ course, courses }) => {
    return (
        <div>
            <div className="relative w-full bg-gray-200 rounded-lg p-4 | md:text-left | lg:p-8">
                <p className="text-xl text-primary-100 font-bold mb-1 | lg:text-2xl text-end">
                    {course.c_title_ar}
                </p>
                <CoursePrice course={course} />
                <div className="w-full xl:w-10/12 mt-6 | lg:mt-8">
                    <div className="w-full">
                        <div className="text-end">
                            <button
                                type="button"
                                className="btn block p-5 fs-6 rounded-lg mt-2 uppercase font-light tracking-wide text-center bg-gray myPrimary cursor-pointer lg:mt-8"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                التسجيل في الدورة
                            </button>
                        </div>
                        <RegistrationModalAr course={course} />
                    </div>
                </div>
            </div>
            <CourseDates course={course} />
            <WhyTrainWithUs />
            <div className="relative w-full bg-gray-200 rounded-lg p-4 mt-8 | md:text-left | lg:p-8 text-end">
                <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
                    دورات أخرى قد تكون مهتم بها                  </h3>
                {courses.map((c) => (
                    <Link
                        href={`/courses/${c.id}`}
                        key={c.id}
                        className="block">
                        <span className="ml-2">›</span>
                        <span className="underline">{c.c_title_ar}</span>
                    </Link>
                ))}

            </div>
        </div>
    );
};

const CoursePrice: React.FC<{ course: Course }> = ({ course }) => (
    <div className="text-xl | lg:text-2xl text-end">
        <div className="text-lg font-bold mb-2">سعر الدورة</div>
        <PriceItem country="eg" price={course.price_egp} currency="EGP" />
        <PriceItem country="sa" price={course.price_ksa} currency="SAR" />
        <PriceItem country="ae" price={course.price_uae} currency="AED" />
        <PriceItem country="usa" price={course.price_usd} currency="USD" />
    </div>
);

const PriceItem: React.FC<{ country: string; price: number; currency: string }> = ({ country, price, currency }) => (
    <div className='d-flex justify-content-start mt-2'>
        <img src={`/${country}.png`} className='price-img' width={40} />
        <span className='me-2 text-bold'>{price}{currency}</span>
    </div>
);

const CourseDates: React.FC<{ course: Course }> = ({ course }) => (
    <div className="relative w-full border border-gray-400 rounded-lg mt-8 p-4 | md:text-left | lg:p-8 text-end">
        <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
            التواريخ والأماكن
        </h3>
        <div className="flex items-center mt-4">
            <div className="flex-1 text-sm me-2 text-gray-800">
                <ul>
                    {course.c_date_ar.map((i) => (

                        <li key={i.id}>
                            <p className='me-1'>{i.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

const WhyTrainWithUs: React.FC = () => (
    <div className="text-end  relative w-full border border-gray-400 rounded-lg mt-8 p-4 | md:text-left | lg:p-8 ">
        <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
            لماذا التدرب مع كاسكو
        </h3>
        <div className="flex items-center mt-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-icon="check-circle"
                data-prefix="fas"
                viewBox="0 0 512 512"
                className="h-6 w-6 text-gray-600 mr-2">
                <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <div className="flex-1 text-sm me-2 text-gray-800">
                تسريع اليه التعلم
            </div>
        </div>
        <div className="flex items-center mt-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-icon="check-circle"
                data-prefix="fas"
                viewBox="0 0 512 512"
                className="h-6 w-6  mr-2">
                <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <div className="flex-1 text-sm me-2 text-gray-800">
                خيارات تدريب مرنة: الفصول الدراسية، وداخل الشركة، وعبر الإنترنت                    </div>
        </div>
        <div className="flex items-center mt-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-icon="check-circle"
                data-prefix="fas"
                viewBox="0 0 512 512"
                className="h-6 w-6 text-gray-600 mr-2">
                <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <div className="flex-1 text-sm me-2 text-gray-800">
                تعلم من كبار ممارسي التدقيق والجودة                    </div>
        </div>
        <div className="flex items-center mt-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                data-icon="check-circle"
                data-prefix="fas"
                viewBox="0 0 512 512"
                className="h-6 w-6 text-gray-600 mr-2">
                <path
                    fill="currentColor"
                    d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            <div className="flex-1 text-sm me-2 text-gray-800">
                الدورات المعتمدة دوليا
            </div>
        </div>
    </div>
);

export default CourseSidebarAr;
