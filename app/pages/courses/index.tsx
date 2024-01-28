import React, { ReactElement } from 'react'
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout5';
import { NextPageWithLayout } from '../_app';
import Courses from '../../components/Courses';
type Props = {};
// dymmy data for ui till handle working with api
const dummyData={
  courses:[
    {
      course_id:0,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:1,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:2,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:3,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:4,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:5,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:6,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:7,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:8,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:9,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:10,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:11,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:12,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:13,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:14,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:15,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    {
      course_id:16,
      course_title:'',
      course_title_ar:'',
      course_image:'',
      course_vanue:'',
      course_vanue_ar:'',
      course_date:'',
      couesre_date_ar:'',
      course_link:'',
    },
    
  ]
}
const courses:NextPageWithLayout = (props:Props) => {
  return (
    <>
    <Head>
        <title>Courses | CASCO</title>
    </Head>
    <main>
      <Courses/>
    </main>
    </>
  )
}
// adding Layout
courses.getLayout = function getLayout(courses: ReactElement) {
return <ViewerLayout childern={courses}></ViewerLayout>;}
export default courses;