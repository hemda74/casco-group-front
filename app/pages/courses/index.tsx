import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api

const courses: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Courses | CASCO</title>
      </Head>
      <main>
        <h1>hello</h1>
      </main>
    </>
  );
};
// adding Layout
courses.getLayout = function getLayout(courses: ReactElement) {
  return <ViewerLayout childern={courses}></ViewerLayout>;
};
export default courses;
