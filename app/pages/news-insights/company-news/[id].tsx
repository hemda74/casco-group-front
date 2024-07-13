// pages/newss/[id].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';
import { NextPageWithLayout } from '../../_app';
import ViewerLayout from '../../../layouts/ViewerLayout';
import SingleNewsAr from '../../../components/News&Insghits/SingleNewsAr';
import SingleNewsEn from '../../../components/News&Insghits/SingleNewsEn';
import { fetchNews, fetchNewsById } from '../../../lib/fetchNews';
import { News } from '../../../types';

type Props = {
  news: News;
  newss: News[];
};

const SinglenewsPage: NextPageWithLayout<Props> = ({ news, newss }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>{news.title} | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={styles.bodyContainer}>
            <SingleNewsEn news={news} newss={newss} />
          </main>
        ) : (
          <main className={styles.bodyContainer}>
            <SingleNewsAr news={news} newss={newss} />
          </main>
        )}
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const newss = await fetchNews();
  const paths = newss.map((news) => ({
    params: { id: news.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const news = await fetchNewsById(id);
  const newss = await fetchNews();
  return {
    props: {
      news,
      newss,
    },
  };
};
// adding Layout
SinglenewsPage.getLayout = function getLayout(page: ReactElement) {
  return <ViewerLayout childern={page}></ViewerLayout>;
};

export default SinglenewsPage;
// pages/newss/[id].tsx
