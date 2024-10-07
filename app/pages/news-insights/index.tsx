import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import MainPageAr from '../../components/News&Insghits/MainPageAr';
import styles from '../../styles/Main.module.css';
import MainPageEn from '../../components/News&Insghits/MainPageEn';
import OldNavBar from '../../components/OldNavBar';
import FooterAr from '../../components/FooterAr';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchNews } from '../../lib/fetchNews';
import { fetchArticles } from '../../lib/fetchArticles';
import { fetchEvents } from '../../lib/fetchEvents';
import { fetchPapers } from '../../lib/fetchWhitePapers';
import { News, Event, Event2, Event3 } from '../../types';
type Props = {
  newss: News[],
  events: Event[],
  papers: Event2[],
  articles: Event3[],
};
const Index: React.FC<Props> = ({ newss, events, articles, papers }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>NEWS & INSIGITHS | CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <MainPageEn newss={newss} papers={papers} articles={articles} events={events} />
          <FooterAr />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <MainPageAr newss={newss} papers={papers} articles={articles} events={events} />
          <FooterAr />
        </main>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const newss = await fetchNews();
  const articles = await fetchArticles();
  const events = await fetchEvents();
  const papers = await fetchPapers();

  return {
    props: {
      newss,
      papers,
      articles,
      events
    },
  };
};
export default Index;

