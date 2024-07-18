import React from 'react';
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
import { Reco } from '../../types';

type Props = {
  reco: Reco[]
};
const Index: React.FC<Props> = ({ reco }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>About | CASCO</title>
      </Head>

      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <AboutMainSectionEn />
          <MeetOurTeamEn />
          <Recogention reco={reco} />
          <Footer />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
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
  return {
    props: {
      reco,
    },
  };
};
export default Index;
