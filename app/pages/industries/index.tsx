// pages/contactus.tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import MainPageEn from '../../components/Industries/MainPageEn';
import MainPageAr from '../../components/Industries/MainPageAr';
import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layouts/ViewerLayout';
import { fetchIndustries } from '../../lib/fetchIndustries';
import { IndustryShort } from '../../types';

type Props = {
  industries: IndustryShort[];
};

const Contactus: NextPageWithLayout<Props> = ({ industries }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Industries | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={styles.bodyContainer}>
            <MainPageEn industries={industries} />
          </main>
        ) : (
          <main className={styles.bodyContainer}>
            <MainPageAr industries={industries} />
          </main>
        )}
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const industries = await fetchIndustries();
  return {
    props: {
      industries,
    },
  };
};

// adding Layout
Contactus.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};

export default Contactus;
