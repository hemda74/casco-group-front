import Link from 'next/link';
import React from 'react';
import { CourseShort, Course } from '../../types';

type Props = {
  course: Course;
  courses: CourseShort[];
};

const CourseAr: React.FC<Props> = ({ course, courses }) => {
  return (
    <>
      <div className="max-w-content mx-auto px-4 | lg:px-12" dir="rtl">
        <div className="w-full bg-transparent py-4 | lg:py-6">
          <ul className="list-reset">
            <li className="hidden text-sm | lg:inline-block">
              <Link
                href="/"
                className="lg:hover:underline align-middle inline-block">
                <span className="inline-block ml-3 align-middle | lg:ml-0">
                  الرئيسية
                </span>
              </Link>
              <span className="px-1 lg:inline-block align-middle">/</span>
            </li>
            <li className="text-sm hidden lg:inline-block align-middle">
              <Link
                href="/courses"
                className="lg:hover:underline align-middle inline-block">
                <span className="inline-block  align-middle | lg:ml-0">
                  الدورات التدريبية
                </span>
              </Link>
              <span className="me-1 ms-1 lg:inline-block align-middle">/</span>
            </li>
            <li className="text-sm  lg:inline-block align-middle">
              <Link
                href={`${course.id}`}
                className="lg:hover:underline align-middle inline-block">
                <span className="inline-block align-middle | lg:ml-0 text-black">
                  {course.category.name_ar}
                </span>
              </Link>
              <span className="me-1 ms-1 hidden lg:inline-block align-middle">
                /
              </span>
            </li>
            <li className="text-sm hidden lg:inline-block align-middle">
              <span className="disabled lg:inline-block inline-block align-middle">
                {course.c_title_ar}
              </span>
            </li>
          </ul>
        </div>
        <div className="max-w-content | lg:px-12 lg:pb-8">
          <div className="pb-4 | lg:pb-12 ">
            <div className="w-full grid grid-cols-1 gap-4 | md:grid-cols-12 md:gap-8 lg:gap-16">
              <div className="md:col-span-6 | lg:col-span-7">
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-lg overflow-hidden mb-4 lg:mb-6">
                    <div className="h-64 relative overflow-hidden">
                      <div className="w-full absolute">

                        <img
                          src={course.imageUrl}
                          alt={course.c_title_ar}
                          className="w-full lazyloaded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="product__description">
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          المقدمة
                        </span>
                      </b>
                    </p>
                    {course.c_intro_ar.map((i) => (
                      <p key={i.id}> {i.text} </p>
                    ))}
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          المدة
                        </span>
                      </b>
                    </p>
                    {course.c_duration_ar}
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          من يجب ان يحضر الدورة
                        </span>
                      </b>
                    </p>
                    <p>
                      ومن المتوقع أن يكون لدى المشاركين في هذه الدورة المعرفة
                      من التالي:
                    </p>
                    <ul>
                      {course.c_who_should_ar.map((i) => (
                        <li key={i.id}>
                          <p className='me-1'>{i.text}</p>
                        </li>))}
                    </ul>
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          اهداف الدورة
                        </span>
                      </b>
                    </p>
                    <ul>
                      {course.c_objective_ar.map((i) => (

                        <li key={i.id}>
                          <p className='me-1'>{i.text}</p>
                        </li>
                      ))}
                    </ul>
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          محتوى الدورة
                        </span>
                      </b>
                    </p>
                    <ul>
                      {course.c_content_ar.map((i) => (

                        <li key={i.id}>
                          <p className='me-1'>{i.text}</p>
                        </li>
                      ))}
                    </ul>
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          ما هي المنافع من الدورة
                        </span>
                      </b>
                    </p>
                    <ul>
                      {course.c_benefit_ar.map((i) => (

                        <li key={i.id}>
                          <p className='me-1'>{i.text}</p>
                        </li>
                      ))}
                    </ul>
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          الدورات الداخلية
                        </span>
                      </b>
                    </p>
                    <p>{course.c_in_house_ar}</p>
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          أسلوب التسليم وقادة الدورة
                        </span>
                      </b>
                    </p>
                    {course.c_delv_and_leaders_ar}
                    <p>
                      <b style={{ color: 'rgb(149, 55, 52)' }}>
                        <span
                          className="text-primary-100"
                          style={{ fontSize: '30px' }}>
                          شهادة الدورة
                        </span>
                      </b>
                    </p>
                    <ul>
                      {course.c_content2_ar.map((i) => (

                        <li key={i.id}>
                          <p className='me-1'>{i.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 | lg:col-start-9 lg:col-span-4">
                <div className="relative w-full bg-gray-200 rounded-lg p-4 | md:text-left | lg:p-8">
                  <p className="text-xl text-primary-100  font-bold mb-1 | lg:text-2xl text-end">
                    {course.c_title_ar}
                  </p>

                  <div className="text-xl | lg:text-2xl text-end">
                    <div className="text-lg font-bold mb-2 ">
                      سعر الدورة
                    </div>
                    <div className='d-flex justify-content-start mt-2'>
                      <img src='/eg.png' className='price-img' width={40} />
                      <span className='me-2 text-bold '>{course.price_egp}EGP</span>
                    </div>
                    <div className='d-flex justify-content-start mt-2'>
                      <img src='/sa.png' className='price-img' width={40} />
                      <span className='me-2'>{course.price_ksa}SAR</span>
                    </div>
                    <div className='d-flex justify-content-start mt-2'>
                      <img src='/ae.png' className='price-img' width={40} />
                      <span className='me-2'>{course.price_uae}AED</span>
                    </div>
                    <div className='d-flex justify-content-start mt-2'>
                      <img src='/usa.png' className='price-img' width={40} />
                      <span className='me-2'>{course.price_usd}USD</span>
                    </div>
                  </div>
                  <div className="w-full xl:w-10/12 mt-6 | lg:mt-8">
                    <div className="w-full">
                      <div className="text-end">
                        <button
                          type="button"
                          className="btn block p-5 fs-6 rounded-lg mt-2  uppercase font-light tracking-wide text-center bg-gray myPrimary cursor-pointer  lg:mt-8 "
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal">
                          التسجيل في الدورة
                        </button>
                      </div>
                      <div
                        className=" modal  fade contact w-screen  fixed inset-0 mx-auto align-center scrolling-touch overflow-y-auto | lg:h-screen lg:px-8"
                        id="exampleModal"
                        dir='rtl'
                        tabIndex={-1}
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                          <div className="">
                            <div className="modal-content w-full h-screen relative m-auto z-50 | lg:p-8 lg:h-auto">
                              <div className="relative bg-white p-8 pb-32 lg:p-12 lg:max-w-content min-h-full lg:min-h-0 pointer-events-auto lg:rounded-lg ">
                                <div className="absolute top-0 right-0 m-4 mb-5 cursor-pointer">

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
                                        لقد اخترت :
                                      </h5>
                                      <span className="block mt-2">
                                        {course.c_title_ar}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="col-span-10 xl:col-span-6" dir='rtl'>
                                    <form
                                      dir='rtl'
                                      className="grid grid-cols-1 gap-8 | xl:grid-cols-2 lg:gap-4">
                                      <div>
                                        <label className="text-end">
                                          الاسم:
                                        </label>
                                        <input
                                          id=""
                                          name="name"
                                          type="text"
                                          placeholder="Your Name"
                                          value=""
                                          required
                                          className="w-full block border rounded py-3 px-4 bg-gray-200"
                                        />
                                      </div>
                                      <div>
                                        <label
                                          htmlFor="company-input"
                                          className="">
                                          اسم الشركة :
                                        </label>
                                        <input
                                          id="company-input"
                                          name="company"
                                          type="text"
                                          placeholder="Your company (اختياري)"
                                          value=""
                                          className="w-full block border rounded py-3 px-4 bg-gray-200"
                                        />
                                      </div>
                                      <div className="xl:col-span-2">
                                        <label
                                          htmlFor="address-input"
                                          className="">
                                          العنوان:
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

                                          className="">
                                          الهاتف:
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
                                          className="">
                                          الايميل:
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
                                          htmlFor="wheredidyou-input"
                                          className="">
                                          مين اين عرفت كاسكو؟                                        </label>
                                        <select
                                          id="wheredidyou-input"
                                          name="Where_did_you_hear_about_us"
                                          required
                                          className="w-full block border rounded py-3 px-4 bg-gray-200">
                                          <option value="">
                                            اختر من التالى
                                          </option>
                                          <option value="I have used iqms Learning before">
                                            لقد استخدمت CASCO Learning من قبل                                          </option>
                                          <option value="Google Search">
                                            بحث جوجل
                                          </option>
                                          <option value="LinkedIn">
                                            لينكدان
                                          </option>
                                          <option value="Facebook">
                                            فيسبوك
                                          </option>
                                          <option value="Twitter">
                                            تويتر
                                          </option>
                                          <option value="Awarding Body">
                                            الهيئة المانحة
                                          </option>
                                          <option
                                            value="Colleague or Friend">
                                            زميل او صديق
                                          </option>
                                          <option
                                            value="Other
">
                                            اخرى
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
                                              {` يرجى إطلاعي على آخر المستجدات مع CASCO أخبار التعلم والعروض الخاصة`}
                                              (اختياري)
                                            </span>
                                          </label>
                                        </div>
                                      </div>
                                      <div className="flex items-center">
                                        <button
                                          type="submit"
                                          className="w-full block p-4 rounded-lg  text-white fs-4  text-center myPrimary cursor-pointer text-lg">
                                          تسجيل الطلب
                                        </button>
                                      </div>
                                      <div className="xl:col-span-2">
                                        <span className="block w-full text-xs text-center mt-3">
                                          {` * عن طريق إرسال هذا النموذج والنقر عليه
 أرسل أنك تقبل CASCO Learning
 سياسة الخصوصية`}
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
                <div className="relative w-full bg-gray-200 rounded-lg p-4 mt-8 | md:text-left | lg:p-8 text-end">
                  <h3 className="text-lg font-bold mb-1 text-primary-100 | lg:text-xl">
                    دورات أخرى قد تكون مهتم بها                  </h3>
                  {courses.map((c) => (
                    <Link
                      href={`/courses/${c.id}`}
                      className="block">
                      <span className="ml-2">›</span>
                      <span className="underline">{c.c_title_ar}</span>
                    </Link>
                  ))}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CourseAr;
