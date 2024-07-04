// components/CourseEn.tsx
import Link from 'next/link';
import React from 'react';
import Breadcrumb from './Breadcrumb';
import CourseDescription from './CourseDescription';

const CourseEn: React.FC = () => {
  const breadcrumbItems = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/courses/quality', label: 'Quality' },
    { label: 'ISO 9001:2015 Lead Auditor' },
  ];

  const courseSections = [
    {
      title: 'Introduction',
      content: (
        <p>
          This intensive ISO 9001 lead auditor course is a challenging and highly interactive CQI and IRCA certified training program for those who require an in-depth understanding of the range of auditing techniques and protocols associated with the Lead Auditor role.
        </p>
      ),
    },
    {
      title: 'Duration',
      content: (
        <p>
          5 Days, 08.30 – 17.30 (days 1-3), 08.30 – 17.45 (day 4), 08.30 – 16.15 (day 5)
        </p>
      ),
    },
    {
      title: 'Who should attend?',
      content: (
        <>
          <p>Attendees are expected to have knowledge of the following:</p>
          <ul className="list-disc ">
            <li>Quality management principles and concepts</li>
            <li>The Plan, Do, Check, Act (PDCA) cycle</li>
            <li>The relationship between quality management and customer satisfaction</li>
            <li>Quality management terms and definitions and the 7 Quality Management Principles</li>
            <li>The process approach used in quality management</li>
            <li>Process Based Quality Management Systems</li>
            <li>The structure, content and requirements of ISO 9001</li>
          </ul>
          <p>This knowledge can be gained through:</p>
          <ul className="list-disc ">
            <li>Previous experience and existing knowledge</li>
            <li>Attending a CQI and IRCA certified training ISO 9001 Foundation course or equivalent</li>
            <li>Reading or self-study</li>
          </ul>
          <p>
            If you would like to attend our CQI and IRCA certified training registered ISO 9001 Foundation course at a discounted price to help you prepare for this Lead Auditor course, please contact us.
          </p>
        </>
      ),
    },
    {
      title: 'Course objectives',
      content: (
        <>
          <p>
            The course is delivered by experienced tutors who have extensive practical knowledge of auditing and the implementation of ISO 9001. The delivery style includes presentations, workshops, role-plays, and practical exercises.
          </p>
          <ul className="list-disc ">
            <li>Quality management principles and concepts</li>
            <li>The Plan, Do, Check, Act (PDCA) cycle</li>
            <li>The relationship between quality management and customer satisfaction</li>
            <li>Quality management terms and definitions and the 7 Quality Management Principles</li>
            <li>The process approach used in quality management</li>
            <li>Process Based Quality Management Systems</li>
            <li>The structure, content and requirements of ISO 9001</li>
          </ul>
        </>
      )
    },
    {
      title: 'Course content',
      content: (
        <>
          <ul className="list-disc ">
            <li>Quality management principles and concepts</li>
            <li>The Plan, Do, Check, Act (PDCA) cycle</li>
            <li>The relationship between quality management and customer satisfaction</li>
            <li>Quality management terms and definitions and the 7 Quality Management Principles</li>
            <li>The process approach used in quality management</li>
            <li>Process Based Quality Management Systems</li>
            <li>The structure, content and requirements of ISO 9001</li>
          </ul>
        </>
      )
    },

    {
      title: 'Style of Delivery and Course Leaders',
      content: (
        <p>
          The course is delivered by experienced tutors who have extensive practical knowledge of auditing and the implementation of ISO 9001. The delivery style includes presentations, workshops, role-plays, and practical exercises.
        </p>
      ),
    },
    {
      title: 'Certification',
      content: (
        <p>
          On successful completion of the course, including the examination, you will receive a CQI and IRCA Certified ISO 9001:2015 Lead Auditor certificate.
        </p>
      ),
    },
  ];

  return (
    <div className="max-w-content mx-auto px-4 lg:px-12">
      <div className="py-4 lg:py-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="lg:px-12 lg:pb-8">
        <div className="pb-4 lg:pb-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8 lg:gap-16">
            <div className="md:col-span-6 lg:col-span-7">
              <div className="relative">
                <div className=" rounded-lg overflow-hidden mb-4 lg:mb-6">
                  <div className="h-64 relative overflow-hidden">
                    <picture>
                      <source
                        media="all"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/d733a9f582b80626f42db7cbcbc9a3b358bc22be~800x500/images/blocks/3BSwgf23ko4cYqh9YL7qGmDi3oXUKcn3VUsHOM7C.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/74e6ee9c41134ad75562517cedc40ec0c98041ca~800x500@2x/images/blocks/3BSwgf23ko4cYqh9YL7qGmDi3oXUKcn3VUsHOM7C.jpeg.webp 2x"
                        type="image/webp"
                      />
                      <source
                        media="all"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/d733a9f582b80626f42db7cbcbc9a3b358bc22be~800x500/images/blocks/3BSwgf23ko4cYqh9YL7qGmDi3oXUKcn3VUsHOM7C.jpeg 1x,https://iqmslearning.co.uk/image-factory/74e6ee9c41134ad75562517cedc40ec0c98041ca~800x500@2x/images/blocks/3BSwgf23ko4cYqh9YL7qGmDi3oXUKcn3VUsHOM7C.jpeg 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/d733a9f582b80626f42db7cbcbc9a3b358bc22be~800x500/images/blocks/3BSwgf23ko4cYqh9YL7qGmDi3oXUKcn3VUsHOM7C.jpeg"
                        alt="ISO 9001:2015 Lead Auditor"
                        className="w-full"
                      />
                    </picture>
                  </div>
                  <div className="md:col-span-6 lg:col-span-5">
                    <CourseDescription sections={courseSections} />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 | lg:col-start-9 lg:col-span-4">
              <div className="relative w-full bg-gray-200 rounded-lg p-4 | md:text-left | lg:p-8">
                <h1 className="text-xl font-bold mb-1 | lg:text-2xl">
                  ISO 9001:2015 Lead Auditor
                </h1>
                <div className="w-1/2 blend-multiply py-4">
                  <picture>
                    <source
                      data-srcSet="https://iqmslearning.co.uk/image-factory/aa3ff33a11d9588d4a5abc7441bb302b6a21cc16~175x58.5/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/83edfab644648a1927e570f1e2a85da25c8254ad~175x58.5@2x/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg.webp 2x"
                      type="image/webp"
                      srcSet="https://iqmslearning.co.uk/image-factory/aa3ff33a11d9588d4a5abc7441bb302b6a21cc16~175x58.5/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/83edfab644648a1927e570f1e2a85da25c8254ad~175x58.5@2x/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg.webp 2x"
                    />
                    <img
                      src="https://iqmslearning.co.uk/image-factory/aa3ff33a11d9588d4a5abc7441bb302b6a21cc16~175x58.5/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg"
                      data-src="https://iqmslearning.co.uk/image-factory/aa3ff33a11d9588d4a5abc7441bb302b6a21cc16~175x58.5/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg"
                      data-srcSet="https://iqmslearning.co.uk/image-factory/83edfab644648a1927e570f1e2a85da25c8254ad~175x58.5@2x/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg 2x"
                      alt="CQI-IRCA Certified Courses"
                      className="w-full ls-is-cached lazyloaded"
                      srcSet="https://iqmslearning.co.uk/image-factory/83edfab644648a1927e570f1e2a85da25c8254ad~175x58.5@2x/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg 2x"
                    />
                  </picture>
                  <noscript>
                    <img
                      src="https://iqmslearning.co.uk/image-factory/aa3ff33a11d9588d4a5abc7441bb302b6a21cc16~175x58.5/images/pages/ngDbeBtW4FsL2KrowBKarKHnFIRnDEbCWW2N0b7c.jpeg"
                      alt="CQI-IRCA Certified Courses"
                    />
                  </noscript>
                </div>
                <div className="text-xl text-primary-100 | lg:text-2xl">
                  <div>
                    <span className="font-bold">£1,445.00</span>
                    <span className="ml-2">ex vat</span>
                  </div>
                </div>
                <noscript></noscript>
                <div className="w-full xl:w-10/12 mt-6">
                  <div
                    id="product-attributes"
                    className="grid grid-cols-1 gap-4">
                    <div className="product-attribute">
                      <div className="text-lg font-bold mb-2">
                        Course Date:
                      </div>
                      <div className="w-full relative flex items-center justify-end">
                        <select
                          id="id-course-date-select"
                          aria-label="Select Course Date"
                          className="w-full h-full border border-gray-400 bg-white p-4 pr-12 rounded">
                          <option value="">Select Course Date</option>
                          <option
                            data-title="Course Date: 18th-22nd March 2024 - Sunderland"
                            dante-shedule-id="157491"
                            value="8727">
                            18th-22nd March 2024 - Sunderland
                          </option>
                          <option
                            data-title="Course Date: 13th-17th May 2024 - Virtual"
                            dante-shedule-id="201970"
                            value="8728">
                            13th-17th May 2024 - Virtual
                          </option>
                          <option
                            data-title="Course Date: 20th-24th May 2024 - Virtual"
                            dante-shedule-id="157476"
                            value="8729">
                            20th-24th May 2024 - Virtual
                          </option>
                          <option
                            data-title="Course Date: 1st-5th July 2024 - COVENTRY"
                            dante-shedule-id="157496"
                            value="8730">
                            1st-5th July 2024 - COVENTRY
                          </option>
                          <option
                            data-title="Course Date: 16th-20th September 2024 - Virtual"
                            dante-shedule-id="157481"
                            value="8731">
                            16th-20th September 2024 - Virtual
                          </option>
                          <option
                            data-title="Course Date: 11th-15th November 2024 - Sunderland"
                            dante-shedule-id="157486"
                            value="8732">
                            11th-15th November 2024 - Sunderland
                          </option>
                        </select>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 250 250"
                          className="inline-block absolute h-4 w-4 right-0 mr-4 pointer-events-none">
                          <path d="M241.4 69.7c1.1 1.4 1.6 3 1.6 4.8 0 1.8-.5 3.2-1.6 4.3L129.8 190.9c-1.4 1.1-3 1.6-4.8 1.6s-3.2-.5-4.3-1.6L8.6 78.8C7.5 77.7 7 76.3 7 74.5c0-1.8.5-3.4 1.6-4.8L19.3 59c1.1-1.1 2.5-1.6 4.3-1.6s3.4.5 4.8 1.6l96.6 96.6L221.6 59c1.4-1.1 3-1.6 4.8-1.6s3.2.5 4.3 1.6l10.7 10.7z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full xl:w-10/12 mt-6 | lg:mt-8">
                  <div className="w-full">
                    <div>
                      <button
                        type="button"
                        className="btn block p-5 fs-6 rounded-lg mt-2  uppercase font-light tracking-wide text-center bg-gray myPrimary cursor-pointer  lg:mt-8 "
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Join Course
                      </button>
                    </div>
                    <div
                      className=" modal  fade contact w-screen  fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8"
                      id="exampleModal"
                      tabIndex={-1}
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="">
                          <div className="modal-content w-full h-screen relative m-auto z-50 | lg:p-8 lg:h-auto">
                            <div className="relative bg-white p-8 pb-32 lg:p-12 lg:max-w-content min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg lg:mx-auto">
                              <div className="absolute top-0 right-0 m-4 mb-5 cursor-pointer">
                                {' '}
                                <button
                                  type="button"
                                  className="btn-close m-end"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"></button>
                              </div>

                              <div className="grid grid-cols-10 gap-8">
                                <div className="block col-span-10 xl:col-span-4">
                                  <div className="pl-8 border-l-2 border-primary-100">
                                    <h5 className="text-xl text-primary-100 font-bold">
                                      You have selected:
                                    </h5>
                                    <span className="block mt-2">
                                      <strong>Course:</strong> ISO 9001:2015
                                      Lead Auditor
                                    </span>
                                    <span className="block mt-2">
                                      <strong>Number of Candidates:</strong> 1
                                    </span>
                                  </div>
                                </div>

                                <div className="col-span-10 xl:col-span-6">
                                  <form
                                    action="https://iqmslearning.co.uk/form/enquire"
                                    method="post"
                                    className="grid grid-cols-1 gap-8 | xl:grid-cols-2 lg:gap-4">
                                    <input
                                      type="hidden"
                                      name="_token"
                                      value="ORYOVSqLIOqOb3enWTQC4Tqz423G1hV2fNqK61Qu"
                                    />
                                    <input
                                      type="hidden"
                                      name="Course"
                                      value="ISO 9001:2015 Lead Auditor"
                                    />
                                    <input
                                      type="hidden"
                                      name="Candidates"
                                      value="1"
                                    />
                                    <div>
                                      <label
                                        htmlFor="name-input"
                                        className="hidden lg:block text-sm mb-2 font-medium">
                                        Name:
                                      </label>
                                      <input
                                        id="name-input"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value=""
                                        required
                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="company-input"
                                        className="hidden lg:block text-sm mb-2 font-medium">
                                        Company Name:
                                      </label>
                                      <input
                                        id="company-input"
                                        name="company"
                                        type="text"
                                        placeholder="Your company (optional)"
                                        value=""
                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                      />
                                    </div>
                                    <div className="xl:col-span-2">
                                      <label
                                        htmlFor="address-input"
                                        className="hidden lg:block text-sm mb-2 font-medium">
                                        Address:
                                      </label>
                                      <input
                                        id="address-input"
                                        name="address"
                                        type="text"
                                        placeholder="Your address"
                                        value=""
                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="tel-input"
                                        className="hidden lg:block text-sm mb-2 font-medium">
                                        Tel Number:
                                      </label>
                                      <input
                                        id="tel-input"
                                        name="telephone"
                                        type="text"
                                        placeholder="Your telephone"
                                        value=""
                                        required
                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                      />
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="email-input"
                                        className="hidden lg:block text-sm mb-2 font-medium">
                                        Email Address:
                                      </label>
                                      <input
                                        id="email-input"
                                        name="email"
                                        type="text"
                                        placeholder="Your email"
                                        value=""
                                        required
                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                      />
                                    </div>
                                    <div className="xl:col-span-2">
                                      <label
                                        htmlFor="enquiry-input"
                                        className="hidden lg:block text-sm mb-2 font-medium">
                                        Enquiry:
                                      </label>
                                      <input
                                        id="enquiry-input"
                                        name="enquiry"
                                        type="text"
                                        placeholder="Your enquiry"
                                        value=""
                                        required
                                        className="w-full block border rounded py-3 px-4 bg-gray-200"
                                      />
                                    </div>
                                    <div className="xl:col-span-2">
                                      <label
                                        htmlFor="wheredidyou-input"
                                        className="hidden lg:block text-sm mb-2 font-medium">
                                        Where did you hear about us?:
                                      </label>
                                      <select
                                        id="wheredidyou-input"
                                        name="Where_did_you_hear_about_us"
                                        required
                                        className="w-full block border rounded py-3 px-4 bg-gray-200">
                                        <option value="">
                                          select an option
                                        </option>
                                        <option value="I have used iqms Learning before">
                                          I have used CASCO Learning before
                                        </option>
                                        <option value="Google Search">
                                          Google Search
                                        </option>
                                        <option value="LinkedIn">
                                          LinkedIn
                                        </option>
                                        <option value="Facebook">
                                          Facebook
                                        </option>
                                        <option value="Twitter">
                                          Twitter
                                        </option>
                                        <option value="Awarding Body">
                                          Awarding Body
                                        </option>
                                        <option
                                          value="Colleague or Friend">
                                          Colleague or Friend
                                        </option>
                                        <option
                                          value="Other">
                                          Other
                                        </option>
                                      </select>
                                    </div>
                                    <div className="xl:col-span-2">
                                      <div className="flex items-center">
                                        <input
                                          name="gdpr"
                                          id="gdpr"
                                          aria-label="Select all"
                                          type="checkbox"
                                          value="Yes"
                                          className="h-6 w-6 border-gray-300 text-secondary focus:shadow-outline-blue focus:border-blue-300"
                                        />
                                        <label
                                          htmlFor="documentation_checkbox"
                                          className="ml-2">
                                          <span className="block font-medium text-sm leading-5 text-gray-700">
                                            {`Please keep me up to date with CASCO
                                                   Learning’s news and special offers`}
                                            (optional)
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <button
                                        type="submit"
                                        className="w-full block p-4 rounded-lg  text-white fs-4  text-center myPrimary cursor-pointer text-lg">
                                        Submit Request
                                      </button>
                                    </div>
                                    <div className="xl:col-span-2">
                                      <span className="block w-full text-xs text-center mt-3">
                                        {` *By submitting this form and clicking
                                      submit you are accepting CASCO Learning’s
                                      privacy policy`}
                                      </span>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="fixed h-full w-full top-0 left-0 bg-black opacity-50 z-10"></div>
                    </div>
                  </div>
                </div>
              </div>
              ////////////////////////////////////////////////
              <div className="relative w-full border border-gray-400 rounded-lg mt-8 p-4 | md:text-left | lg:p-8">
                <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
                  Dates and Venues
                </h3>
                <div className="flex items-center mt-4">
                  <div className="flex-1 text-sm text-gray-800">
                    <ul>
                      <li>18th-22nd March 2024 - Sunderland</li>
                      <li>13th-17th May 2024 - Virtual</li>
                      <li>20th-24th May 2024 - Virtual</li>
                      <li>1st-5th July 2024 - COVENTRY</li>
                      <li>16th-20th September 2024 - Virtual</li>
                      <li>11th-15th November 2024 - Sunderland</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="relative w-full border border-gray-400 rounded-lg mt-8 p-4 | md:text-left | lg:p-8">
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
                  <div className="flex-1 text-sm text-gray-800">
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
                    className="h-6 w-6 text-gray-600 mr-2">
                    <path
                      fill="currentColor"
                      d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
                  </svg>
                  <div className="flex-1 text-sm text-gray-800">
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
                  <div className="flex-1 text-sm text-gray-800">
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
                  <div className="flex-1 text-sm text-gray-800">
                    Internationally accredited courses
                  </div>
                </div>
              </div>
              <div className="relative w-full bg-gray-200 rounded-lg p-4 mt-8 | md:text-left | lg:p-8">
                <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
                  Other courses you may be interested in
                </h3>
                <Link
                  href="/courses/iso-90012015-foundation-1"
                  className="block">
                  <span className="mr-2">›</span>
                  <span className="underline">ISO 9001:2015 Foundation</span>
                </Link>
                <Link
                  href="/courses/iso-90012015-internal-auditor-3"
                  className="block mt-2">
                  <span className="mr-2">›</span>
                  <span className="underline">
                    ISO 9001:2015 Internal Auditor
                  </span>
                </Link>
                <Link
                  href="/courses/ims-auditor-qualityenvironment-18"
                  className="block mt-2">
                  <span className="mr-2">›</span>
                  <span className="underline">
                    IMS Auditor (Quality/Environment)
                  </span>
                </Link>
                <Link
                  href="/courses/ims-auditor-qhse-19"
                  className="block mt-2">
                  <span className="mr-2">›</span>
                  <span className="underline">IMS Auditor (QHSE)</span>
                </Link>
                <Link
                  href="/courses/design-build-a-qms-20"
                  className="block mt-2">
                  <span className="mr-2">›</span>
                  <span className="underline">Design &amp; Build a QMS</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default CourseEn;
