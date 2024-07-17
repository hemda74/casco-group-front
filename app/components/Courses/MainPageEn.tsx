import React, { useState } from 'react';
import Link from 'next/link';
import { Category, CourseShort, CourseType } from '../../types';
import Types from './Types';
import Filter from './filter'; // Correct import for Filter component
import { useQuery } from 'react-query';
import { fetchCourses } from '../../lib/fetchCourses';

type Props = {
  courses: CourseShort[]; // Ensure this matches what you expect to receive
  cat: Category[];
  types: CourseType[];
  onCategorySelect: (category: string) => void;
  onTypeSelect: (type: string) => void;
};

const MainPageEn: React.FC<Props> = ({ courses, cat, types, onCategorySelect, onTypeSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { isLoading } = useQuery<CourseShort[]>('courses', fetchCourses);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Function to handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
  };

  // Filter courses based on selected category
  const filteredCourses = selectedCategory
    ? courses.filter(course => course.categoryId === selectedCategory)
    : courses;

  return (
    <>
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4 grid grid-cols-1 | lg:grid-cols-12 lg:mb-6">
        <div className="flex flex-wrap items-center col-span-9">
          <div className="p-4 | lg:p-12">
            <h1 className="text-4xl text-gray-700 font-normal mb-1 | lg:mb-2">
              Courses | CASCO Learning
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 | lg:grid-cols-12 lg:gap-12">
        <div
          id="filters-container"
          className="filters hidden fixed w-full h-screen overflow-y-auto top-0 left-0 bg-white px-4 pb-32 z-40 | lg:static lg:h-auto lg:block lg:col-span-3 lg:p-0 lg:z-0 | xl:col-span-2"
        >
          <Filter
            data={cat} // Assuming cat is your categories array
            name="Categories"
            valueKey="id"
            onSelect={handleCategorySelect}
          />
          <Types types={types} onTypeSelect={onTypeSelect} />
        </div>

        <div className="lg:col-span-9 | xl:col-span-10">
          <div className="w-full grid gap-2 mb-2 | lg:mb-4 grid-cols-2">
            <span className="flex items-center justify-center col-span-2 text-center | lg:col-span-1 lg:justify-start lg:text-left">
              <span className="text-sm font-bold">
                Showing {filteredCourses.length} courses {/* Update to use filteredCourses */}
              </span>
            </span>
          </div>
          <div className="courses">
            {filteredCourses.map((course) => (
              <div className="course" key={course.id}>
                <div
                  title={course.c_title} // Removed unnecessary `${}`
                  className="content"
                >
                  <div className="image">
                    <Link
                      href={`/courses/${course.id}`}
                      className="block w-full text-primary text-xs relative"
                    >
                      <picture>
                        <img
                          src={course.imageUrl} // Removed unnecessary `${}`
                          alt={`${course.c_title} Image`}
                          className="block w-full animate lazyloaded"
                        />
                      </picture>
                    </Link>
                  </div>
                  <div className="text">
                    <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                      <Link
                        href={`/courses/${course.id}`}
                        className="inline-block"
                      >
                        <h2 className="title text-primary-100">
                          {course.c_title}
                        </h2>
                      </Link>
                    </div>
                    <p className="description | shave">{course.c_short_intro_en}</p>
                    <div className="priceBook">
                      <div className="price">
                        {/* Add price logic if needed */}
                      </div>
                      <div className="book">
                        <Link
                          href={`/courses/${course.id}`}
                          className="view-btn"
                        >
                          View Course
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

export default MainPageEn;
