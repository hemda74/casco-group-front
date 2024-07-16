import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../layouts/ViewerLayout';
import { NextPageWithLayout } from './_app';
import { useLanguage } from '../Context/LanguageContext';
import styles from '../styles/Main.module.css';
import PraivacyPolicyEn from '../components/PraivacyPolicyEn';
import PraivacyPolicyAr from '../components/PraivacyPolicyAr';

type Props = {};
// dymmy data for ui till handle working with api
const Contactus: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Privacy Poicly | CASCO</title>
      </Head>

      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <PraivacyPolicyEn />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <PraivacyPolicyAr />
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
