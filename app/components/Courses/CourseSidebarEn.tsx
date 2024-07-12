import React from 'react';
import { Course, CourseShort } from '../../types';
import Link from 'next/link';
import RegistrationModalEn from './JoinCourseModalEn';
type Props = {
    course: Course;
    courses: CourseShort[];
};

const CourseSidebarEn: React.FC<Props> = ({ course, courses }) => {
    return (
        <div>
            <div className="relative w-full bg-gray-200 rounded-lg p-4 | md:text-left | lg:p-8">
                <p className="text-xl text-primary-100 font-bold mb-1 | lg:text-2xl text-start">
                    {course.c_title}
                </p>
                <CoursePrice course={course} />
                <div className="w-full xl:w-10/12 mt-6 | lg:mt-8">
                    <div className="w-full">
                        <div className="text-start">
                            <button
                                type="button"
                                className="btn block p-5 fs-6 rounded-lg mt-2 uppercase font-light tracking-wide text-center bg-gray myPrimary cursor-pointer lg:mt-8"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Join Course                           </button>
                        </div>
                        <RegistrationModalEn course={course} />
                    </div>
                </div>
            </div>
            <CourseDates course={course} />
            <WhyTrainWithUs />
            <div className="relative w-full bg-gray-200 rounded-lg p-4 mt-8 | md:text-left | lg:p-8 text-start">
                <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
                    Other courses you may be interested in
                </h3>
                {courses.map((c) => (
                    <Link
                        href={`/courses/${c.id}`}
                        key={c.id}
                        className="block">
                        <span className="mr-2">›</span>
                        <span className="underline">{c.c_title}</span>
                    </Link>
                ))}

            </div>
        </div>
    );
};

const CoursePrice: React.FC<{ course: Course }> = ({ course }) => (
    <div className="text-xl | lg:text-2xl text-start">
        <div className="font-bold text-left  mb-2">Course Price</div>
        <PriceItem country="eg" price={course.price_egp} currency="EGP" />
        <PriceItem country="sa" price={course.price_ksa} currency="SAR" />
        <PriceItem country="ae" price={course.price_uae} currency="AED" />
        <PriceItem country="usa" price={course.price_usd} currency="USD" />
    </div>
);

const PriceItem: React.FC<{ country: string; price: number; currency: string }> = ({ country, price, currency }) => (
    <div className='d-flex justify-content-start mt-2'>
        <img src={`/${country}.png`} className='price-img me-3' width={40} />
        <span className='me-2 text-bold'>{price}{currency}</span>
    </div>
);

const CourseDates: React.FC<{ course: Course }> = ({ course }) => (
    <div className="relative w-full border border-gray-400 rounded-lg mt-8 p-4 | md:text-left | lg:p-8 text-start">
        <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
            Dates and Venues
        </h3>
        <div className="flex items-start text-left mt-4">
            <div className=" text-sm text-left text-gray-800">
                <ul className='pl-1'>
                    {course.c_date_en.map((i) => (

                        <li key={i.id}>
                            <p className='text-start'>{i.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);
const WhyTrainWithUs: React.FC = () => (
    <div className="text-start  relative w-full border border-gray-400 rounded-lg mt-8 p-4 | md:text-left | lg:p-8 ">
        <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
            Why train with CASCO
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
                Accelerated Learning techniques
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
                Flexible training options: classroom, in-house, and online
            </div>
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
                Learn from top auditing and quality practitioners
            </div>
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
                Internationally accredited courses
            </div>
        </div>
    </div>
);

export default CourseSidebarEn;
