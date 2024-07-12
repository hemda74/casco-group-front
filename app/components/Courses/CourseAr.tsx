import React from 'react';
import BreadcrumbAr from './BreadcrumbAr';
import CourseDescriptionAr from './CourseDescriptionAr';
import CourseSidebar from './CourseSidebar';
import { CourseShort, Course } from '../../types';

type Props = {
    course: Course;
    courses: CourseShort[];
};

const CourseAr: React.FC<Props> = ({ course, courses }) => {
    return (
        <div className="max-w-content mx-auto px-4 | lg:px-12" dir="rtl">
            <BreadcrumbAr course={course} />
            <div className="max-w-content | lg:px-12 lg:pb-8">
                <div className="pb-4 | lg:pb-12 ">
                    <div className="w-full grid grid-cols-1 gap-4 | md:grid-cols-12 md:gap-8 lg:gap-16">
                        <div className="md:col-span-6 | lg:col-span-7">
                            <CourseDescriptionAr course={course} />
                        </div>
                        <div className="md:col-span-6 | lg:col-start-9 lg:col-span-4">
                            <CourseSidebar course={course} courses={courses} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseAr;
