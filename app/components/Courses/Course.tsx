import React from 'react';

const Course = () => {
  return (
    <>
      <div className="max-w-content mx-auto px-4 | lg:px-12">
        <div className="w-full bg-transparent py-4 | lg:py-6">
          <ul className="list-reset">
            <li className="hidden text-sm | lg:inline-block">
              <a
                href="/"
                className="lg:hover:underline align-middle inline-block">
                <svg
                  className="h-3 w-3 inline-block lg:hidden align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250 250">
                  <path
                    fill="#000000"
                    d="M188.8 10.3c1.1 1.1 1.6 2.5 1.6 4.3s-.5 3.5-1.6 4.9L82.7 125l106 105.5c1.1 1.5 1.6 3.1 1.6 4.9s-.5 3.2-1.6 4.3l-4.3 4.3c-1.1 1.1-2.5 1.6-4.3 1.6s-3.2-.5-4.3-1.6L61.2 129.3c-1.1-1.1-1.6-2.5-1.6-4.3s.5-3.2 1.6-4.3L175.9 6c1.1-1.1 2.5-1.6 4.3-1.6s3.2.5 4.3 1.6l4.3 4.3z"></path>
                </svg>
                <span className="inline-block ml-2 align-middle | lg:ml-0">
                  Home
                </span>
              </a>
              <span className="px-2 lg:inline-block align-middle">/</span>
            </li>
            <li className="text-sm hidden lg:inline-block align-middle">
              <a
                href="/courses"
                className="lg:hover:underline align-middle inline-block">
                <svg
                  className="h-3 w-3 inline-block lg:hidden align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250 250">
                  <path
                    fill="#000000"
                    d="M188.8 10.3c1.1 1.1 1.6 2.5 1.6 4.3s-.5 3.5-1.6 4.9L82.7 125l106 105.5c1.1 1.5 1.6 3.1 1.6 4.9s-.5 3.2-1.6 4.3l-4.3 4.3c-1.1 1.1-2.5 1.6-4.3 1.6s-3.2-.5-4.3-1.6L61.2 129.3c-1.1-1.1-1.6-2.5-1.6-4.3s.5-3.2 1.6-4.3L175.9 6c1.1-1.1 2.5-1.6 4.3-1.6s3.2.5 4.3 1.6l4.3 4.3z"></path>
                </svg>
                <span className="inline-block ml-2 align-middle | lg:ml-0">
                  Courses
                </span>
              </a>
              <span className="px-2 lg:inline-block align-middle">/</span>
            </li>
            <li className="text-sm lg:inline-block align-middle">
              <a
                href="/courses/quality"
                className="lg:hover:underline align-middle inline-block">
                <svg
                  className="h-3 w-3 inline-block lg:hidden align-middle"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 250 250">
                  <path
                    fill="#000000"
                    d="M188.8 10.3c1.1 1.1 1.6 2.5 1.6 4.3s-.5 3.5-1.6 4.9L82.7 125l106 105.5c1.1 1.5 1.6 3.1 1.6 4.9s-.5 3.2-1.6 4.3l-4.3 4.3c-1.1 1.1-2.5 1.6-4.3 1.6s-3.2-.5-4.3-1.6L61.2 129.3c-1.1-1.1-1.6-2.5-1.6-4.3s.5-3.2 1.6-4.3L175.9 6c1.1-1.1 2.5-1.6 4.3-1.6s3.2.5 4.3 1.6l4.3 4.3z"></path>
                </svg>
                <span className="inline-block ml-2 align-middle | lg:ml-0 text-black">
                  Quality
                </span>
              </a>
              <span className="px-2 hidden lg:inline-block align-middle">
                /
              </span>
            </li>
            <li className="text-sm hidden lg:inline-block align-middle">
              <span className="disabled inline-block align-middle">
                ISO 9001:2015 Lead Auditor
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Course;
