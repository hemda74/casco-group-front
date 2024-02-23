import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import Layout from '../components/Layout';
import HeroEn from '../components/HomePage/Hero-en';
import HeroAr from '../components/HomePage/Hero-ar';
import CompaniesSectionEn from '../components/HomePage/Companies-Section-En';
import CompaniesSectionAr from '../components/HomePage/Companies-Section-Ar';
import SecondElementEn from '../components/HomePage/SecondElementEn';
import SecondElementAr from '../components/HomePage/SecondElementAr';
import ThirdSectionMainEn from '../components/HomePage/ThirdSectionMainEn';
import FourthSectionMainEn from '../components/HomePage/FourthSectionMainEn';
import ThirdSectionMainAr from '../components/HomePage/ThirdSectionMainAr';
import FourthSectionMainAr from '../components/HomePage/FourthSectionMainAr';
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
            <ThirdSectionMainEn />
            <FourthSectionMainEn />
          </main>
        ) : (
          <main>
            <HeroAr />
            <SecondElementAr />
            <ThirdSectionMainAr />
            <FourthSectionMainAr />
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
