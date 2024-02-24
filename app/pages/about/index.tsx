import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import AboutMainSectionAr from '../../components/About/AboutMainSection-ar';
import AboutMainSectionEn from '../../components/About/AboutMainSection-en';
import MeetOurTeamEn from '../../components/About/MeetOurTeamEn';
import Recogention from '../../components/About/Recogention';
import AccreditedBodiesCompaines from '../../components/About/Recogention';
import styles from '../../styles/Main.module.css';

type Props = {};
const Index: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Home | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <AboutMainSectionEn />
            <MeetOurTeamEn />
            <Recogention />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <AboutMainSectionAr />
            <MeetOurTeamEn />
            <Recogention />
          </main>
        )}
      </Layout>
    </>
  );
};
// adding Layout
Index.getLayout = function getLayout(Index: ReactElement) {
  return <ViewerLayout childern={Index}></ViewerLayout>;
};
export default Index;
