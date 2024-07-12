import Link from 'next/link';
import React from 'react';
import { Course } from '../../types';

type Props = {
    course: Course;
};

const BreadcrumbAr: React.FC<Props> = ({ course }) => {
    return (
        <div className="w-full bg-transparent py-4 | lg:py-6">
            <ul className="list-reset">
                <li className="hidden text-sm | lg:inline-block">
                    <Link href="/" className="lg:hover:underline align-middle inline-block">
                        <span className="inline-block ml-3 align-middle | lg:ml-0">الرئيسية</span>
                    </Link>
                    <span className="px-1 lg:inline-block align-middle">/</span>
                </li>
                <li className="text-sm hidden lg:inline-block align-middle">
                    <Link href="/courses" className="lg:hover:underline align-middle inline-block">
                        <span className="inline-block  align-middle | lg:ml-0">الدورات التدريبية</span>
                    </Link>
                    <span className="me-1 ms-1 lg:inline-block align-middle">/</span>
                </li>
                <li className="text-sm  lg:inline-block align-middle">
                    <Link href={`${course.id}`} className="lg:hover:underline align-middle inline-block">
                        <span className="inline-block align-middle | lg:ml-0 text-black">
                            {course.category.name_ar}
                        </span>
                    </Link>
                    <span className="me-1 ms-1 hidden lg:inline-block align-middle">/</span>
                </li>
                <li className="text-sm hidden lg:inline-block align-middle">
                    <span className="disabled lg:inline-block inline-block align-middle">
                        {course.c_title_ar}
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default BreadcrumbAr;
