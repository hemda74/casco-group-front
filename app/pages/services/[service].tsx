import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import MainPageEn from '../../components/Services/MainPageEn';
import Service from '../../components/Services/service';

type Props = {};
// dymmy data for ui till handle working with api

const services: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Services | CASCO</title>
      </Head>
      <main>
        <Service />
      </main>
    </>
  );
};
// adding Layout
services.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default services;
