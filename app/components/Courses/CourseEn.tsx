import React from 'react';
import BreadcrumbAr from './BreadcrumbAr';
import CourseDescriptionEn from './CourseDescriptionEn';
import CourseSidebar from './CourseSidebarEn';
import { CourseShort, Course } from '../../types';
type Props = {
  course: Course;
  courses: CourseShort[];
};
const CourseEn: React.FC<Props> = ({ course, courses }) => {
  return (
    <div className="max-w-content mx-auto px-4 | lg:px-12">
      <BreadcrumbAr course={course} />
      <div className="max-w-content | lg:px-12 lg:pb-8">
        <div className="pb-4 | lg:pb-12 ">
          <div className="w-full grid grid-cols-1 gap-4 | md:grid-cols-12 md:gap-8 lg:gap-16">
            <div className="md:col-span-6 | lg:col-span-7">
              <CourseDescriptionEn course={course} />
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

export default CourseEn;
