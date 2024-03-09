import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import Service from '../../components/Services/ServiceEn';
import styles from '../../styles/Main.module.css';
type Props = {};
// dymmy data for ui till handle working with api

const services: NextPageWithLayout = (props: Props) => {
  return (
    <>
      <Head>
        <title>Services | CASCO</title>
      </Head>
      <main className={`${styles.bodyContainer}`}>
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
