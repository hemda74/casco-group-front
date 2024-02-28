import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import NewsMainPage from '../../../components/News&Insghits/NewsMainPageEn';

type Props = {};
// dymmy data for ui till handle working with api
const services: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>News | CASCO</title>
      </Head>
      <main>
        <NewsMainPage />
      </main>
    </>
  );
};
// adding Layout
services.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default services;
