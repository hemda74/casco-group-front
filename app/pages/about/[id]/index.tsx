import React, { ReactElement } from 'react';
import Head from 'next/head';
import ViewerLayout from '../../../layouts/ViewerLayout';
import { NextPageWithLayout } from '../../_app';
import { useLanguage } from '../../../Context/LanguageContext';
import styles from '../../../styles/Main.module.css';
import MainTeamPageEn from '../../../components/About/Team/TeamEn';
import MainTeamPageAr from '../../../components/About/Team/TeamAr';
import { fetchReco } from '../../../lib/fetchRecogentions';
import { Reco, Teams } from '../../../types';
import { fetchTeams } from '../../../lib/fetchTeams';

type Props = {
  reco: Reco[];
  teams: Teams[];

};
const Index: NextPageWithLayout<Props> = ({ reco, teams }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>EGY TEAM | CASCO</title>
      </Head>

      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <MainTeamPageEn reco={reco} teams={teams} />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <MainTeamPageAr reco={reco} teams={teams} />
        </main>
      )}

    </>
  );
};
export const getStaticProps = async () => {
  const reco = await fetchReco();
  const teams = await fetchTeams();
  return {
    props: {
      reco,
      teams
    },
  };
};
// adding Layout
Index.getLayout = function getLayout(Index: ReactElement) {
  return <ViewerLayout childern={Index}></ViewerLayout>;
};
export default Index;
