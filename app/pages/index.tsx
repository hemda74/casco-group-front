import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import HeroEn from '../components/HomePage/Hero-en';
import HeroAr from '../components/HomePage/Hero-ar';
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
            <HeroEn />
          </main>
        ) : (
          <HeroAr />
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
