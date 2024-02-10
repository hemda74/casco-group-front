import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import Documents from '../components/Documents';
import OpeningSoon from '../components/OpeningSoon';
type Props = {};
const services: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Documents | CASCO</title>
      </Head>
      <main>{/* <Documents/> */}</main>
    </>
  );
};
// adding Layout
// services.getLayout = function getLayout(contactus: ReactElement) {
// return <ViewerLayout childern={contactus}></ViewerLayout>;}
export default services;
