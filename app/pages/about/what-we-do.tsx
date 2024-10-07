import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import WhatWeDoEn from '../../components/About/WhatWeDoEn';
import WhatWeDoAr from '../../components/About/WhatWeDoAr';
import TestmonalialsEn from '../../components/About/TestmonalialsEn';
import TestmonalialsAr from '../../components/About/TestmonalialsAr';
import WhereIsNextEn from '../../components/WhereIsNextEn';
import WhereIsNextAr from '../../components/WhereIsNextAr';
import { fetchTest } from '../../lib/fetchTest';
import { Test } from '../../types';

type Props = {
  test: Test[]
}
const IndexPage: NextPageWithLayout<Props> = ({ test }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>What We Do | CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <WhatWeDoEn />
          <TestmonalialsEn test={test} />
          <WhereIsNextEn />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <WhatWeDoAr />
          <TestmonalialsAr test={test} />
          <WhereIsNextAr />
        </main>
      )}
    </>
  );
};
export const getStaticProps = async () => {
  const test = await fetchTest();
  return {
    props: {
      test,
    },
  };
};
// adding Layout
IndexPage.getLayout = function getLayout(IndexPage: ReactElement) {
  return <ViewerLayout childern={IndexPage}></ViewerLayout>;
};

export default IndexPage;
