import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
type Props = {};
// dymmy data for ui till handle working with api
const news: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>News | CASCO</title>
      </Head>
      <main></main>
    </>
  );
};
// adding Layout
news.getLayout = function getLayout(news: ReactElement) {
  return <ViewerLayout childern={news}></ViewerLayout>;
};
export default news;
