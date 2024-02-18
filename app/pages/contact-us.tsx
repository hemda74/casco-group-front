import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import ContactUs from '../components/ContactUs';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import getBillboard from '../actions/get-billboard';
import { url } from 'inspector';
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
          <h1>Ahmed</h1>
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
