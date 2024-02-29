import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import WhitePaperMainEn from '../../../components/News&Insghits/WhitePaperMainEn';

type Props = {};
// dymmy data for ui till handle working with api
const services: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>WhitePapers | CASCO</title>
      </Head>
      <main>
        <WhitePaperMainEn />
      </main>
    </>
  );
};
// adding Layout
services.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default services;
