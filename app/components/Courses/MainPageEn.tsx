import React from 'react';

const MainPageEn = () => {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4 grid grid-cols-1 | lg:grid-cols-12 lg:mb-6">
        <div className="flex flex-wrap items-center col-span-9">
          <div className="p-4 | lg:p-12">
            <h1 className="text-4xl text-gray-700 font-normal mb-1 | lg:mb-2">
              Courses | iqms Learning |
            </h1>
          </div>
        </div>
      </div>
      <div
        id="filters-container"
        className="filters hidden fixed w-full h-screen overflow-y-auto top-0 left-0 bg-white px-4 pb-32 z-40 | lg:static lg:h-auto lg:block lg:col-span-3 lg:p-0 lg:z-0 | xl:col-span-2">
        <div className="sticky top-0 bg-white py-4 z-10 | lg:hidden">
          <button className="block w-full bg-gray-800 p-4 rounded text-white text-center | hover:bg-black">
            Apply Filters
          </button>
        </div>
        <div className="filter accordion--open list-reset mb-6">
          <div className="w-full relative flex items-center pb-2 mb-4 border-b-2 border-primary-100 cursor-pointer | accordion__header--open">
            <span className="block text-sm">Categories</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
              className="accordion__plus absolute h-3 w-3 right-0 pointer-events-none">
              <path d="M242 118v14c0 3.9-3.1 7-7 7h-96v96c0 3.9-3.1 7-7 7h-14c-3.9 0-7-3.1-7-7v-96H15c-3.9 0-7-3.1-7-7v-14c0-3.9 3.1-7 7-7h96V15c0-3.9 3.1-7 7-7h14c3.9 0 7 3.1 7 7v96h96c3.8 0 7 3.1 7 7z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
              className="accordion__minus absolute h-3 w-3 right-0 pointer-events-none">
              <path d="M242 118v14c0 3.9-3.1 7-7 7H15c-3.9 0-7-3.1-7-7v-14c0-3.9 3.1-7 7-7h220c3.8 0 7 3.1 7 7z"></path>
            </svg>
          </div>
          <ul className="facets hidden">
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/environmental"
                className="block w-full text-sm text-primary truncate">
                Environmental
              </a>
            </li>
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/food-safety"
                className="block w-full text-sm text-primary truncate">
                Food Safety
              </a>
            </li>
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/brcgs"
                className="block w-full text-sm text-primary truncate">
                BRCGS
              </a>
            </li>
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/health-and-safety"
                className="block w-full text-sm text-primary truncate">
                Health And Safety
              </a>
            </li>
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/quality"
                className="block w-full text-sm text-primary truncate">
                Quality
              </a>
            </li>
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/business-improvement"
                className="block w-full text-sm text-primary truncate">
                Business Improvement
              </a>
            </li>
          </ul>
        </div>
        <div className="filter accordion--open list-reset mb-2 | lg:mb-6">
          <div className="w-full relative flex items-center pb-2 mb-4 border-b-2 border-primary-100 cursor-pointer | accordion__header--open">
            <span className="block text-base font-bold | lg:text-sm">
              Level
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
              className="accordion__plus absolute h-3 w-3 right-0 pointer-events-none">
              <path d="M242 118v14c0 3.9-3.1 7-7 7h-96v96c0 3.9-3.1 7-7 7h-14c-3.9 0-7-3.1-7-7v-96H15c-3.9 0-7-3.1-7-7v-14c0-3.9 3.1-7 7-7h96V15c0-3.9 3.1-7 7-7h14c3.9 0 7 3.1 7 7v96h96c3.8 0 7 3.1 7 7z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 250 250"
              className="accordion__minus absolute h-3 w-3 right-0 pointer-events-none">
              <path d="M242 118v14c0 3.9-3.1 7-7 7H15c-3.9 0-7-3.1-7-7v-14c0-3.9 3.1-7 7-7h220c3.8 0 7 3.1 7 7z"></path>
            </svg>
          </div>
          <ul className="facets hidden">
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/foundation"
                className="relative flex items-center w-full truncate text-base | lg:text-xs">
                <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>
                Foundation
                <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                  (12)
                </span>
              </a>
            </li>
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/practitioner"
                className="relative flex items-center w-full truncate text-base | lg:text-xs">
                <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>
                Practitioner
                <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                  (26)
                </span>
              </a>
            </li>
            <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
              <a
                href="https://iqmslearning.co.uk/courses/professional"
                className="relative flex items-center w-full truncate text-base | lg:text-xs">
                <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>
                Professional
                <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                  (10)
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MainPageEn;
