import React, { ReactElement,useEffect, useState } from 'react'
import Head from 'next/head';
import Image from 'next/image'
import styles from '../../styles/CourseCard.module.css'
import CourseLayout from '../../layouts/CourseLayout';
import Link from "next/link"
import { NextPageWithLayout } from '../_app';
import courseimage from '../../public/imagess/coursesimage.png'
import ContactUs from '../../components/Courses Forms/Course3Email';

type Props = {};
// dymmy data for ui till handle working with api
const Course:NextPageWithLayout = (props:Props) => {
  const [partyTime, setPartyTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("06/01/2023 09:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      var difference = target.getTime() - now.getTime();

      var d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      var h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      var m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      var s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setPartyTime(true)
        ;
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
<>
    <Head>
        <title>Course Details | CASCO</title>
    </Head>
    <main className={`${styles.bodyContainer}`}>
    <div className={`text-center row ${styles.titleWord2}`}>
        <div className={`container mb-4`}>
            <Link href={"/"}><a className="text-white fw-semibold mb-4" data-trans="HomeNav">{`Home`}</a></Link>
            <Link href={"/courses"}><a className="text-white fw-semibold mb-4" data-trans="CourseNav2">{` > Courses`}</a></Link>
        </div>
        <h3 className={`text-white col-lg-5 m-auto fw-bold mb-5`} data-trans="course3">{`ISO/IEC 17065:2012 Certification Requirements`}</h3>
        <div className={''}>
            {partyTime ? 
            (
                <>
                  <div className="d-flex m-auto">
                      <div className="d-flex m-auto">
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Days</small>
                        </div>
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Hrs</small>
                        </div>
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Mins</small>
                        </div>
                        <div className={`${styles.timeSegment}`}>
                          <small className="text-white fw-senibold">0</small>
                          <small className="text-white fw-senibold">Secs</small>
                        </div>
                      </div>
                  </div>  
                </>
            ) : 
            (
                <>
                    <div className="d-flex m-auto">
                        <div className="d-flex m-auto">
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{days}</small>
                            <small className="text-white fw-senibold" data-trans="Days">Days</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{hours}</small>
                            <small className="text-white fw-senibold" data-trans="Hrs">Hrs</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{minutes}</small>
                            <small className="text-white fw-senibold" data-trans="Mins">Mins</small>
                          </div>
                          <div className={`${styles.timeSegment}`}>
                            <small className="text-white fw-senibold">{seconds}</small>
                            <small className="text-white fw-senibold" data-trans="Secs">Secs</small>
                          </div>
                        </div>
                    </div>
                </>
      )}
    </div>
    {/* <div className={`${styles.enrollDiv} d-flex m-auto `}>
        <button className={`mySuccess rounded fw-bold ${styles.enrollButton}`} type="submit">Enroll Now</button>
        <div className='d-flex me-4 ms-4'>
            <span className='fw-bold fs-4'>4500</span>
            <span className=' me-2 ms-2'>SAR</span>
        </div>
      </div> */}
    </div>
    <div className="container col-xl-8 col-lg-8 col-md-12 mb-5">
        <div className="row pt-4">
            <div className={`col-lg-8 col-md-12 p-3 ${styles.courseDetailesMain}`}>
                <Image src={courseimage} className="img-fluid" alt=""/>
            <div className="description" id='description'>
                <span className='fs-5 fw-bold' data-trans="Description">Description</span>
                <p className='mt-4 mb-2 text-black-50' data-trans="TRAININGPROGRAM">TRAINING PROGRAM INTRODUCTION:</p>
                <small className='text-black-50 mt-2 d-inline-block' data-trans="course3Desc">{``}</small>
              </div>
            <div className="outline mt-4" id='outline'>
                <span className='fs-5 fw-bold d-block' data-trans="OutLine">Course Outlines:</span>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline1">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline2">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline3">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline4">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline5">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline6">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline7">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline8">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline9">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline10">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline11">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline12">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline13">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline14">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline15">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline16">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline17">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3outline18">{``}</small>
             </div>
             <div className="objective mt-4" id='objective'>
                    <span className='fs-5 fw-bold d-block' data-trans="CourseObjectives">Course Objectives:</span>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3objctive1">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3objctive2">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3objctive3">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3objctive4">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3objctive5">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3objctive6">{``}</small>
                    <small className='text-black-50 mt-3 d-block' data-trans="course3objctive7">{``}</small>
                </div>
                <div className="audience mt-4" id='audience'>
                    <span className='fs-5 fw-bold d-block' data-trans="Audience">Audience</span>
                        <small className='text-black-50 mt-3 d-block' data-trans="course3audiance1">{``}</small>
                        <small className='text-black-50 mt-3 d-block' data-trans="course3audiance2">{``}</small>
                        <small className='text-black-50 mt-3 d-block' data-trans="course3audiance3">{``}</small>
                        <small className='text-black-50 mt-3 d-block' data-trans="course3audiance4">{``}</small>
                        <small className='text-black-50 mt-3 d-block' data-trans="course3audiance5">{``}</small>
                        <small className='text-black-50 mt-3 d-block' data-trans="course3audiance6">{``}</small>
                        <small className='text-black-50 mt-3 d-block' data-trans="course3audiance7">{``}</small>
                </div>
                <div className="estimated-time mt-4" id='estimated-time'>
                    <span className='fs-5 fw-bold d-block' data-trans="EstimatedTime">Estimated Time</span>
                         <small className="text-black-50 mt-3 d-block" data-trans="Days3"></small>
                </div>
            </div>
            <div className={`col-xl-3 col-lg-3 col-md-8 col-sm-12 offset-xl-1 offset-lg-1 offset-md-0 ${styles.courseDetailesMain}`}>
                <div className={`${styles.courseDetailes}`}>
                    <ul className="list_wideger_desc list-unstyled p-0 ">
                        <li className={`d-flex mt-2 ${styles.liDiv}`}>
                              <div className={`${styles.iconHolder}`}>
                                    <img src="/images/courses_section/calendar.svg" alt=""/>
                                </div>
                              <div className="row">
                                  <small className="text-black-50" data-trans="Schedule">Schedule</small>
                                  <small className="fw-bold mt-1" data-trans="coursedate1jun">01-Jun-2023</small>
                              </div>
                        </li>
                        {/* <li className={`d-flex mt-2 ${styles.liDiv}`}>
                            <div className={`${styles.iconHolder}`}>
                                <img src="/images/courses_section/clock-fill2.svg" alt=""/>
                            </div>
                            <div className="row">
                                <small className="text-black-50" data-trans="EstimatedTime">Estimated Time</small>
                                <small className="fw-bold mt-1" data-trans="Days3"></small>
                            </div>
                        </li> */}
                        <li className={`d-flex mt-2 ${styles.liDiv}`}>
                            <div className={`${styles.iconHolder}`}>
                                <img src="/images/courses_section/pin-2.svg" alt=""/>
                            </div>
                            <div className={`${styles.liDiv2} row`}>
                                <small className="text-black-50" data-trans="Venue">Venue</small>
                                <small className="fw-bold mt-1" data-trans="KSA">KSA</small>
                            </div>
                        </li>					
                        <li className={`d-flex mt-2 ${styles.liDiv}`}>
                            <div className={`${styles.iconHolder}`}>
                                <img src="/images/courses_section/online_ic.svg" alt=""/>
                            </div>
                            <div className="row ">
                                <small className="text-black-50" data-trans="TrainingLanguage">Training Language</small>
                                <small className="fw-bold mt-1" data-trans="Arabic">Arabic</small>
                            </div>
                        </li>
                    </ul>
                </div>
                <ContactUs/>
            </div>
        </div>
    </div>   
    </main>
  </>
  )
}
// adding Layout
Course.getLayout = function getLayout(Course: ReactElement) {
return <CourseLayout childern={Course}></CourseLayout>;}
export default Course;
