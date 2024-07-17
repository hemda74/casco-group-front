import React from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import OurCultureEn from '../../components/About/OurCultureEn';
import OldNavBar from '../../components/OldNavBar';
import OurCultureAr from '../../components/About/OurCultureAr';
import FooterAr from '../../components/FooterAr';
import Footer from '../../components/Footer';
type Props = {};
const TeamMemberPage = (props: Props) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>Our Cluture| CASCO</title>
      </Head>
      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <OurCultureEn />
          <Footer />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <OurCultureAr />
          <FooterAr />
        </main>
      )}
    </>
  );
};
export default TeamMemberPage;
