import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../../Context/LanguageContext';
import styles from '../../../styles/Main.module.css';
import { NextPageWithLayout } from '../../_app';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { News } from '../../../types';
import { fetchNews } from '../../../lib/fetchNews';
import NewsMainPageEn from '../../../components/News&Insghits/NewsMainPageEn';
import NewsMainPageAr from '../../../components/News&Insghits/NewsMainPageAr';
type Props = {
  newss: News[]
};
const Contactus: NextPageWithLayout<Props> = ({ newss }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>News | CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <NewsMainPageEn newss={newss} />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <NewsMainPageAr newss={newss} />
        </main>
      )}
    </>
  );
};
export const getStaticProps = async () => {
  const newss = await fetchNews();
  return {
    props: {
      newss,
    },
  };
};
// adding Layout
Contactus.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default Contactus;
