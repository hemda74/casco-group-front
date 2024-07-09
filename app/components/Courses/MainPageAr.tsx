import React from 'react';
import Link from 'next/link';
import { Category, CourseShort, CourseType } from '../../types';
import CategoriesAr from './CategoriesAr';
import TypesAr from './TypesAr';
type Props = {
  courses: CourseShort[];
  cat: Category[];
  types: CourseType[];
  onCategorySelect: (category: string) => void;
  onTypeSelect: (type: string) => void;
};

const MainPageAr: React.FC<Props> = ({ courses, cat, types, onCategorySelect, onTypeSelect }) => {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4 grid grid-cols-1 | lg:grid-cols-12 lg:mb-6">
        <div className="flex flex-wrap items-center col-span-9">
          <div className="p-4 | lg:p-12">
            <h1 className="text-4xl text-gray-700 font-normal mb-1 | lg:mb-2">
              الدورات التدريبية | CASCO |
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 | lg:grid-cols-12 lg:gap-12">
        <div
          id="filters-container"
          className="filters hidden fixed w-full h-screen overflow-y-auto top-0 left-0 bg-white px-4 pb-32 z-40 | lg:static lg:h-auto lg:block lg:col-span-3 lg:p-0 lg:z-0 | xl:col-span-2">

          <CategoriesAr cat={cat} onCategorySelect={onCategorySelect} />
          <TypesAr types={types} onTypeSelect={onTypeSelect} />
        </div>

        <div className="lg:col-span-9 | xl:col-span-10">
          <div className="w-full grid gap-2 mb-2 | lg:mb-4 grid-cols-2">
            <span className="flex items-center justify-center col-span-2 text-center | lg:col-span-1 lg:justify-start lg:text-left">
              <span className="text-sm font-bold">
                عرض {courses.length}دورة
              </span>
            </span>
          </div>
          <div className="courses">
            {courses.map((course) => (
              <div className="course" key={course.id}>
                <div
                  title={`${course.c_title_ar}`}
                  className="content">
                  <div className="image">
                    <Link
                      href={`/courses/${course.id}`}
                      className="block w-full text-primary text-xs relative">
                      <picture>

                        <img
                          src={`${course.imageUrl}`}
                          alt={`${course.c_title_ar} Image`}
                          className="block w-full animate lazyloaded"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="text">
                    <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                      <Link
                        href={`/courses/${course.id}`}
                        className="inline-block">
                        <h2 className="title text-primary-100">
                          {course.c_title_ar}
                        </h2>
                      </Link>
                    </div>
                    <p className="description | shave">{course.c_short_intro_ar}</p>
                    <div className="priceBook">
                      <div className="price">

                      </div>
                      <div className="book">
                        <Link
                          href={`/courses/${course.id}`}
                          className="view-btn">
                          عرض الدورة
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageAr;
