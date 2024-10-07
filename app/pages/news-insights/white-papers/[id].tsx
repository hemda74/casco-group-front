// pages/events/[id].tsx
import React, { ReactElement } from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useLanguage } from '../../../Context/LanguageContext';
import styles from '../../../styles/Main.module.css';
import { NextPageWithLayout } from '../../_app';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { fetchPaperById, fetchPapers } from '../../../lib/fetchWhitePapers';
import { Event2 } from '../../../types';
import SinglePaperAr from '../../../components/News&Insghits/SinglePaperAr';
import SinglePaperEn from '../../../components/News&Insghits/SinglePaperEn';

type Props = {
  paper: Event2;
  papers: Event2[];
};

const SingleeventPage: NextPageWithLayout<Props> = ({ paper, papers }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>{paper.title} | CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={styles.bodyContainer}>
          <SinglePaperEn paper={paper} papers={papers} />
        </main>
      ) : (
        <main className={styles.bodyContainer}>
          <SinglePaperAr paper={paper} papers={papers} />
        </main>
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const papers = await fetchPapers();
  const paths = papers.map((paper) => ({
    params: { id: paper.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const paper = await fetchPaperById(id);
  const papers = await fetchPapers();
  return {
    props: {
      paper,
      papers,
    },
  };
};
// adding Layout
SingleeventPage.getLayout = function getLayout(page: ReactElement) {
  return <ViewerLayout childern={page}></ViewerLayout>;
};

export default SingleeventPage;

