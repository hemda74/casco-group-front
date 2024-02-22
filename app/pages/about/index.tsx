import React, { ReactElement } from 'react';
import Head from 'next/head';
import styles from '../../styles/Main.module.css';
import AboutMainSectionAr from '../../components/AboutMainSection-ar';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import AboutMainSectionEn from '../../components/AboutMainSection-en';
type Props = {};
// dymmy data for ui till handle working with api

const index: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>About Us | CASCO</title>
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
index.getLayout = function getLayout(index: ReactElement) {
  return <ViewerLayout childern={index}></ViewerLayout>;
};
export default index;
