import React, { ReactElement, useEffect, useState } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import ContactUs from '../components/ContactUs';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';

import { Cairo } from 'next/font/google';
import AboutMainSectionAr from '../components/AboutMainSection-ar';
import AboutMainSectionEn from '../components/AboutMainSection-en';

// If loading a variable font, you don't need to specify the font weight
const inter = Cairo({ subsets: ['latin'] });
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
            <AboutMainSectionEn />
          </main>
        ) : (
          <AboutMainSectionAr />
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
