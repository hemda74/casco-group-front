// import React, { ReactElement } from 'react';
// import Head from 'next/head';
// import { useLanguage } from '../../Context/LanguageContext';
// import AboutMainSectionAr from '../../components/About/AboutMainSection-ar';
// import AboutMainSectionEn from '../../components/About/AboutMainSection-en';
// import MeetOurTeamEn from '../../components/About/MeetOurTeamEn';
// import Recogention from '../../components/About/Recogention';
// import styles from '../../styles/Main.module.css';
// import OldNavBar from '../../components/OldNavBar';
// import Footer from '../../components/Footer';
// import FooterAr from '../../components/FooterAr';
// import RecogentionAr from '../../components/About/RecogentionAr';
// import MeetOurTeamAr from '../../components/About/MeetOurTeamAr';
// import { fetchReco } from '../../lib/fetchRecogentions';
// import { Reco, Teams } from '../../types';
// import { fetchTeams } from '../../lib/fetchTeams';

// type Props = {
//   reco: Reco[];
//   teams: Teams[]
// };
// const Index: React.FC<Props> = ({ reco, teams }) => {
//   const { language } = useLanguage();
//   return (
//     <>
//       <Head>
//         <title>About | CASCO</title>
//       </Head>

//       {language === 'en' ? (
//         <main className={`${styles.bodyContainer}`}>
//           <OldNavBar />
//           <AboutMainSectionEn />
//           <MeetOurTeamEn teams={teams} />
//           <Recogention reco={reco} />
//           <Footer />
//         </main>
//       ) : (
//         <main className={`${styles.bodyContainer}`}>
//           <OldNavBar />
//           <AboutMainSectionAr />
//           <MeetOurTeamAr teams={teams} />
//           <RecogentionAr reco={reco} />
//           <FooterAr />
//         </main>
//       )}

//     </>
//   );
// };
// export const getStaticProps = async () => {
//   const reco = await fetchReco();
//   const teams = await fetchTeams();
//   return {
//     props: {
//       reco,
//       teams
//     },
//   };
// };
// export default Index;import React from 'react'

const id = () => {
  return (
    <div>
      hello
    </div>
  )
}

export default id
