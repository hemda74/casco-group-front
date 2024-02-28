import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import MainPageEn from '../../components/Courses/MainPageEn';
type Props = {};
// dymmy data for ui till handle working with api

const courses: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Courses | CASCO</title>
      </Head>
      <main>
        <MainPageEn />
      </main>
    </>
  );
};
// adding Layout
courses.getLayout = function getLayout(courses: ReactElement) {
  return <ViewerLayout childern={courses}></ViewerLayout>;
};
export default courses;
