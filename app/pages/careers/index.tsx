import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import MainPageEn from '../../components/Careers/MainPageEn';
import MainPageAr from '../../components/Careers/MainPageAr';

import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layouts/ViewerLayout';
type Props = {};
// dymmy data for ui till handle working with api
const Contactus: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Careers | CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <MainPageEn />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <MainPageAr />
        </main>
      )}
    </>
  );
};
// adding Layout
Contactus.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};

export default Contactus;
