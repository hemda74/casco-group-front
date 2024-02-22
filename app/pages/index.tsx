import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import HeroEn from '../components/HomePage/Hero-en';
import HeroAr from '../components/HomePage/Hero-ar';
import SecondElementEn from '../components/HomePage/SecondElementEn';
import CompaniesSectionEn from '../components/HomePage/Companies-Section-En';
import CompaniesSectionAr from '../components/HomePage/Companies-Section-Ar';
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
            <SecondElementEn />
            <CompaniesSectionEn />
          </main>
        ) : (
          <main>
            <HeroAr />
            <CompaniesSectionAr />
          </main>
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
