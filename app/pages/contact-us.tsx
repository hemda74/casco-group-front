import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import ViewerLayout from './../layouts/ViewerLayout4';
import { NextPageWithLayout } from './_app';
import ContactUs from '../components/ContactUs';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/New/Layout';
type Props = {};
// dymmy data for ui till handle working with api
const Contactus: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Contact Us | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main>
            <ContactUs />
          </main>
        ) : (
          <div>Hello world</div>
        )}
      </Layout>
    </>
  );
};
// adding Layout
Contactus.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default Contactus;
