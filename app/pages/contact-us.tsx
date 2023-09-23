import React, { ReactElement } from 'react';
import Head from 'next/head';
import { NextPageWithLayout } from './_app';
import ContactUs from '../components/ContactUs';
type Props = {};
// dymmy data for ui till handle working with api
const contactus = (props: Props) => {
  return (
    <>
      <Head>
        <title>Contact Us | CASCO</title>
      </Head>
      <main>
        <ContactUs />
      </main>
    </>
  );
};
// adding Layout
export default contactus;
