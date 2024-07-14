import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';
import { NextPageWithLayout } from '../../_app';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { Event3 } from '../../../types';
import { fetchArticles } from '../../../lib/fetchArticles';
import ArticlesEn from '../../../components/News&Insghits/ArticlesEn';
import ArticlesAr from '../../../components/News&Insghits/ArticlesAr';
type Props = {
  articles: Event3[]
};
const Contactus: NextPageWithLayout<Props> = ({ articles }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Articles | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={`${styles.bodyContainer}`}>
            <ArticlesEn articles={articles} />
          </main>
        ) : (
          <main className={`${styles.bodyContainer}`}>
            <ArticlesAr articles={articles} />
          </main>
        )}
      </Layout>
    </>
  );
};
export const getStaticProps = async () => {
  const articles = await fetchArticles();
  return {
    props: {
      articles,
    },
  };
};
// adding Layout
Contactus.getLayout = function getLayout(contactus: ReactElement) {
  return <ViewerLayout childern={contactus}></ViewerLayout>;
};
export default Contactus;
