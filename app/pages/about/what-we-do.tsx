import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import styles from '../../styles/Main.module.css';
import Testmonalials from '../../components/About/Testmonalials';
import WhatWeDoEn from '../../components/About/WhatWeDoEn';
import WhereIsNext from '../../components/About/WhereIsNextEn';

type Props = {};
const TeamMemberPage: NextPageWithLayout = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>About | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <WhatWeDoEn />
            <Testmonalials />
            <WhereIsNext />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <h1 className="m-auto">Wait For Arabic Content</h1>
          </main>
        )}
      </Layout>
    </>
  );
};
// adding Layout
TeamMemberPage.getLayout = function getLayout(TeamMemberPage: ReactElement) {
  return <ViewerLayout childern={TeamMemberPage}></ViewerLayout>;
};
export default TeamMemberPage;
