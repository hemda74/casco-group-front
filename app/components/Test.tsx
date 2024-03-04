import React from 'react';

const test = () => {
  return (
    <>
      <div className="grid grid-cols-1 | lg:grid-cols-12 lg:gap-12">
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
                  <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>{' '}
                  Foundation{' '}
                  <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                    (12)
                  </span>
                </a>
              </li>
              <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
                <a
                  href="https://iqmslearning.co.uk/courses/practitioner"
                  className="relative flex items-center w-full truncate text-base | lg:text-xs">
                  <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>{' '}
                  Practitioner{' '}
                  <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                    (26)
                  </span>
                </a>
              </li>
              <li className="facet py-1 mb-1 | lg:py-0 lg:mb-1 block">
                <a
                  href="https://iqmslearning.co.uk/courses/professional"
                  className="relative flex items-center w-full truncate text-base | lg:text-xs">
                  <span className="inline-block w-5 h-5 mr-2 border border-gray-300 rounded"></span>{' '}
                  Professional{' '}
                  <span className="ml-1 inline-block text-grey-darker text-base | lg:text-xs">
                    (10)
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:col-span-9 | xl:col-span-10">
          <div className="w-full grid gap-2 mb-2 | lg:mb-4 grid-cols-2">
            <span className="flex items-center justify-center col-span-2 text-center | lg:col-span-1 lg:justify-start lg:text-left">
              <span className="text-sm font-bold">
                Showing 1-24 of 48 courses
              </span>
            </span>
          </div>
          <div className="courses">
            <div className="course">
              <div
                title="Environmental Sustainability Skills for the Workforce"
                className="content">
                <div className="image">
                  <a
                    href="/course/environmental-sustainability-skills-for-the-workforce-41"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 2x"
                        alt="Environmental Sustainability Skills for the Workforce"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/PsBXQouPXWYAi2rWH7MOmyaIOMbWOxjt8ILAfwso.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/environmental-sustainability-skills-for-the-workforce-41"
                      className="inline-block">
                      <h2 className="title">
                        Environmental Sustainability Skills for the Workforce
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThe IEMA Environmental Sustainability Skills for
                  the Workforce course is a one-day awareness course developed
                  to upskill all workers with an elemental understanding of
                  environmental sustainability principles. Relevant to any job
                  role across all sectors this course will help to embed
                  environmental cultural change into an organisation. Those
                  businesses seeking to refresh environmental management within
                  their business and looking for true value from ISO 14001,
                  achieve their environmental goals and actively change their
                  culture will value the support this course delivers. The
                  course covers the main environmental risks and opportunities
                  facing organisations; the importance of resource efficiency;
                  the impacts of pollution, prevention, control and legislation;
                  the impact of transport; and knowing how employees can support
                  environmental sustainability.Duration1 Day, 08.30 – 16.45Who
                  should attend?This course is ideally suited for those working
                  in any job role across all sectors and has no formal entry
                  requirements. It is benchmarked against the Level 2 RQF
                  descriptors. This is an ideal course for those developing into
                  the role of, or existing, designated environmental champions
                  in the workforce.Course objectivesThis course will equip
                  delegates with an understanding of some of the key concepts of
                  sustainability in business and will develop relevant skills to
                  be able to support sustainable development within their own
                  business.Course content Develop an understanding of the main
                  environmental and economic risks and opportunities Develop an
                  understanding of compliance obligations and business drivers
                  for change Develop an understanding of the main potential
                  impacts on environment and sustainability Develop an
                  understanding of how to improve environmental performance What
                  are the benefitsAttendance will enable delegates to:
                  Understand the key concepts and benefits of a sustainable
                  business Support the application and development of
                  sustainability in their own business Be able to promote, build
                  and support sustainability within their business In-House
                  CoursesOffering better value for money, they can be designed
                  to more closely match your specific requirementsStyle of
                  Delivery and Course LeadersOur course leaders have substantial
                  experience in the field of environmental management systems.
                  They are qualified and experienced with extensive practical
                  management experience across a wide range of sectors including
                  manufacturing, finance, pharmaceuticals, local and national
                  government. We have extensive experience working across
                  cultural boundaries, through our work in Europe, Africa, the
                  Middle East, Asia and the Americas.CertificationThe assessment
                  for Environmental Sustainability Skills for the Workforce
                  consists of an online 20 question multiple-choice test. The
                  test is completed through the IEMA assessment portal and
                  candidates are sent a link upon registration to the
                  assessment. Delegates successfully taking the course and
                  passing the course assessment will be awarded an IEMA
                  Sustainable Skills for the Workforce certificate.
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£295.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/environmental-sustainability-skills-for-the-workforce-41"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Understand &amp; Manage your Carbon Footprint"
                className="content">
                <div className="image">
                  <a
                    href="/course/understand-manage-your-carbon-footprint-58"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 2x"
                        alt="Understand &amp; Manage your Carbon Footprint"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/zpLSPaexp2CPRPufdWe7rYo35I2DIWYONis1sXgt.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/understand-manage-your-carbon-footprint-58"
                      className="inline-block">
                      <h2 className="title">
                        Understand &amp; Manage your Carbon Footprint
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis intensive one-day course is designed to equip
                  delegates with an appreciation and understanding of the basics
                  of carbon footprints and carbon accounting, how to calculate
                  their own company footprint and how to simply manage and
                  reduce the size of their carbon footprint. Larger businesses
                  are legally required to calculate their carbon footprint for
                  the carbon emissions they are directly responsible for (Scope
                  1) and the emissions the electricity supplied (Scope 2). Scope
                  3 emissions is the largest potential category for many
                  businesses and includes the supply chain which to date has
                  been voluntary to calculate. Many large businesses are
                  focusing their NetZero approach to include Scope 3 emissions
                  so companies are now asking all of the businesses they deal
                  with to supply data on their own carbon emissions. If you are
                  part of a supply chain for a larger business and are being
                  asked information on your own carbon footprint then this is
                  the course to help you.Duration1 Day, 09.00 - 17.00Who should
                  attend?This course is recommended for individuals who are
                  responsible for understanding and reliably calculating their
                  company’s carbon footprint, for business owners who need to
                  understand about carbon footprints and respond to their
                  customer needs. It is also suitable for environmental managers
                  given this responsibility or anyone who needs to increase
                  their specific knowledge of this topic such as those who are
                  involved in managing the supply chain (e.g., Procurement) and
                  for Directors who find carbon accountable is now part of their
                  remit.Course objectivesThis course aims to provide an
                  understanding of terminology and definitions linked to carbon
                  management. This course is an intensive workshop that focuses
                  on the practical skills required to create a carbon footprint
                  report and begin their route to NetZero.Course content
                  Understand carbon emissions terminology Understand what a
                  carbon footprint is and be familiar with the Greenhouse Gas
                  Accounting Protocol Measure your business carbon footprint
                  Create a carbon reduction plan Carbon reduction technology
                  options What are the benefitsOn successful completion,
                  delegates will have improved their knowledge of carbon
                  management and be able to start to develop a NetZero plan for
                  their business and be able to talk knowledgeably with their
                  stakeholders including their customers and supply
                  chain.In-House CoursesThis course is also available on an
                  in-house basis which can allow courses to be modified to more
                  closely match your specific business requirements. The course
                  can be delivered either virtually or face-to-face. Please
                  contact us for further information.Style of Delivery and
                  Course LeadersOur course leaders have substantial experience
                  in carbon and energy management. They are qualified and
                  experienced with extensive practical management experience
                  across a wide range of sectors including power distribution,
                  manufacturing, engineering, finance, local and national
                  government. We have extensive experience working across
                  cultural boundaries, through our work in Europe, Africa, the
                  Middle East, Asia and the Americas.CertificationAll delegates
                  will be awarded a certificate verifying attendance and
                  completion of the course.
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£295.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/understand-manage-your-carbon-footprint-58"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Introduction to Energy Management"
                className="content">
                <div className="image">
                  <a
                    href="/course/introduction-to-energy-management-57"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 2x"
                        alt="Introduction to Energy Management"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/u9zQ04JTCCzx8EVmtrBXS48n8GkbQUfFGVVSZmxD.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/introduction-to-energy-management-57"
                      className="inline-block">
                      <h2 className="title">
                        Introduction to Energy Management
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis one-day course is designed to give delegates
                  an introduction to energy management principles and practical
                  skills which can be applied in a business setting. This course
                  also provides energy technology options which could be
                  available for your business to implement, for example solar or
                  heat pumps. As the drive to reduce carbon emissions increases
                  and with energy costs rising dramatically for businesses,
                  ignoring energy management principles could mean spending more
                  money on energy than your competitors and more than what is
                  necessary to continue with your business operations. This
                  course is designed to start your business along the path of
                  understanding energy management principles and reducing energy
                  usage leading to reduced costs.Duration1 Day, 09.00 - 17.00Who
                  should attend?This course does not require any prior knowledge
                  and is intended to give an introduction to energy management
                  for non-energy managers or non-specialists in this field. It
                  is recommended for individuals who have been given
                  responsibilities for energy management as part of their
                  current role, or are taking on this responsibility on behalf
                  of their business. It is also suitable for managers who have
                  been asked to participate in energy reduction in their
                  business, as well as senior managers and directors seeking
                  further knowledge on this increasingly important
                  subject.Course objectivesThis course aims to provide an
                  introduction to energy management for business so that
                  delegates understand the fundamentals of energy use, are able
                  to consider some practical options for energy solutions and
                  introduce them to the basics of energy managementCourse
                  content What is Energy Management? What is Energy and how is
                  it delivered? Energy Bills and Commercial Contracts Energy and
                  Carbon Policy Energy Technology and Application Energy
                  Management Process What are the benefitsOn successful
                  completion, delegates will have improved their knowledge of
                  energy management. They will be able to develop a basic energy
                  strategy and policy and be able to understand some options for
                  reducing energy in their business which should lead to overall
                  cost reductions for energy use.In-House CoursesThis course is
                  also available on an in-house basis which can allow courses to
                  be modified to more closely match your specific business
                  requirements. The course can be delivered either virtually or
                  face-to-face. Please contact us for further information.Style
                  of Delivery and Course LeadersOur course leaders have
                  substantial experience in carbon and energy management. They
                  are qualified and experienced with extensive practical
                  management experience across a wide range of sectors including
                  power distribution, manufacturing, engineering, finance, local
                  and national government. We have extensive experience working
                  across cultural boundaries, through our work in Europe,
                  Africa, the Middle East, Asia and the
                  Americas.CertificationAll delegates will be awarded a
                  certificate verifying attendance and completion of the course.
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£295.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/introduction-to-energy-management-57"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Practical Waste Management &amp; Waste Minimisation"
                className="content">
                <div className="image">
                  <a
                    href="/course/practical-waste-management-waste-minimisation-55"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 2x"
                        alt="Practical Waste Management &amp; Waste Minimisation"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NYyYIA69nADq3WtrmVT8D8mIcU4PJKvFqFSHIdos.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/practical-waste-management-waste-minimisation-55"
                      className="inline-block">
                      <h2 className="title">
                        Practical Waste Management &amp; Waste Minimisation
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionWith a minefield of legislation on waste, rising
                  waste costs and customer and other stakeholders demanding
                  improvements on environmental performance, this course is part
                  of the environmental sustainability suite of training courses
                  designed to help organisations support their environmental
                  sustainability goals. The course is designed to improve
                  compliance and encourage a culture of more sustainable waste
                  and resource management, however most importantly it will help
                  to reduce your company or organisation’s waste costs. Every
                  organisation has a different way of dealing with their waste
                  based on the type and amount that is produced.&nbsp; This
                  course is aimed at delegates whose role deals predominantly
                  with the management of wastes within their business and whose
                  decisions have the ability to influence a significant level of
                  change within company policy and routine.Duration1 Day, 09.00
                  – 17.00Who should attend?All those with responsibility for
                  ensuring waste management is dealt with in a legally proper
                  manner and those who are seeking to improve their
                  understanding of the legislation in place on waste.&nbsp; It
                  is also useful for those who are trying to improve their
                  company waste management.&nbsp; Those who are trying to
                  establish waste minimisation initiatives, perhaps as part of
                  their sustainability goals or in companies with ISO 14001 as
                  part of their continual improvement programme.Course
                  content·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Waste as a
                  resource·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; How to
                  demonstrate
                  improvements·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; What
                  is waste?·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Managing
                  resources and waste in the
                  workplace·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Legislation and ensuring
                  compliance·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Understanding and applying the waste
                  hierarchy·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Completing waste
                  documentation·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The
                  cost of managing
                  waste·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; How to
                  identify opportunities for waste minimisation in the
                  workplace·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; How to
                  manage a successful waste minimisation working groupWhat are
                  the benefitsBenefits
                  include:·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The
                  knowledge to help you identify improvements in resource and
                  waste management·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  The understanding of where and how to make those
                  improvements·&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; The
                  skills to implement those improvements and demonstrate their
                  impact to othersIn-House CoursesOffering better value for
                  money, they can be designed to closely match your specific
                  requirements.Style of Delivery and Course LeadersOur course
                  tutors are approved training providers, approved by BRCGS,
                  IRCA, RSPH and IEMA. They are qualified and experienced with
                  extensive practical knowledge across a wide range of sectors
                  including food manufacturing, catering and
                  retail.CertificationAll delegates will be awarded a
                  certificate verifying attendance and completion of the course.
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£425.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/practical-waste-management-waste-minimisation-55"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div title="ISO 14001:2015 Foundation" className="content">
                <div className="image">
                  <a
                    href="/course/iso-140012015-foundation-7"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 2x"
                        alt="ISO 14001:2015 Foundation"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/NU2Dew6CEHQ1RE3DGEGdBCOMZiDsnkkPP00Jv18E.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/iso-140012015-foundation-7"
                      className="inline-block">
                      <h2 className="title">
                        ISO 14001:2015 Foundation
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionA one-day awareness course designed to provide
                  attendees with an introduction to environmental management
                  systems based on the requirements of the ISO 14001:2015
                  standard and how this standard can be used to develop and
                  improve an environmental management system. In the past, some
                  companies may have seen environmental management as a luxury
                  that they could ill afford but things are changing.
                  Legislation designed to protect the environment has steadily
                  increased and many customers use environmental performance as
                  a key selection criteria when awarding contracts. This means
                  that a systematic approach to environmental management can
                  often make good commercial and financial sense.Duration1 Day,
                  08.30-16.45Who should attend?Decision-makers and managers at
                  all levels, need to understand the fundamentals and practical
                  implementation requirements of an effective Environmental
                  Management System (EMS). Environmental Managers or those with
                  responsibility for maintaining an existing EMS to a recognised
                  standard will also find this course very useful. Also useful
                  to anyone who needs an introduction to environmental
                  management or those wishing to attend the registered 2-day
                  auditor course without prior experience of environmental
                  management systems.Course objectivesThis course will equip
                  delegates with an understanding of the development and
                  application of environmental management techniques and how the
                  ISO 14001:2015 standard is interpreted and implemented. On
                  completion of the course we expect delegates to be able to:
                  Describe the purpose of an environmental management system
                  Explain the purpose, content and interrelationships of ISO
                  14001, ISO 14004, and EMAS Interpret the specific requirements
                  of ISO 14001 in the context of an effectively implemented
                  environmental management system Course content Benefits of an
                  effective EMS to businesses Essential environmental
                  terminology and familiarisation with ISO 14001 definitions
                  Purpose and intent of an environmental management system
                  Environmental issues and how to assess and determine
                  environmental aspects and impacts Understanding organizational
                  context and a risk-based approach Summary of key environmental
                  legislation and relevance of legislation to an EMS Structure
                  and key requirements of ISO 14001 Setting environmental
                  objectives Continual improvement process for an EMS
                  Monitoring, measurement and analysis What are the
                  benefitsAttendance will enable delegates to: Decide how best
                  to develop the Environmental Management Systems of their
                  organisation and avoid common problems Add to their
                  environmental management career credentials Understand the
                  relevance of environmental standards to their organisation
                  Improve environmental decision-making Demonstrate the
                  competitive benefits of environmental management standards to
                  their own and other organisations In-House CoursesOffering
                  better value for money, they can be designed to closely match
                  your specific requirements.Style of Delivery and Course
                  LeadersOur course leaders have extensive experience in
                  Management across a wide range of sectors including
                  manufacturing, service and professional organisations
                  including Local, National and International Government. This
                  wide experience enables them to make the course more
                  interesting by using their relevant examples and case studies
                  during workshop discussions. Our team of staff has extensive
                  experience of working across cultural boundaries, through
                  their work in Europe, Africa, the Middle East, Asia and the
                  Americas.CertificationDelegates successfully completing the
                  course will be awarded a CQI and IRCA Certified training
                  accredited certificate. (2353).
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£495.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/iso-140012015-foundation-7"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div
                title="Environmental Legislation Awareness"
                className="content">
                <div className="image">
                  <a
                    href="/course/environmental-legislation-awareness-34"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 2x"
                        alt="Environmental Legislation Awareness"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/jXAAFqUGdMirWcXH9WisVbGI2hOdM0VbEiGDQgI0.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/environmental-legislation-awareness-34"
                      className="inline-block">
                      <h2 className="title">
                        Environmental Legislation Awareness
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis intensive one-day course is designed to equip
                  delegates with an appreciation and understanding of the
                  legislative structure across the UK, key areas of
                  environmental legislation and regulations and how these are
                  typically enforced. No company or organisation can afford to
                  neglect the law, but many companies still do not realise the
                  full extent of their obligations under environmental
                  legislation. Lack of knowledge is no protection for either a
                  company or an individual. This course is essential for those
                  companies who are in the process of setting up an ISO 14001 or
                  EMAS certified environmental management system and needing to
                  build a Legal Register and need some guidance.Duration1 Day,
                  09.00 – 16.30Who should attend?This course is recommended for
                  individuals with key environmental management
                  responsibilities, particularly those seeking or maintaining
                  certification against the ISO 14001 standard. It is also
                  suitable for senior managers and directors and environmental
                  auditors, in fact anyone seeking to increase their
                  environmental legislative knowledge.Course objectivesThis
                  course aims to provide an understanding of environmental
                  legislation and the enforcement process for business.Course
                  content Principles of environmental legislation European and
                  International influences on Environmental Law The
                  Environmental Protection Act and an overview of key legal
                  instruments covering: Pollution Prevention and Control Air
                  Quality Noise and nuisance Waste Management Producer
                  Responsibility – packaging, WEEE Water Pollution Oil storage
                  Contaminated Land Wildlife &amp; Countryside What are the
                  benefitsOn successful completion, delegates will have improved
                  their knowledge of environmental legislation and requirements,
                  improved confidence in the extent of compliance of their own
                  systems and be able to identify any current weaknesses in
                  their management of environmental legislation.Style of
                  Delivery and Course LeadersOur course leaders have substantial
                  experience in the field of environmental management and
                  pollution control. They are qualified and experienced with
                  extensive practical management experience across a wide range
                  of sectors including manufacturing, finance, pharmaceuticals,
                  local and national government. We have extensive experience
                  working across cultural boundaries, through our work in
                  Europe, Africa, the Middle East, Asia and the
                  Americas.CertificationAll delegates will be awarded a
                  certificate verifying attendance and completion of the course.
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£495.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/environmental-legislation-awareness-34"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div title="ISO 45001:2018 Foundation" className="content">
                <div className="image">
                  <a
                    href="/course/iso-450012018-foundation-13"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg 2x"
                        alt="ISO 45001:2018 Foundation"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/LqXuOckMSaq99IBu7Pl8NRKNJc3PrZiugtEksnar.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/iso-450012018-foundation-13"
                      className="inline-block">
                      <h2 className="title">
                        ISO 45001:2018 Foundation
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis one-day CQI and IRCA certified training
                  course is for those wanting an introduction to the new
                  international occupational health and safety management system
                  (OHSMS) standard ISO 45001:2018 and to understand how it can
                  be used to develop, maintain and improve your health and
                  safety performance. Knowledge and understanding of ISO
                  45001:2018 is more than simply reading the standard’s text. It
                  demands an understanding of the requirements and a considered
                  application of the standard to the organisation. After this
                  course, you will have sufficient insight to be able to
                  evaluate your own organisation’s arrangements and identify how
                  they can be improved.Duration1 Day, 08:30 – 17:00Who should
                  attend?This course is designed for those needing an
                  introduction to OHSMS and is a pre-requisite for those wishing
                  to attend the CQI and IRCA certified OHSMS Internal Auditor or
                  Lead Auditor course. It is ideal for managers, supervisors,
                  health and safety representatives, OH&amp;S consultants and
                  those with health and safety management responsibilities or
                  anyone wishing to understand the impact and relevance of ISO
                  45001:2018 to their organisations.Course objectivesThis course
                  will equip delegates with an understanding of the development
                  and application of OHSMS techniques and how the ISO 45001:2018
                  standard is interpreted and implemented. On completion of the
                  course delegates will be able to: Understand the purpose and
                  business benefits of an OHSMS Outline the structure and
                  content of ISO 45001 and its relationship with Annex SL
                  Interpret the requirements of ISO 45001 in the context of an
                  effective OHSMS Course content Occupational Health and Safety
                  Management Systems (OHSMS) – introduction and key OHS concepts
                  OHSMS based on ISO 45001:2018 including the Process Approach
                  Key ISO 45001 requirements Organisational context OH&amp;S
                  Policy and Planning Risks and opportunities to the OHSMS
                  Hazard identification and elimination and controls, operation,
                  performance evaluation and improvement ISO 45001:2018
                  requirements including; worker needs, interests and
                  participation as well as interested parties Continual
                  improvement of an OHSMS What are the benefitsAttendance will
                  enable delegates to: Decide how best to develop the OHSMS of
                  their organisation and avoid common problems Add to their
                  occupational health and safety management career credentials
                  Understand the relevance of OHSMS standards to their
                  organisation Improve OHS decision-making Demonstrate the
                  competitive benefits of OHSMS standards to their own and other
                  organisations In-House CoursesOffering better value for money,
                  they can be designed to closely match your specific
                  requirements.Style of Delivery and Course LeadersOur course
                  leaders have extensive experience across a wide range of
                  sectors including manufacturing, service and professional
                  organisations including Local, National and International
                  Government. This wide experience enables them to make the
                  course more interesting by using their relevant examples and
                  case studies during workshop discussions. Our team of staff
                  has extensive experience of working across cultural
                  boundaries, through their work in Europe, Africa, the Middle
                  East, Asia and the Americas.Certification Delegates
                  successfully completing the course will be awarded a CQI and
                  IRCA Certified training accredited certificate. (2336). &nbsp;
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£495.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/iso-450012018-foundation-13"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div title="ISO 9001:2015 Foundation" className="content">
                <div className="image">
                  <a
                    href="/course/iso-90012015-foundation-1"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg 2x"
                        alt="ISO 9001:2015 Foundation"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/agwckuxkdzQ6xYDlGjl8F1PcJr7g8SkEVyC1gCID.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/iso-90012015-foundation-1"
                      className="inline-block">
                      <h2 className="title">
                        ISO 9001:2015 Foundation
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionA one-day CQI and IRCA Certified training
                  awareness programme for those requiring an introduction to the
                  ISO 9001:2015 standard and how it can be used to develop and
                  improve quality management systems. This foundation course
                  gives an introduction to the most widely used standard for
                  Quality Management in the world. Creation of a successful
                  quality system relies on more than reading the text in the
                  standard; it demands an understanding of requirements and a
                  considered application of the standard to the organisation.
                  This course will provide delegates with an insight into the
                  important world of quality standards, their development and
                  the certification process.Duration1 Day, 09.00 – 17.00Who
                  should attend?Specially designed for managers, supervisors,
                  those with potential quality roles or anyone wishing to
                  understand and assess the impact and relevance of quality
                  management to their organisations. Also useful to anyone who
                  needs an introduction to quality assurance or those wishing to
                  attend the CQI and IRCA Certified training 2-day auditor
                  course without prior experience of quality systems.Course
                  objectivesThis course will equip delegates with an
                  understanding of the development and application of Quality
                  Management techniques and how the ISO 9001:2015 standard is
                  interpreted and implemented. On completion of the course we
                  expect delegates to be able to: Describe the purpose of a
                  quality management system with relevance to the 7 principles
                  of quality management Explain the purpose, content and
                  interrelationships of ISO 9000, ISO 9001, and ISO 9004
                  Interpret the requirements of ISO 9001 in the context of an
                  effectively implemented business management system Course
                  content Background to Quality Assurance Setting quality
                  objectives The ISO 9001:2015 series standards Measurement and
                  analysis Process Approach Continual improvement The 7 quality
                  management principles Organisational Context ISO 9001 clause
                  requirements Risk based thinking What are the
                  benefitsAttendance will enable delegates to: Decide how best
                  to develop the Quality Management Systems of their
                  organisation Add to their quality management career
                  credentials Understand the relevance of quality standards to
                  their organisation Be able to set quality objectives.
                  Demonstrate the competitive benefits of quality standards to
                  their own and other organisations In-House CoursesOffering
                  better value for money, they can be designed to closely match
                  your specific requirements.Style of Delivery and Course
                  LeadersOur course leaders have extensive experience in Quality
                  Management across a wide range of sectors including
                  manufacturing, service and professional organisations
                  including Local, National and International Government. This
                  wide experience enables them to make the course more
                  interesting by using their relevant examples and case studies
                  during workshop discussions. Our team of staff has extensive
                  experience of working across cultural boundaries, through
                  their work in Europe, Africa, the Middle East, Asia and the
                  Americas.Certification Delegates successfully completing the
                  course will be awarded a CQI and IRCA Certified training
                  accredited certificate. (2350).
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£495.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/iso-90012015-foundation-1"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="course">
              <div title="IOSH Managing Safely" className="content">
                <div className="image">
                  <a
                    href="/course/iosh-managing-safely-63"
                    className="block w-full text-primary text-xs relative">
                    <picture>
                      <source
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 2x"
                        type="image/webp"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg.webp 2x"
                      />
                      <img
                        src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg"
                        data-src="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg"
                        data-srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 2x"
                        alt="IOSH Managing Safely"
                        className="block w-full animate lazyloaded"
                        srcSet="https://iqmslearning.co.uk/image-factory/b83a302ab03e1b5f33a6d33462a69869580b9c0f~225x300/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 1x,https://iqmslearning.co.uk/image-factory/dd6c3f2062c7b99c9cf892559f54ce20af226a77~225x300@2x/images/products/eMByt7iJ4dfHF0k4UjQJaZaO3rNXitxoJh2cdDRL.jpeg 2x"
                      />
                    </picture>
                  </a>
                </div>
                <div className="text">
                  <div className="flex flex-wrap items-center text-2xl | lg:flex-row">
                    <a
                      href="/course/iosh-managing-safely-63"
                      className="inline-block">
                      <h2 className="title">
                        IOSH Managing Safely
                        <span className="inline-block">&nbsp;–&nbsp;</span>
                      </h2>
                    </a>
                  </div>
                  <p className="description | shave">{`
                  IntroductionThis three-day IOSH Managing Safely course is a
                  risk management course designed to provide supervisors and
                  managers with a step-by-step approach to managing health and
                  safety and supporting their staff. This course is invaluable
                  in giving managers at all levels the confidence to understand
                  and apply knowledge, understand their responsibilities and be
                  a force for cultural change in the workplace.&nbsp; Managers
                  and supervisors will learn how to perform OHS risk assessment
                  and control OHS risk and understand and perform incident
                  investigations. It ensures managers understand their role and
                  responsibilities for driving occupational health and safety
                  standards in their organisation and can assess and measure
                  their own performance.Duration3 days, 8.30-17.00Who should
                  attend?This course is ideally suited for supervisors and
                  managers across all sectors and has no formal entry
                  requirements.Course objectivesThis course will equip delegates
                  with knowledge of the key concepts and building blocks of
                  occupational health and safety in the workplace and develop
                  skills and tools to improve and drive health and safety
                  culture within their own business.Course content Introducing
                  managing safely Assessing risks Controlling risks
                  Understanding responsibilities Understanding hazards
                  Investigating incidents Measuring performance What are the
                  benefitsAttendance will enable delegates to: Be able to assess
                  and control risks and hazards Understand their
                  responsibilities for safety and health Be able to investigate
                  incidents and contribute to investigation teams Be able to
                  reflect and measure their own performance Be able to consider
                  and reflect on good practice In-House CoursesCourses can be
                  adapted to closely match your own organisational specific
                  requirements including flexibility in course delivery.Style of
                  Delivery and Course LeadersThe public version of this course
                  is currently delivered remotely on Zoom. Our course leaders
                  have extensive experience in occupational health and safety
                  management systems across a wide range of sectors including
                  manufacturing, service and professional organisations and both
                  in Local and National government. We have extensive experience
                  working across cultural boundaries, through our work in
                  Europe, Africa, the Middle East, Asia and the
                  Americas.CertificationThe assessment for the IOSH Managing
                  Safely course comprises 30 multiple-choice and short answer
                  questions and a post course short practical assignment
                  (completing a workplace risk assessment). Delegates
                  successfully taking the course and passing the course
                  assessment will be awarded an IOSH Managing Safely issued
                  certificate.
                `}</p>
                  <div className="priceBook">
                    <div className="price">
                      <span className="text-primary-100">
                        <span>£545.00</span>
                      </span>
                      <span className="text-base text-primary-100">
                        &nbsp;ex vat
                      </span>
                    </div>
                    <div className="book">
                      <a
                        href="/course/iosh-managing-safely-63"
                        className="view-btn">
                        View Course <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description mt-6 text-sm text-left | lg:mt-8"></div>
        </div>
      </div>
    </>
  );
};

export default test;
