import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import ContactUs from '../components/ContactUs';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
type Props = {};
const Contactus: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Home | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main>
            <ContactUs />
          </main>
        ) : (
          <div className="fs-1">hello world</div>
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
