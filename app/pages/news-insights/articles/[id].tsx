// pages/articles/[id].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useLanguage } from '../../../Context/LanguageContext';
import Layout from '../../../components/Layout';
import styles from '../../../styles/Main.module.css';
import { NextPageWithLayout } from '../../_app';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { fetchArticleById, fetchArticles } from '../../../lib/fetchArticles';
import { Event3 } from '../../../types';
import SingleArticleEn from '../../../components/News&Insghits/SingleArticlesEn';
import SingleArticleAr from '../../../components/News&Insghits/SingleArticlesAr';

type Props = {
  article: Event3;
  articles: Event3[];
};

const SingleeventPage: NextPageWithLayout<Props> = ({ article, articles }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>{article.title} | CASCO</title>
      </Head>
      <Layout>
        {language === 'en' ? (
          <main className={styles.bodyContainer}>
            <SingleArticleEn article={article} articles={articles} />
          </main>
        ) : (
          <main className={styles.bodyContainer}>
            <SingleArticleAr article={article} articles={articles} />
          </main>
        )}
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchArticles();
  const paths = articles.map((article) => ({
    params: { id: article.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const article = await fetchArticleById(id);
  const articles = await fetchArticles();
  return {
    props: {
      article,
      articles,
    },
  };
};
// adding Layout
SingleeventPage.getLayout = function getLayout(page: ReactElement) {
  return <ViewerLayout childern={page}></ViewerLayout>;
};

export default SingleeventPage;
// pages/articles/[id].tsx
