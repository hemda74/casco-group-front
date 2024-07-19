import React, { ReactElement } from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import AboutMainSectionAr from '../../components/About/AboutMainSection-ar';
import AboutMainSectionEn from '../../components/About/AboutMainSection-en';
import MeetOurTeamEn from '../../components/About/MeetOurTeamEn';
import Recogention from '../../components/About/Recogention';
import styles from '../../styles/Main.module.css';
import OldNavBar from '../../components/OldNavBar';
import Footer from '../../components/Footer';
import FooterAr from '../../components/FooterAr';
import RecogentionAr from '../../components/About/RecogentionAr';
import MeetOurTeamAr from '../../components/About/MeetOurTeamAr';
import { fetchReco } from '../../lib/fetchRecogentions';
import { Reco, Teams } from '../../types';
import { NextPageWithLayout } from '../_app';
import ViewerLayout from '../../layouts/ViewerLayout';
import { fetchTeams } from '../../lib/fetchTeams';

type Props = {
  reco: Reco[];
  teams: Teams[]
};
const Index: NextPageWithLayout<Props> = ({ reco, teams }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>About | CASCO</title>
      </Head>

      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>

          <AboutMainSectionEn />
          <MeetOurTeamEn teams={teams} />
          <Recogention reco={reco} />
          <Footer />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <AboutMainSectionAr />
          <MeetOurTeamAr />
          <RecogentionAr reco={reco} />
          <FooterAr />
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
// ad
// adding Layout
Index.getLayout = function getLayout(Index: ReactElement) {
  return <ViewerLayout childern={Index}></ViewerLayout>;
};
export default Index;