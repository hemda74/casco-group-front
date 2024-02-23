import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../_app';
import { useLanguage } from '../../Context/LanguageContext';
import Layout from '../../components/Layout';
import AboutMainSectionAr from '../../components/About/AboutMainSection-ar';
import AboutMainSectionEn from '../../components/About/AboutMainSection-en';
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
          <main>
            <AboutMainSectionEn />
          </main>
        ) : (
          <main>
            <AboutMainSectionAr />
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
