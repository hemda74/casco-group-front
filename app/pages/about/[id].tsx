import React from 'react';
import Head from 'next/head';
import { useLanguage } from '../../Context/LanguageContext';
import styles from '../../styles/Main.module.css';
import MainTeamPageEn from '../../components/About/Team/TeamEn';
import MainTeamPageAr from '../../components/About/Team/TeamAr';
import { fetchReco } from '../../lib/fetchRecogentions';
import { Member, Reco, Teams } from '../../types';
import { fetchTeamById, fetchTeams } from '../../lib/fetchTeams';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchMembers } from '../../lib/fetchMember';
import OldNavBar from '../../components/OldNavBar';
import FooterAr from '../../components/FooterAr';
import Footer from '../../components/Footer';

type Props = {
  reco: Reco[];
  members: Member[];
  team: Teams;
};
const Index: React.FC<Props> = ({ reco, members, team }) => {
  const { language } = useLanguage();
  return (
    <>
      <Head>
        <title>{team.name} | CASCO</title>
      </Head>

      {language === 'en' ? (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <MainTeamPageEn reco={reco} members={members} team={team} />
          <Footer />
        </main>
      ) : (
        <main className={`${styles.bodyContainer}`}>
          <OldNavBar />
          <MainTeamPageAr reco={reco} members={members} team={team} />
          <FooterAr />
        </main>
      )}

    </>
  );
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const team = await fetchTeamById(id);
  const members = await fetchMembers();
  const reco = await fetchReco();

  return {
    props: {
      team,
      members,
      reco
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  const teams = await fetchTeams();
  const paths = teams.map((team) => ({
    params: { id: team.id },
  }));
  return { paths, fallback: false };
};

export default Index;

